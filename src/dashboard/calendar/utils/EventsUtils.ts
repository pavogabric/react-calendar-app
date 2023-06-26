import { addDays, compareDesc, differenceInDays, isSameDay, set } from 'date-fns';
import { CalendarEvent, CalendarEventRequestData } from '../../../shared/types';
import { CalendarEventFormValues } from '../types';

class EventsUtils {
    public static getEventsForDate = (events: CalendarEvent[], date: Date) => {
        const items = events.filter((event) => {
            const eventDate = new Date(event.start.dateTime);
            return isSameDay(date, eventDate);
        });

        return items;
    };

    public static shouldDisablePreviousBtn = (leftDate: Date, rightDate: Date) => {
        return compareDesc(leftDate, rightDate) <= 0 ? true : false;
    };

    public static getWeekDays = (startDate: Date) => {
        const days = [startDate];

        for (let i = 1; i < 7; i++) {
            days.push(addDays(startDate, i));
        }

        return days;
    };

    public static shouldDisablePreviousMonthBtn = (date: Date) => {
        const today = new Date();
        return differenceInDays(today, date) >= 0;
    };

    public static getDateFormatForDateInput = (date: Date) => {
        return date.toISOString().substring(0, 10);
    };

    public static getHourAndMinutesFromTimeString = (time: string) => {
        // example: for "15:30" it will return 15 and 30
        const timeSplitted = time.split(':');
        const [hour, minute] = timeSplitted;

        return { hour: +hour, minute: +minute };
    };

    public static createCalendarEventRequestObject = (
        formValues: CalendarEventFormValues
    ): CalendarEventRequestData => {
        const { hour: startHour, minute: startMinute } =
            EventsUtils.getHourAndMinutesFromTimeString(formValues.startTime);

        const { hour: endHour, minute: endMinute } = EventsUtils.getHourAndMinutesFromTimeString(
            formValues.endTime
        );

        const startDateTime = set(formValues.date, {
            hours: startHour,
            minutes: startMinute,
            seconds: 0,
        });

        const endDateTime = set(formValues.date, {
            hours: endHour,
            minutes: endMinute,
            seconds: 0,
        });

        return {
            summary: formValues.summary,
            start: {
                dateTime: startDateTime,
                timeZone: 'Europe/Belgrade',
            },
            end: {
                dateTime: endDateTime,
                timeZone: 'Europe/Belgrade',
            },
        };
    };
}

export default EventsUtils;
