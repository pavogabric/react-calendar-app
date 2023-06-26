import { addWeeks } from 'date-fns';
import { FC, useState } from 'react';
import { DayView } from '..';
import { Button } from '../../../../shared/components';
import { CalendarEvent } from '../../../../shared/types';
import EventsUtils from '../../utils/EventsUtils';
import styles from './WeekView.module.scss';

interface Props {
    events: CalendarEvent[];
    date?: Date;
    hideButtons?: boolean;
    hideDayTitles?: boolean;
}

const WeekView: FC<Props> = ({
    events,
    date = new Date(),
    hideButtons = false,
    hideDayTitles = false,
}) => {
    const [currentDate, setCurrentDate] = useState(date);

    const days = EventsUtils.getWeekDays(currentDate);

    const today = new Date();
    const disablePreviousButton = EventsUtils.shouldDisablePreviousBtn(today, days[0]);

    return (
        <div className={styles.container}>
            {!hideButtons && (
                <div className={styles.actions}>
                    <Button
                        variant="secondary"
                        onClick={() => setCurrentDate(addWeeks(currentDate, -1))}
                        disabled={disablePreviousButton}>
                        Previous week
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setCurrentDate(addWeeks(currentDate, 1))}>
                        Next week
                    </Button>
                </div>
            )}
            <div className={styles.days}>
                {days.map((day) => (
                    <DayView
                        key={String(day)}
                        events={events}
                        date={day}
                        hideButtons
                        hideDayTitle={hideDayTitles}
                    />
                ))}
            </div>
        </div>
    );
};

export default WeekView;
