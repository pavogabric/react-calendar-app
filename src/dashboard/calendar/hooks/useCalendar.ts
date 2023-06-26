import { useCalendarList } from '.';

const useCalendar = () => {
    const { calendarList } = useCalendarList();
    const calendar = calendarList.length > 0 ? calendarList[0] : undefined;

    return { calendar };
};

export default useCalendar;
