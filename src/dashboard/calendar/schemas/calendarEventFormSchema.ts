import * as yup from 'yup';
import { CalendarEventFormValues } from '../types';

const requiredText = 'This field is required';

const calendarEventFormSchema: yup.SchemaOf<CalendarEventFormValues> = yup.object().shape({
    summary: yup
        .string()
        .min(3, 'Minimum 3 characters needed for the title.')
        .max(30, 'Maximum of 30 characters allowed for the title.')
        .required(requiredText),
    date: yup.date().required(requiredText),
    startTime: yup.string().required(requiredText),
    endTime: yup
        .string()
        .required(requiredText)
        .test('isAfterStartTime', 'End time must be after start time', (value, context) => {
            if (value && value > context.parent.startTime) {
                return true;
            }
            return false;
        }),
});

export default calendarEventFormSchema;
