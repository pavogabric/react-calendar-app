import { useCalendarList } from '.';

const useCalendar = () => {
    const { calendarList } = useCalendarList();
    // Calendar selection was not described in the task so select the first one in the list.
    const calendar = calendarList.length > 0 ? calendarList[0] : undefined;

    return { calendar };
};

export default useCalendar;
