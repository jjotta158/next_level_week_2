import {
    Request,
    Response,
    request,
    response
} from "express";
import db from "../database/connection";


export default class ConnectionsController {
    async index(req: Request, res: Response) {
        const totalConnections = await db('connection').count("* as total")

        const {
            total
        } = totalConnections[0]

        return response.json({
            total
        })
    }
    async create(req: Request, res: Response) {
        const {
            user_id
        } = req.body

        await db('connection').insert({
            user_id,
        })
    }
}