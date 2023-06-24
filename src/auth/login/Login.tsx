import { Button } from '../../shared/components';
import styles from './Login.module.scss';
import { useLogin } from './hooks';

const Login = () => {
    const login = useLogin();

    return (
        <div className={styles.login}>
            <Button onClick={() => login()}>Login with Google 🚀</Button>
        </div>
    );
};

export default Login;
