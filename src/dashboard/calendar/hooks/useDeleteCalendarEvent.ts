import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCalendar } from '.';
import { calendarService } from '../services';

const useDeleteCalendarEvent = (eventId: string) => {
    const { calendar } = useCalendar();
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['deleteCalendarEvent', eventId],
        mutationFn: () => calendarService.deleteCalendarEvent(eventId, calendar?.id ?? ''), // TODO fix empty string fallback
        onSuccess: () => {
            queryClient.invalidateQueries(['calendarEvents', calendar?.id ?? '']);
        },
    });

    return { deleteCalendarEvent: mutate };
};

export default useDeleteCalendarEvent;
