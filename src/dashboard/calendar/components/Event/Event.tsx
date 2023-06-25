import { FC } from 'react';
import { CalendarEvent } from '../../../../shared/types';
import { formatStringDate } from '../../../../shared/utils';
import styles from './Event.module.scss';

interface Props {
    event: CalendarEvent;
}

const Event: FC<Props> = ({ event }) => {
    const { summary, start, end } = event;
    return (
        <div className={styles.event}>
            <h4>{summary}</h4>
            <p>Date: {formatStringDate(start.dateTime, 'dd/MM/yyyy')}</p>
            <p>Start time: {formatStringDate(start.dateTime, 'HH:mm')}</p>
            <p>End time: {formatStringDate(end.dateTime, 'HH:mm')}</p>
        </div>
    );
};

export default Event;
