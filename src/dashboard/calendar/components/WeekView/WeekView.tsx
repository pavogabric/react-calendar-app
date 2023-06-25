import { addWeeks } from 'date-fns';
import { FC, useState } from 'react';
import { DayView } from '..';
import { CalendarEvent } from '../../../../shared/types';
import EventsUtils from '../../utils/EventsUtils';
import styles from './WeekView.module.scss';

interface Props {
    events: CalendarEvent[];
    date?: Date;
    hideButtons?: boolean;
}

const WeekView: FC<Props> = ({ events, date = new Date(), hideButtons = false }) => {
    const [currentDate, setCurrentDate] = useState(date);

    const days = EventsUtils.getWeekDays(currentDate);

    const today = new Date();
    const showPreviousButton = EventsUtils.shouldShowPreviousBtn(today, days[0]);

    return (
        <div className={styles.container}>
            {!hideButtons && (
                <div className={styles.actions}>
                    {showPreviousButton && (
                        <button
                            onClick={() => setCurrentDate(addWeeks(currentDate, -1))}
                            className={styles.prevBtn}>
                            Previous week
                        </button>
                    )}
                    <button
                        onClick={() => setCurrentDate(addWeeks(currentDate, 1))}
                        className={styles.nextBtn}>
                        Next week
                    </button>
                </div>
            )}
            <div className={styles.days}>
                {days.map((day) => (
                    <DayView key={String(day)} events={events} date={day} hideButtons />
                ))}
            </div>
        </div>
    );
};

export default WeekView;
