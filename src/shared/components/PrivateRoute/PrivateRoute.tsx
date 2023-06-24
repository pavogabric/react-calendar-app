import { Navigate, Outlet } from 'react-router-dom';
import { RoutesEnum } from '../../enums';
import { useUser } from '../../hooks';

const PrivateRoute = () => {
    const user = useUser();

    return user?.access_token ? <Outlet /> : <Navigate to={RoutesEnum.Login} />;
};

export default PrivateRoute;
