import api from '../../../core/api/services/ApiService';
import {
    CalendarEventRequestData,
    CalendarEventsResponse,
    CalendarListResponse,
} from '../../../shared/types';

export class CalendarServices {
    URL = 'https://www.googleapis.com/calendar/v3/calendars';

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
                `${this.URL}/${calendarId}/events?timeMin=${timeMin}&singleEvents=true&orderBy=startTime`
            )
        );
        return data;
    }

    async createCalendarEvent(calendarId: string, body: CalendarEventRequestData) {
        const data = api.responseHandler(
            await api.post<CalendarEventsResponse>(`${this.URL}/${calendarId}/events`, body)
        );
        return data;
    }

    async deleteCalendarEvent(eventId: string, calendarId: string) {
        const data = api.responseHandler(
            await api.delete<CalendarEventsResponse>(`${this.URL}/${calendarId}/events/${eventId}`)
        );
        return data;
    }
}

const calendarService = new CalendarServices();

export default calendarService;
