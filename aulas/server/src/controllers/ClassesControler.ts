import db from '../database/connection';
import {
    Request,
    Response,
    request,
    response
} from 'express'
import convertTimeToMinutes from '../convertTimeToMinutes'

interface ScheduleItem {
    week_day: number,
        from: string,
        to: string
}
export default class ClassesController {

    async index(req: Request, res: Response) {
        const filters = request.query;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing Filters to Search Classes'
            })
        }

        const timeInMinutes = convertTimeToMinutes(filters.time as string)

        const classes = db('classes')
            .whereExists(function () {
                this.select("class_schedule.*")
                    .from("class_schedule")
                    .whereRaw("`class_schedules`.`class_id` = `classes`.`id`")
                    .whereRaw("`class_schedules`.`week_day` = ??", [
                        Number(filters.week_day),
                    ])
                    .whereRaw("`class_schedules` . `from` <= ??", [timeInMinutes])
                    .whereRaw("`class_schedules` . `from` > ??", [timeInMinutes]);
            })
            .where('classes.subject', '=', filters.subject as string)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(["classes.*", "users.*"])
    }

    async create(req: Request, res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body

        const trx = await db.transaction();

        try {
            const insertedUserIds = await trx("users").insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUserIds[0];

            const insertedClassesId = await trx("classes").insert({
                subject,
                cost,
                user_id,
            });

            const classId = insertedClassesId[0];

            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    classId,
                    week_day: scheduleItem.week_day,
                    from: convertTimeToMinutes(scheduleItem.from),
                    to: convertTimeToMinutes(scheduleItem.to),
                };
            });

            await trx("class_schedules").insert(classSchedule);

            await trx.commit();

            return res.status(201).send();
        } catch (e) {
            await trx.rollback()
            console.log(e)
        }
    }
}