import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '..';
import { RoutesEnum } from '../../enums';
import { useUser } from '../../hooks';

const PrivateRoute = () => {
    const user = useUser();

    return user?.access_token ? (
        <>
            <Header />
            <Outlet />
        </>
    ) : (
        <Navigate to={RoutesEnum.Login} />
    );
};

export default PrivateRoute;
