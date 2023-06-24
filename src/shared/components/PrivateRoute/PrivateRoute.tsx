import useUser from '../../hooks/useUser';

const PrivateRoute = () => {
    const user = useUser();

    return <div>PrivateRoute</div>;
};

export default PrivateRoute;
