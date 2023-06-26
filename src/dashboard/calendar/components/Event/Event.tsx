import { FC, useState } from 'react';
import { Button, ConfirmationModal } from '../../../../shared/components';
import { CalendarEvent } from '../../../../shared/types';
import { formatStringDate } from '../../../../shared/utils';
import { useDeleteCalendarEvent } from '../../hooks';
import styles from './Event.module.scss';

interface Props {
    event: CalendarEvent;
}

const Event: FC<Props> = ({ event }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const { summary, start, end, id } = event;

    const { deleteCalendarEvent } = useDeleteCalendarEvent(id);

    return (
        <>
            <div className={styles.event}>
                <h4>{summary}</h4>
                <div className={styles.details}>
                    <p>Date: {formatStringDate(start.dateTime, 'dd/MM/yyyy')}</p>
                    <p>Start time: {formatStringDate(start.dateTime, 'HH:mm')}</p>
                    <p>End time: {formatStringDate(end.dateTime, 'HH:mm')}</p>
                </div>
                <div className={styles.actions}>
                    <Button variant="danger" size="small" onClick={() => setOpenDeleteModal(true)}>
                        Delete
                    </Button>
                </div>
            </div>

            <ConfirmationModal
                open={openDeleteModal}
                title="Are you sure you want to delete this event?"
                description="If you delete this event it will be deleted forever. Only way to return it will be to create a new one with same info."
                onClose={() => setOpenDeleteModal(false)}
                onConfirm={() => deleteCalendarEvent()}
            />
        </>
    );
};

export default Event;
