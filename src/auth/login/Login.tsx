import styles from './Login.module.scss';

interface Props {
    title?: string;
}

const Login = (props: Props) => {
    return (
        <div className={styles.login}>
            <p>test</p>
        </div>
    );
};

export default Login;
