import { FC, useState } from 'react';
import { timeRangeOptions } from '../../constants';
import { TimeRangeOptions } from '../../enums';
import { useCalendarEvents } from '../../hooks';
import { CalendarHeader, DayView, MonthView, WeekView } from '../index';
import styles from './CalendarEvents.module.scss';

interface Props {
    calendarId: string;
}

const CalendarEvents: FC<Props> = ({ calendarId }) => {
    const [timeRange, setTimeRange] = useState<TimeRangeOptions>(TimeRangeOptions.Week);

    const { events } = useCalendarEvents(calendarId);

    return (
        <div className={styles.events}>
            <CalendarHeader
                selectedTimeRange={timeRange}
                timeRangeOptions={timeRangeOptions}
                onTimeRangeChange={(value) => setTimeRange(value)}
            />

            {timeRange === TimeRangeOptions.Day && <DayView events={events} isolatedView />}
            {timeRange === TimeRangeOptions.Week && <WeekView events={events} />}
            {timeRange === TimeRangeOptions.Month && <MonthView events={events} />}
        </div>
    );
};

export default CalendarEvents;
