import LocalStoreUtil from '../../../shared/utils/LocalStoreUtils';

class TokenService {
    get token(): string | undefined {
        return LocalStoreUtil.get('user')?.access_token;
    }
}

const tokenService = new TokenService();

export default tokenService;
