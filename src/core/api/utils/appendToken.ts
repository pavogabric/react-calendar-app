import type { AxiosRequestConfig } from 'axios';

const appendToken = (config: AxiosRequestConfig, token: string | undefined): void => {
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
};

export default appendToken;
