import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCalendar } from '.';
import { calendarService } from '../services';
import { CalendarEventFormValues } from '../types';
import EventsUtils from '../utils/EventsUtils';

const useCreateCalendarEvent = () => {
    const { calendar } = useCalendar();
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationKey: ['createCalendarEvent'],
        mutationFn: (formValues: CalendarEventFormValues) => {
            const requestObject = EventsUtils.createCalendarEventRequestObject(formValues);
            return calendarService.createCalendarEvent(calendar?.id ?? '', requestObject);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['calendarEvents', calendar?.id ?? '']);
        },
    });

    return { createCalendarEvent: mutateAsync };
};

export default useCreateCalendarEvent;
