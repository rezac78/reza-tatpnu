import  { AxiosRequestConfig } from 'axios';
import axios from "@/lib/axios";
// import { toast } from 'react-toastify';

interface Props {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    url: string,
    data?: any,
    callback: (status: boolean, data: any) => void
}

export const AxiosComponent = async (
    method: Props['method'],
    url: Props['url'],
    data: Props['data'] = null,
    callback: Props['callback']
): Promise<void> => {
    const config: AxiosRequestConfig = {
        method: method,
        url: url,
    };

    if (data) config.data = data;

    try {
        const res = await axios(config);
        if (res.data.status) {
            callback(true, res.data.data ? res.data.data : res.data);
        }
    } catch (e: any) {
        callback(false, '');
        const statusCode = e?.request?.status;
        if (statusCode === 400 || statusCode === 402 || statusCode === 405 || statusCode === 500) {
            // handle specific status codes if needed
        } else if (statusCode === 401) {
            window.location.replace('/login');
        } else if (statusCode === 403) {
            // toast.error('شما اجازه دسترسی به این بخش را ندارید!');
        } else if (statusCode === 404) {
            callback(false, 'داده ای یافت نشد');
        }
    }
}
