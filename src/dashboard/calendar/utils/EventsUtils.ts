import { addDays, compareDesc, differenceInDays, isSameDay } from 'date-fns';
import { CalendarEvent } from '../../../shared/types';

class EventsUtils {
    public static getEventsForDate = (events: CalendarEvent[], date: Date) => {
        const items = events.filter((event) => {
            const eventDate = new Date(event.start.dateTime);
            return isSameDay(date, eventDate);
        });

        return items;
    };

    public static shouldShowPreviousBtn = (leftDate: Date, rightDate: Date) => {
        return compareDesc(leftDate, rightDate) <= 0 ? false : true;
    };

    public static getWeekDays = (startDate: Date) => {
        const days = [startDate];

        for (let i = 1; i < 7; i++) {
            days.push(addDays(startDate, i));
        }

        return days;
    };

    public static shouldShowPreviousMonthBtn = (date: Date) => {
        const today = new Date();
        return differenceInDays(today, date) < 0;
    };
}

export default EventsUtils;
