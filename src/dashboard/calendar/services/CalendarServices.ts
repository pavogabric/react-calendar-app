import api from '../../../core/api/services/ApiService';
import { CalendarEventsResponse, CalendarListResponse } from '../../../shared/types';

export class CalendarServices {
    // TODO add base path

    async getCalendarList() {
        const data = api.responseHandler(
            await api.get<CalendarListResponse>(
                'https://www.googleapis.com/calendar/v3/users/me/calendarList'
            )
        );
        return data;
    }

    async getCalendarEvents(calendarId: string) {
        const timeMin = new Date().toISOString();

        const data = api.responseHandler(
            await api.get<CalendarEventsResponse>(
                `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?timeMin=${timeMin}&singleEvents=true&orderBy=startTime`
            )
        );
        return data;
    }
}

const calendarService = new CalendarServices();

export default calendarService;
