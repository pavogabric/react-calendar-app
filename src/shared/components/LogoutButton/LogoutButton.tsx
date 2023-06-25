import { Button } from '..';
import { useLogout } from '../../hooks';

const LogoutButton = () => {
    const logout = useLogout();
    return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
