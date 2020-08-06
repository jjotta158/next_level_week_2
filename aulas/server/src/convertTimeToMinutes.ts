export default function convertTimeToMinutes(time: string) {
    const [hour, min] = time.split(':')
    return parseInt(hour) * 60 + parseInt(min);
}