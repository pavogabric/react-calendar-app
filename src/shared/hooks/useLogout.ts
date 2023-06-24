import { useNavigate } from 'react-router';
import { RoutesEnum } from '../enums';
import LocalStoreUtil from '../utils/LocalStoreUtils';

interface UseLogout {
    logout: () => void;
}

const useLogout = (): UseLogout => {
    const navigate = useNavigate();

    const logout = () => {
        LocalStoreUtil.remove('user');
        navigate(RoutesEnum.Login);
    };

    return { logout };
};

export default useLogout;
