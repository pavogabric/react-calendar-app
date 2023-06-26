import { FC, useState } from 'react';
import { CalendarEventFormModal } from '..';
import { Button, Dropdown } from '../../../../shared/components';
import { TimeRangeOptions } from '../../enums';
import styles from './CalendarHeader.module.scss';

interface Props {
    selectedTimeRange: TimeRangeOptions;
    timeRangeOptions: {
        label: string;
        value: TimeRangeOptions;
    }[];
    onTimeRangeChange: (value: TimeRangeOptions) => void;
}

const CalendarHeader: FC<Props> = ({ selectedTimeRange, timeRangeOptions, onTimeRangeChange }) => {
    const [showCreateEventForm, setShowCreateEventForm] = useState(false);

    return (
        <>
            <div className={styles.header}>
                <Button variant="primary" onClick={() => setShowCreateEventForm(true)}>
                    Create new event +
                </Button>
                <Dropdown
                    value={selectedTimeRange}
                    options={timeRangeOptions}
                    label="Select time range:"
                    onChange={onTimeRangeChange}
                />
            </div>

            <CalendarEventFormModal
                show={showCreateEventForm}
                onClose={() => setShowCreateEventForm(false)}
            />
        </>
    );
};

export default CalendarHeader;
