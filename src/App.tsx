import styles from './App.module.scss';
import Login from './auth/login/Login';

function App() {
    return (
        <div className={styles.app}>
            <Login />
        </div>
    );
}

export default App;
