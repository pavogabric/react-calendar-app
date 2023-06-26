import classNames from 'classnames';
import { addDays, format } from 'date-fns';
import { FC, useState } from 'react';
import { Event } from '..';
import { Button } from '../../../../shared/components';
import { CalendarEvent } from '../../../../shared/types';
import EventsUtils from '../../utils/EventsUtils';
import styles from './DayView.module.scss';

interface Props {
    events: CalendarEvent[];
    date?: Date;
    hideButtons?: boolean;
    hideDayTitle?: boolean;
    isolatedView?: boolean;
}

const DayView: FC<Props> = ({
    events,
    date = new Date(),
    hideButtons = false,
    hideDayTitle = false,
    isolatedView = false,
}) => {
    const [currentDate, setCurrentDate] = useState(date);

    const eventsForDay = EventsUtils.getEventsForDate(events, currentDate);

    const disablePrevBtn = EventsUtils.shouldDisablePreviousBtn(new Date(), currentDate);

    return (
        <div
            className={classNames(styles.container, {
                [styles.isolatedView]: isolatedView,
            })}>
            {!hideDayTitle && <h3>{format(currentDate, 'EEEE do LLL')}</h3>}

            {!hideButtons && (
                <div className={styles.actions}>
                    <Button
                        variant="secondary"
                        size="small"
                        disabled={disablePrevBtn}
                        onClick={() => setCurrentDate(addDays(currentDate, -1))}>
                        Previous day
                    </Button>
                    <Button
                        variant="secondary"
                        size="small"
                        onClick={() => setCurrentDate(addDays(currentDate, 1))}>
                        Next day
                    </Button>
                </div>
            )}

            <div className={styles.eventsContainer}>
                {eventsForDay.length === 0 && <p className={styles.noEvents}>No events.</p>}
                {eventsForDay.length > 0 &&
                    eventsForDay.map((event) => <Event key={event.id} event={event} />)}
            </div>
        </div>
    );
};

export default DayView;
