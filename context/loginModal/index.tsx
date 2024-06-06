"use client"

import React, {createContext, useContext, useEffect, useState} from "react";

const LoginModalContext = createContext(undefined)

interface LoginModalWrapperProps {
    children: React.ReactNode
}

export function LoginModalWrapper({children}: LoginModalWrapperProps) {

    const [loginModal, setLoginModal] = useState(false)

    useEffect(() => {
        if (window !== undefined) {
            if (loginModal) document.body.style.overflow = 'hidden';
            else document.body.style.overflowY = 'unset';
        }
    }, [loginModal]);

    return (
        // @ts-ignore
        <LoginModalContext.Provider value={{
            loginModal,
            setLoginModal
        }}>
            {children}
        </LoginModalContext.Provider>
    )
}

export function useLoginModalContext() {
    return useContext(LoginModalContext)
}