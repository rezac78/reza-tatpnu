"use client"

import React from 'react';
import Navbar from "@/components/mainLayout/Navbar";
import Footer from "@/components/mainLayout/Footer";
import {usePathname} from "next/navigation";
import {AuthProvider} from "@/context/auth/jwt";
import {Toaster} from "react-hot-toast";
import {LoginModalWrapper} from "@/context/loginModal";

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({children}) => {
    const path = usePathname();

    return (
        <AuthProvider>
            <LoginModalWrapper>
                    {
                        path.includes('login') || path.includes('profile') ?
                            <>
                                {children}
                            </>
                            :
                            <div className={' min-h-screen flex flex-col '}>
                                <Navbar/>
                                <main className={'container flex-grow flex flex-col'}>
                                    {children}
                                </main>
                                <Footer/>
                            </div>
                    }
            </LoginModalWrapper>
            <Toaster/>
        </AuthProvider>
    );
};

export default MainLayout;