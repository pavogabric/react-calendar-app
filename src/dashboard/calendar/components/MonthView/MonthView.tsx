import { addMonths, addWeeks } from 'date-fns';
import { FC, useState } from 'react';
import { WeekView } from '..';
import { CalendarEvent } from '../../../../shared/types';
import EventsUtils from '../../utils/EventsUtils';
import styles from './MonthView.module.scss';

interface Props {
    events: CalendarEvent[];
    date?: Date;
}

const MonthView: FC<Props> = ({ events, date = new Date() }) => {
    const [currentDate, setCurrentDate] = useState(date);

    const showPreviousButton = EventsUtils.shouldShowPreviousMonthBtn(currentDate);

    return (
        <div className={styles.container}>
            <div className={styles.actions}>
                {showPreviousButton && (
                    <button
                        onClick={() => setCurrentDate(addMonths(currentDate, -1))}
                        className={styles.prevBtn}>
                        Previous month
                    </button>
                )}
                <button
                    onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                    className={styles.nextBtn}>
                    Next month
                </button>
            </div>
            <div key={String(currentDate)} className={styles.month}>
                <WeekView events={events} date={currentDate} hideButtons />
                <WeekView events={events} date={addWeeks(currentDate, 1)} hideButtons />
                <WeekView events={events} date={addWeeks(currentDate, 2)} hideButtons />
                <WeekView events={events} date={addWeeks(currentDate, 3)} hideButtons />
                <WeekView events={events} date={addWeeks(currentDate, 4)} hideButtons />
            </div>
        </div>
    );
};

export default MonthView;
