import { FC, useState } from 'react';
import { timeRangeOptions } from '../../constants';
import { TimeRangeOptions } from '../../enums';
import { useCalendarEvents } from '../../hooks';
import { DayView, MonthView, WeekView } from '../index';
import styles from './CalendarEvents.module.scss';

interface Props {
    calendarId: string;
}

const CalendarEvents: FC<Props> = ({ calendarId }) => {
    const [timeRange, setTimeRange] = useState<TimeRangeOptions>(TimeRangeOptions.Week);

    const { events } = useCalendarEvents(calendarId);

    const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeRange(e.target.value as TimeRangeOptions);
    };

    return (
        <div className={styles.events}>
            <div className={styles.header}>
                <h3>Calendar events:</h3>
                {/* TODO make dropdown component */}
                <select name="timeRange" value={timeRange} onChange={handleTimeRangeChange}>
                    {timeRangeOptions.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            {timeRange === TimeRangeOptions.Day && <DayView events={events} />}
            {timeRange === TimeRangeOptions.Week && <WeekView events={events} />}
            {timeRange === TimeRangeOptions.Month && <MonthView events={events} />}
        </div>
    );
};

export default CalendarEvents;
