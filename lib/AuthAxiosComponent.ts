import { AUTH_URL } from "@/config-global";
import axios, { AxiosRequestConfig, Method } from "axios";
import toast from "react-hot-toast";

interface AuthAxiosComponentProps {
    method: Method;
    url: string;
    data?: any;
    callback: (response: any) => void;
}

export const AuthAxiosComponent = async ({
                                             method,
                                             url,
                                             data = null,
                                             callback,
                                         }: AuthAxiosComponentProps): Promise<void> => {
    const config: AxiosRequestConfig = {
        method: method,
        url: AUTH_URL + url,
        // headers: {
        //     "Api-Key": "pYY46c4maQLU0GEHUQiytucD7DTvsInC",
        // }
    };

    if (data) config.data = data;

    try {
        const res:any = await axios(config);
        console.warn('AxiosComponent => res: =>', res);

        const status = res?.data?.status || res?.response?.data?.status;
        const statusCode = res?.response?.status;
        // console.log('AxiosComponent => statusCode: =>', statusCode);

        if (String(statusCode).startsWith("4")) {
            console.error('AxiosComponent => String(statusCode).startsWith("4") =>');
            const msg = res.response.data.message;
            toast.error(msg ? msg : 'پیغامی یافت نشد');
        }

        if (status) {
            // console.log('AxiosComponent => status:true =>');
            callback(res.data.data ? res.data.data : res.data);
        } else {
            console.error('AxiosComponent => status:false =>');
        }
    } catch (e: any) {
        console.error('AxiosComponent => catch: error: =>', e);
        const msg = e?.response?.data?.message;
        toast.error(msg ? msg : 'خطا در دریافت اطلاعات');
    }
};
