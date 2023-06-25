import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './auth/login/Login';
import Calendar from './dashboard/calendar/Calendar';
import { GuestRoute, PrivateRoute } from './shared/components';
import { RoutesEnum } from './shared/enums';

function App() {
    return (
        <Routes>
            <Route element={<GuestRoute />}>
                <Route path={RoutesEnum.Login} element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path={RoutesEnum.Home} element={<Navigate to={RoutesEnum.Calendar} />} />
                <Route path={RoutesEnum.Calendar} element={<Calendar />} />
            </Route>
        </Routes>
    );
}

export default App;
