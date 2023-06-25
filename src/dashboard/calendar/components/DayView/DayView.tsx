import { addDays, format } from 'date-fns';
import { FC, useState } from 'react';
import { Event } from '..';
import { CalendarEvent } from '../../../../shared/types';
import EventsUtils from '../../utils/EventsUtils';
import styles from './DayView.module.scss';

interface Props {
    events: CalendarEvent[];
    date?: Date;
    hideButtons?: boolean;
}

const DayView: FC<Props> = ({ events, hideButtons = false, date = new Date() }) => {
    const [currentDate, setCurrentDate] = useState(date);

    const eventsForDay = EventsUtils.getEventsForDate(events, currentDate);

    const today = new Date();
    const showPreviousButton = EventsUtils.shouldShowPreviousBtn(today, currentDate);

    return (
        <div className={styles.container}>
            <div>
                <h4>{format(currentDate, 'EEEE do LLL')}</h4>
                <br />
                {!hideButtons && (
                    <div>
                        {showPreviousButton && (
                            <button onClick={() => setCurrentDate(addDays(currentDate, -1))}>
                                Previous day
                            </button>
                        )}
                        <button onClick={() => setCurrentDate(addDays(currentDate, 1))}>
                            Next day
                        </button>
                    </div>
                )}
            </div>

            {eventsForDay.length === 0 && <p>No events for this day.</p>}
            {eventsForDay.length > 0 &&
                eventsForDay.map((event) => <Event key={event.id} event={event} />)}
        </div>
    );
};

export default DayView;
