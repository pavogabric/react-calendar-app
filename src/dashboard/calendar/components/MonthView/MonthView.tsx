import { addMonths, addWeeks } from 'date-fns';
import { FC, useState } from 'react';
import { WeekView } from '..';
import { Button } from '../../../../shared/components';
import { CalendarEvent } from '../../../../shared/types';
import EventsUtils from '../../utils/EventsUtils';
import styles from './MonthView.module.scss';

interface Props {
    events: CalendarEvent[];
    date?: Date;
}

const MonthView: FC<Props> = ({ events, date = new Date() }) => {
    const [currentDate, setCurrentDate] = useState(date);

    const disablePreviousMonthBtn = EventsUtils.shouldDisablePreviousMonthBtn(currentDate);

    return (
        <div className={styles.container}>
            <div className={styles.actions}>
                <Button
                    variant="secondary"
                    disabled={disablePreviousMonthBtn}
                    onClick={() => setCurrentDate(addMonths(currentDate, -1))}
                    className={styles.prevBtn}>
                    Previous month
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                    className={styles.nextBtn}>
                    Next month
                </Button>
            </div>
            <div key={String(currentDate)} className={styles.month}>
                <div className={styles.week}>
                    <h2>Week 1</h2>
                    <WeekView events={events} date={currentDate} hideButtons />
                </div>
                <div className={styles.week}>
                    <h2>Week 2</h2>
                    <WeekView events={events} date={addWeeks(currentDate, 1)} hideButtons />
                </div>
                <div className={styles.week}>
                    <h2>Week 3</h2>
                    <WeekView events={events} date={addWeeks(currentDate, 2)} hideButtons />
                </div>
                <div className={styles.week}>
                    <h2>Week 4</h2>
                    <WeekView events={events} date={addWeeks(currentDate, 3)} hideButtons />
                </div>
                <div className={styles.week}>
                    <h2>Week 5</h2>
                    <WeekView events={events} date={addWeeks(currentDate, 4)} hideButtons />
                </div>
            </div>
        </div>
    );
};

export default MonthView;
