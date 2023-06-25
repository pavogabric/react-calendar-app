import type { AxiosInstance } from 'axios';
import { appendToken } from '.';
import { tokenService } from '../../token/services';

const interceptRequest = (httpClient: AxiosInstance): void => {
    httpClient.interceptors.request.use(
        (config) => {
            const userToken = tokenService.token;

            appendToken(config, userToken);

            return config;
        },
        (error) => Promise.reject(error)
    );
};

export default interceptRequest;
