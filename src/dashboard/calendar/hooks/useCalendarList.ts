import { useQuery } from '@tanstack/react-query';
import { calendarService } from '../services';

const useCalendarList = () => {
    const { data } = useQuery({
        queryKey: ['calendarList'],
        queryFn: () => calendarService.getCalendarList(),
    });

    return { calendarList: data?.items ?? [] };
};

export default useCalendarList;
