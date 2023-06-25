import { useCalendarList } from '.';

// TODO add response type
const useCalendar = () => {
    const { calendarList } = useCalendarList();
    const calendar = calendarList.length > 0 ? calendarList[0] : undefined;

    return { calendar };
};

export default useCalendar;
