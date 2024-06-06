"use client"

import React, {useEffect, useState} from 'react';
import LoginLayout from "@/components/pages/Login/layout";
import {Button} from "@/components/ui/button";
import {useLoginModalContext} from "@/context/loginModal";
import {useAuthContext} from "@/context/auth/hooks";
import {UserIcon} from "lucide-react";
import Link from "next/link";
import {DotLoading} from "@/components/common/Loading";
import NavbarProfileMenu from "@/components/mainLayout/Navbar/navbarProfileMenu";
import Logout from "@/components/pages/profile/logout";

const LoginModal = () => {
    const {loginModal, setLoginModal}: any = useLoginModalContext()
    const {authenticated, loading, user}: any = useAuthContext();
    const [openProfileMenu, setOpenProfileMenu] = useState(false);
    const [openLogout, setOpenLogout] = useState(false);

    useEffect(() => {
        if (window !== undefined) {
            if (loginModal) document.body.style.overflow = 'hidden';
            else document.body.style.overflowY = 'unset';
        }
    }, [loginModal]);
    useEffect(() => {
        const handleScroll = () => {
            // setScrollY(window.scrollY);
            setOpenProfileMenu(false);
        };

        // Add scroll event listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up by removing event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures the effect only runs once, similar to componentDidMount

    const CartIconWithBadge = ({number}: { number: number }) => (
        <Link
            href={"/cart"}>
            <Button variant="ghost" className='relative'>
                {number !== 0 && (
                    <span
                        className="w-6 h-6 bg-primary rounded-full absolute flex items-center justify-center left-0 top-0 text-white font-digit z-10">
                        {number}
                    </span>
                )}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                     height={"24"} width={"24"}
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M232,64V192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32h64A8,8,0,0,1,232,64Z"
                          opacity="0.2"/>
                    <path
                        d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z"/>
                </svg>
            </Button>
        </Link>
    );
    return (
        loading ? <DotLoading/> : (
            loginModal ?
                <div onClick={() => setLoginModal(false)}
                     className={'z-[1000] fixed top-0 left-0 right-0 bottom-0  backdrop-blur flex'}>
                    <LoginLayout/>
                </div>
                :
                authenticated ?
                    <div className={'flex md:gap-x-3 items-center relative'}>
                        <CartIconWithBadge number={user.cartCount}/>
                        <Button variant="ghost"
                                onClick={() => {
                                    setOpenProfileMenu(true);
                                }}
                                onMouseEnter={() => {
                                    setOpenProfileMenu(true);
                                }}
                        >
                            <UserIcon/>
                        </Button>
                        {openProfileMenu && (
                            <NavbarProfileMenu
                                user={user}
                                setOpenProfileMenu={setOpenProfileMenu}
                                setOpenLogout={setOpenLogout}
                            />
                        )}
                        <Logout openLogout={openLogout} setOpenLogout={setOpenLogout}/>
                    </div>
                    :
                    <Button onClick={() => setLoginModal(true)}>
                        ورود و ثبت نام
                    </Button>)
    );
};

export default LoginModal;