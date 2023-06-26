import { Formik } from 'formik';
import { FC } from 'react';
import { CalendarEventForm } from '..';
import Modal from '../../../../shared/components/Modal/Modal';
import { calendarEventFormInitialValues } from '../../constants';
import { useCreateCalendarEvent } from '../../hooks';
import calendarEventFormSchema from '../../schemas/calendarEventFormSchema';
import { CalendarEventFormValues } from '../../types';

interface Props {
    show: boolean;
    onClose: () => void;
}

const CalendarEventFormModal: FC<Props> = ({ show, onClose }) => {
    const { createCalendarEvent } = useCreateCalendarEvent();

    const handleSubmit = async (values: CalendarEventFormValues) => {
        await createCalendarEvent(values);
        onClose();
    };

    return (
        <Modal open={show} onClose={onClose}>
            <Formik
                initialValues={calendarEventFormInitialValues}
                validationSchema={calendarEventFormSchema}
                onSubmit={handleSubmit}
                validateOnBlur
                validateOnMount
                validateOnChange
                enableReinitialize>
                <CalendarEventForm onClose={onClose} />
            </Formik>
        </Modal>
    );
};

export default CalendarEventFormModal;
