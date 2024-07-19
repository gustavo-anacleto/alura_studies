export function timeToSeconds(time: string): number{
    const [hours = "0", minutes  = "0", seconds  = "0"] = time.split(":")
    const hourInSeconds = Number(hours) * 3600
    const minutesInSeconds = Number(minutes) * 60
    return  hourInSeconds + minutesInSeconds + Number(seconds)
}