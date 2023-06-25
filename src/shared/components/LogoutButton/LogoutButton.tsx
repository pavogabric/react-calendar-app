import { Button } from '..';
import { useLogout } from '../../hooks';

const LogoutButton = () => {
    const logout = useLogout();
    return (
        <Button variant="textLight" onClick={logout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
