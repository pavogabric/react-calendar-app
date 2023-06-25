import { useQuery } from '@tanstack/react-query';
import { calendarService } from '../services';

const useCalendarEvents = (calendarId: string) => {
    const { data } = useQuery({
        queryKey: ['calendarEvents', calendarId],
        queryFn: () => calendarService.getCalendarEvents(calendarId),
    });

    return { events: data?.items ?? [] };
};

export default useCalendarEvents;
