
export class StringUtils {
    public toUpperCase(arg: string) {
        // if(!arg){
        //     throw new Error('Invalid args');
        // }
        return toUpperCase(arg);
    }
}

export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}

export type stringInfo = {
    lowercase: string,
    uppercase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

export function getStringInfo(arg: string): stringInfo {
    return {
        lowercase: arg.toLowerCase(),
        uppercase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {}  // add your custom properties here
    }
}

export function daysInCurrentMonthBetween(
    startDate: Date,
    endDate: Date,
    month_index: number,
) {
    const today = new Date();
    today.setMonth(month_index);
    const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0,
    ).getDate();
    const lastDate = new Date(today.getFullYear(), today.getMonth(), lastDay);

    //if year same as current but month is different then consider start as first day of month
    if (
        startDate.getMonth() < month_index &&
        startDate.getFullYear() === firstDate.getFullYear()
    ) {
        startDate = firstDate;
    }
    //if year same as current but month is different then consider end as last day of month

    if (
        endDate.getMonth() > month_index &&
        startDate.getFullYear() === firstDate.getFullYear()
    ) {
        endDate = lastDate;
    }

    if (endDate.getFullYear() > lastDate.getFullYear()) {
        endDate = lastDate;
    }
    const timeDifference = endDate.getTime() - startDate.getTime();
    const days = timeDifference / (1000 * 60 * 60 * 24) + 1;

    return Math.ceil(days);
}


export function convertTimestampToDateString(timestampMs: number) {
    // Create a Date object from the seconds
    const date = new Date(timestampMs * 100000);

    const daySingle = date.getDate();
    const day = String(daySingle).padStart(2, '0');

    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const month = monthNames[monthIndex];

    return `${day} ${month} ${year}`;
}