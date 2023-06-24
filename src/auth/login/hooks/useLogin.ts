import { useGoogleLogin } from '@react-oauth/google';
import LocalStoreUtil from '../../../shared/utils/LocalStoreUtils';

const useLogin = () => {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => LocalStoreUtil.set('user', tokenResponse),
        scope: 'email profile openid https://www.googleapis.com/auth/calendar',
        // prompt: 'consent', // to see the grant access popup
    });

    return login;
};

export default useLogin;
