import { LogoutButton } from '../../shared/components';
import styles from './Calendar.module.scss';
import { CalendarEvents } from './components';
import { useCalendar } from './hooks';

const Calendar = () => {
    const { calendar } = useCalendar();

    if (!calendar) {
        return (
            <div className={styles.login}>
                <p>No Calendar.</p>
            </div>
        );
    }

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <p>Calendar page</p> <LogoutButton />
            </div>
            <CalendarEvents calendarId={calendar.id} />
        </div>
    );
};

export default Calendar;
