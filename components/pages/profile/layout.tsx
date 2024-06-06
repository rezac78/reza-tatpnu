'use client'


import React, {useState} from "react";
import {AuthGuard} from "@/context/auth/guard";
import Logo from "@/components/common/Logo";
import ProfileMenu from "@/components/pages/profile/profileMenu";
import Logout from "./logout";
import BottomNavigation from "@/components/pages/profile/bottomNav";

const ProfileLayout: React.FC<any> = ({children}) => {
    const [openLogout, setOpenLogout] = useState(false)

    return (
        <AuthGuard>
            <div className={'relative w-full min-h-screen flex flex-col'}>
                <div className={'h-[64px] bg-white drop-shadow-sm sticky z-10 top-0  flex'}>
                    <div className={'w-full container my-auto'}>
                        <Logo/>
                    </div>
                </div>

                <div
                    className={`relative flex gap-x-3 lg:gap-x-6 px-3 container py-6`}>
                    <ProfileMenu setOpenLogout={setOpenLogout}/>
                    <div className={'flex-grow mb-[68px] lg:mb-0 mr-12 lg:mr-0'}>
                        {children}
                    </div>
                    <Logout openLogout={openLogout} setOpenLogout={setOpenLogout}/>
                </div>
                <BottomNavigation/>
            </div>

        </AuthGuard>
    );
};

export default ProfileLayout;