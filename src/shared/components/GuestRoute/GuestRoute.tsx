import { Navigate, Outlet } from 'react-router-dom';
import RoutesEnum from '../../enums/RoutesEnum';
import { useUser } from '../../hooks';

const GuestRoute = () => {
    const user = useUser();

    return user?.access_token ? <Navigate to={RoutesEnum.Home} /> : <Outlet />;
};

export default GuestRoute;
