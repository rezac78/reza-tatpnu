import axios from 'axios';

import {BASE_URL} from '@/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({baseURL: BASE_URL});

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error?.response?.status === 401) {
            // log out the user here
            // tokenExpired()
        }
        return error
    }
    // (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args:any) => {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, {...config});

    return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
    auth: {
        login: 'account/login',
        profile: 'users/profile',


        me: '/api/auth/me',
        register: 'account/confirm',
        reset: 'account/password/reset',
    },
};