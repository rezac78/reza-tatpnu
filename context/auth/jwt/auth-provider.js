"use client";

import {useMemo, useEffect, useReducer, useCallback} from "react";

import axios, {endpoints} from "@/lib/axios";

import {AuthContext} from "./auth-context";
import {setSession} from "./utils";
import {AUTH_URL, PROFILE_URL} from "@/config-global";
import toast from "react-hot-toast";
import {AuthAxiosComponent} from "@/lib/AuthAxiosComponent";
import {convertProductFunction} from "@/lib/utils";

// ----------------------------------------------------------------------

const initialState = {
    user: null,
    loading: true,
};

const reducer = (state, action) => {
    if (action.type === "INITIAL") {
        return {
            loading: false,
            user: action.payload.user,
        };
    }
    if (action.type === "LOGIN") {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === "UPDATEUSER") {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload.user,
            },
        };
    }
    if (action.type === 'CART') {
        return {
            ...state,
            user: {
                ...state.user,
                cartCount: action.payload.cartCount
            },
        };
    }

    if (action.type === "REGISTER") {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === "LOGOUT") {
        return {
            ...state,
            user: null,
        };
    }
    return state;
};

// ----------------------------------------------------------------------

const STORAGE_KEY = "accessToken";

export function AuthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const GetUserProfile = async (token) => {
        return await axios.get(PROFILE_URL + endpoints.auth.profile, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    };

    const initialize = useCallback(async () => {
        try {
            const accessToken = sessionStorage.getItem(STORAGE_KEY);
            if (accessToken) {
                setSession(accessToken);

                const response = await axios.get(PROFILE_URL + endpoints.auth.profile);

                const {user, informations} = response.data.data;
                dispatch({
                    type: "INITIAL",
                    payload: {
                        user: {
                            ...user,
                            cartCount: 0,
                            accessToken,
                            informations,
                        },
                    },
                });
            } else {
                dispatch({
                    type: "INITIAL",
                    payload: {
                        user: null,
                    },
                });
            }
        } catch (error) {
            // console.error(error);
            dispatch({
                type: "INITIAL",
                payload: {
                    user: null,
                },
            });
        }
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    // LOGIN
    const loginPass = useCallback(async (mobile, password) => {
        const infosFormData = new FormData();
        infosFormData.append("phone_number", mobile);
        infosFormData.append("password", password);
        await AuthAxiosComponent({
            method: "post",
            url: endpoints.auth.login,
            data: infosFormData,
            callback: ({token}) => {
                const api = async () => {
                    // const user = profileApi.data.data
                    const res = await GetUserProfile(token);
                    const {user, informations} = res.data?.data || [];
                    setSession(token);

                    dispatch({
                        type: "LOGIN",
                        payload: {
                            user: {
                                ...user,
                                token,
                                cartCount: 0,
                                informations,
                            },
                        },
                    });
                };

                api();
            }
        });
    }, []);

    const loginCode = useCallback(async (mobile, code) => {
        const infosFormData = new FormData();
        infosFormData.append("phone_number", mobile);
        infosFormData.append("code", code);
        await AuthAxiosComponent({
            method: "post",
            url: endpoints.auth.register,
            data: infosFormData,
            callback: ({token}) => {
                const api = async () => {
                    const res = await GetUserProfile(token);
                    const {user, informations} = res.data.data;
                    setSession(token);

                    dispatch({
                        type: "LOGIN",
                        payload: {
                            user: {
                                ...user,
                                token,
                                cartCount: 0,
                                informations,
                            },
                        },
                    });
                };
                api();
            }
        });
    }, []);
    const resetPass = useCallback(async (resetCode, newPassword) => {
        const infosFormData = new FormData();
        infosFormData.append("code", resetCode);
        infosFormData.append("new_password", newPassword);
        await AuthAxiosComponent({
            method: "post",
            url: endpoints.auth.reset,
            data: infosFormData,
            callback: ({token}) => {
                const api = async () => {
                    const res = await GetUserProfile(token);
                    const {user, informations} = res.data.data;
                    dispatch({
                        type: "LOGIN",
                        payload: {
                            user: {
                                ...user,
                                token,
                                informations,
                            },
                        },
                    });
                };
                api();
            }
        });
    }, []);

    // UPDATE USER
    const updateUser = useCallback(async () => {
        try {
            const accessToken = sessionStorage.getItem(STORAGE_KEY);
            if (accessToken) {
                setSession(accessToken);

                const response = await axios.get(PROFILE_URL + endpoints.auth.profile);

                const {user, informations} = response.data.data;
                dispatch({
                    type: "UPDATEUSER",
                    payload: {
                        user: {
                            ...user,
                            token: accessToken,
                            informations,
                        },
                    },
                });
            }
        } catch (error) {
            // console.error(error);
            dispatch({
                type: "INITIAL",
                payload: {
                    user: null,
                },
            });
        }
    }, []);

    // REGISTER
    const register = useCallback(async (infos) => {
        const infosFormData = new FormData();
        infosFormData.append("phone_number", infos.phone_number);
        infosFormData.append(
            "first_name",
            infos.name ? infos.name : "کاربر همراهان"
        );
        infosFormData.append("code", infos.code);
        await AuthAxiosComponent({
            method: "post",
            url: endpoints.auth.register,
            data: infosFormData,
            callback: ({token}) => {
                const api = async () => {
                    const accountEditPass = await fetch(AUTH_URL + "users/edit", {
                        method: "PUT",
                        body: JSON.stringify({
                            password: infos.password,
                            first_name: infos.name ? infos.name : "کاربر همراهان",
                        }),
                        headers: {
                            Authorization: "Bearer " + token,
                            "Content-Type": "application/json",
                            // 'Accept':'application/json',
                        },
                    });
                    await accountEditPass.json();
                    sessionStorage.setItem(STORAGE_KEY, token);

                    const res = await GetUserProfile(token);
                    const {user, informations} = res.data.data;
                    dispatch({
                        type: "REGISTER",
                        payload: {
                            user: {
                                ...user,
                                token,
                                informations,
                            },
                        },
                    });
                };
                api();
            }
        });
    }, []);

    // Cart Count
    const cartCount = useCallback(async () => {
        await axios.get('carts/users')
            .then(({data}) => {
                if (data?.status) {
                    const products = convertProductFunction(data.data)
                    dispatch({
                        type: 'CART',
                        payload: {
                            cartCount: products.length
                        },
                    });
                }

            }).catch(e => {
                // console.log(e)
            })


    }, [])

    // LOGOUT
    const logout = useCallback(async () => {
        window.location.replace("/");
        setSession(null);
        dispatch({
            type: "LOGOUT",
        });
    }, []);

    // ----------------------------------------------------------------------

    const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";

    const status = state.loading ? "loading" : checkAuthenticated;

    const memoizedValue = useMemo(
        () => ({
            user: state.user,
            method: "jwt",
            loading: status === "loading",
            authenticated: status === "authenticated",
            unauthenticated: status === "unauthenticated",
            //
            loginPass,
            loginCode,
            resetPass,
            register,
            cartCount,
            updateUser,
            logout,
        }),
        [
            loginPass,
            loginCode,
            resetPass,
            logout,
            updateUser,
            register,
            cartCount,
            state.user,
            status,
        ]
    );

    return (
        <AuthContext.Provider value={memoizedValue}>
            {children}
        </AuthContext.Provider>
    );
}
