import { LogoutButton } from '..';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h2>Calendar App v1</h2>
            <div>
                <LogoutButton />
            </div>
        </header>
    );
};

export default Header;
