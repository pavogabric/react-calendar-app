import LocalStoreUtil from '../utils/LocalStoreUtils';

const useUser = () => {
    const user = LocalStoreUtil.get('user');

    return { user };
};

export default useUser;
