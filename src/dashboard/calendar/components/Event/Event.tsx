import { FC } from 'react';
import { CalendarEvent } from '../../../../shared/types';
import styles from './Event.module.scss';

interface Props {
    event: CalendarEvent;
}

const Event: FC<Props> = ({ event }) => {
    const { summary, start, end } = event;
    return (
        <div className={styles.event}>
            <h4>{summary}</h4>
            <p>Start {start.dateTime}</p>
            <p>End {end.dateTime}</p>
        </div>
    );
};

export default Event;
