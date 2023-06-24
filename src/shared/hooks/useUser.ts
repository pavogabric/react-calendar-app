import { User } from '../types';
import LocalStoreUtil from '../utils/LocalStoreUtils';

const useUser = (): User | undefined => {
    const user = LocalStoreUtil.get('user');

    return user;
};

export default useUser;
