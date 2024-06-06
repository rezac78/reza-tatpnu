// import { paths } from 'src/routes/paths';



// ----------------------------------------------------------------------

import axios from "@/lib/axios";

// ----------------------------------------------------------------------

export const setSession = (accessToken:any) => {
    if (accessToken) {
        sessionStorage.setItem('accessToken', accessToken);

        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // This function below will handle when token is expired
        // const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
        // tokenExpired();
    } else {
        sessionStorage.removeItem('accessToken');

        delete axios.defaults.headers.common.Authorization;
    }
};
