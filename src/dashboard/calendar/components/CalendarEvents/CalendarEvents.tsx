import { FC } from 'react';
import { useCalendarEvents } from '../../hooks';
import { Event } from '../index';

interface Props {
    calendarId: string;
}

const CalendarEvents: FC<Props> = ({ calendarId }) => {
    const { events } = useCalendarEvents(calendarId);

    console.log(events);

    return (
        <div>
            <h3>Calendar events:</h3>
            <ul>
                {events.map((event) => (
                    <Event key={event.id} event={event} />
                ))}
            </ul>
        </div>
    );
};

export default CalendarEvents;
