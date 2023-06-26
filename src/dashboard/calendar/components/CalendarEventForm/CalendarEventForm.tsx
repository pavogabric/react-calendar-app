import { FC } from 'react';
import { Button } from '../../../../shared/components';
import { CalendarEventFormValues } from '../../types';
import EventsUtils from '../../utils/EventsUtils';
import styles from './CalendarEventForm.module.scss';

import { useFormikContext } from 'formik';

interface Props {
    onClose: () => void;
}

const CalendarEventForm: FC<Props> = ({ onClose }) => {
    const { values, isValid, errors, handleChange, setFieldValue, submitForm } =
        useFormikContext<CalendarEventFormValues>();

    return (
        <form>
            <h3>Create new event</h3>

            <div className={styles.fields}>
                <div className={styles.field}>
                    <label>Title:</label>
                    <input
                        name="summary"
                        type="text"
                        value={values.summary}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.field}>
                    <label>Date:</label>
                    <input
                        name="date"
                        type="date"
                        value={EventsUtils.getDateFormatForDateInput(values.date)}
                        onChange={(e) => setFieldValue('date', new Date(e.target.value))}
                    />
                </div>

                <div className={styles.field}>
                    <label>Start time:</label>
                    <input
                        name="startTime"
                        type="time"
                        value={values.startTime}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.field}>
                    <label>End time:</label>
                    <input
                        name="endTime"
                        type="time"
                        min="15:00"
                        value={values.endTime}
                        onChange={handleChange}
                    />

                    {values.endTime && errors.endTime && (
                        <p className={styles.errorMsg}>{errors.endTime}</p>
                    )}
                </div>
            </div>

            <div className={styles.actions}>
                <Button variant="textDark" type="button" onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => submitForm()}
                    disabled={!isValid}>
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default CalendarEventForm;
