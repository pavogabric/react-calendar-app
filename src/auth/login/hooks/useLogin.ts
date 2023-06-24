import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../../shared/enums';
import LocalStoreUtil from '../../../shared/utils/LocalStoreUtils';

const useLogin = () => {
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            LocalStoreUtil.set('user', tokenResponse);
            navigate(RoutesEnum.Home);
        },
        scope: 'email profile openid https://www.googleapis.com/auth/calendar',
        // prompt: 'consent', // to see the grant access popup
    });

    return login;
};

export default useLogin;
