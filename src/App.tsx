import { Route, Routes } from 'react-router-dom';
import Login from './auth/login/Login';
import GuestRoute from './shared/components/GuestRoute/GuestRoute';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute';
import { RoutesEnum } from './shared/enums';

function App() {
    return (
        <Routes>
            <Route element={<GuestRoute />}>
                <Route path={RoutesEnum.Login} element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path={RoutesEnum.Home} element={<div>dashboard</div>} />
            </Route>
        </Routes>
    );
}

export default App;
