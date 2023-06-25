import { useNavigate } from 'react-router';
import { RoutesEnum } from '../enums';
import LocalStoreUtil from '../utils/LocalStoreUtils';

const useLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        LocalStoreUtil.remove('user');
        navigate(RoutesEnum.Login);
    };

    return logout;
};

export default useLogout;
