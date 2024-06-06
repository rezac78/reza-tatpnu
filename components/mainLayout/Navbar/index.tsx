"use client"

import React, {useEffect, useState} from 'react';
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import NavLinks from "../Navbar/navLinks";
import Logo from "@/components/common/Logo";
import Image from "next/image";
import LoginModal from "@/components/mainLayout/LoginModal";
import {useAuthContext} from "@/context/auth/hooks";

const Navbar = () => {
    const {authenticated, cartCount}: any = useAuthContext()
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        if (authenticated) {
            cartCount();
        }
    }, [authenticated]);


    return (
        <header className="z-[100] sticky top-0 w-full bg-white text-md  border-b shadow-[0_3px_10px_rgba(0,0,0,0.1)]">
            <div className={` mx-auto`}>
                <div className="bg-[#484848] text-white hidden sm:flex items-center justify-between gap-2 h-8">
                    <div className="flex gap-1 items-center text-xs lg:text-sm pr-2 lg:pr-14">
                        {/*<Image*/}
                        {/*    src={"/images/navbar/top34555565.png.png"}*/}
                        {/*    alt="laptop-img"*/}
                        {/*    width={49}*/}
                        {/*    height={26}*/}
                        {/*/>*/}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                            <path fill="currentColor"
                                  d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"/>
                        </svg>
                        <span className={"whitespace-nowrap font-digit"}>021-91091314</span>

                    </div>
                    <div className="h-full flex gap-0 lg:gap-4 items-center justify-end">
            <span className="hidden lg:flex text-xs lg:text-sm w-full font-digit">
              پشتیبانی همه روزه از ساعت 8 الی 22
            </span>
                        <Image
                            loading="lazy"
                            width={130}
                            height={46}
                            src={"/images/navbar/image-303.png"}
                            alt="flag-img"
                        />
                    </div>
                </div>
            </div>

            <div
                className="flex flex-wrap sm:justify-start sm:flex-nowrap h-20">
                <div
                    className="container w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
                    aria-label="Global">
                    <Logo/>
                    <div className="sm:order-3 flex items-center gap-x-2">
                        <Sheet open={menu}
                        onOpenChange={setMenu}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5"/>
                                    {/*<span className="sr-only">Toggle navigation menu</span>*/}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="mt-5 grid font-medium" onClick={() => setMenu(!menu)}>
                                    <NavLinks/>
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <LoginModal/>
                    </div>
                    <div id="navbar-alignment"
                         className="hs-collapse hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto md:block sm:order-2">
                        <div className="flex items-center">
                            <NavLinks/>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
};

export default Navbar;