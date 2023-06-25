import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { interceptRequest } from '../utils';

class ApiService {
    private _httpClient = axios.create({
        baseURL: '',
        timeout: 120000,
    });

    constructor() {
        interceptRequest(this._httpClient);
    }

    responseHandler<T = unknown>({ data }: AxiosResponse<T>) {
        return data;
    }

    async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return await this._httpClient.get<T>(url, config);
    }

    async post<T = unknown, B = unknown>(
        url: string,
        body: B,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return await this._httpClient.post<T>(url, body, config);
    }

    async put<T = unknown, B = unknown>(
        url: string,
        body: B,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return await this._httpClient.put<T>(url, body, config);
    }

    async patch<T = unknown, B = unknown>(
        url: string,
        body: B,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return await this._httpClient.patch<T>(url, body, config);
    }

    async delete<T = null>(url: string): Promise<AxiosResponse<T>> {
        return await this._httpClient.delete<T>(url);
    }
}

const api = new ApiService();

export default api;
