"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {profileTab} from "@/lib/utils";
import {useState, useEffect} from 'react';
import {Button} from "@/components/ui/button";


const MobileProfileMenu = ({setOpenLogout}: any) => {
        const path = usePathname()
        const [onlyIcon, setOnlyIcon] = useState(false)

        useEffect(() => {
            if (onlyIcon) {

                const handleScroll = () => {
                    setOnlyIcon(false); // Change to true when scrolled
                };

                window.addEventListener('scroll', handleScroll);

                return () => {
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        }, [onlyIcon]);


        return (
            <div
                className={`lg:hidden fixed top-20 right-0 lg:min-w-[320px] bg-white shadow-[0_1px_4px_#0a164629] z-50`}>

                <div
                    className={`relative border-b p-1 lg:p-6`}>

                    <div className={'flex items-center gap-x-3 '}>
                        <Button
                            variant="ghost"
                            onClick={() => setOnlyIcon(!onlyIcon)}
                            className={'p-3 md:p-4 text-primary'}>
                            {/*<svg width="18" height="19" viewBox="0 0 18 19" fill="none"*/}
                            {/*     xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <path d="M1 9.30743H11M1 9.30743L5 13.4099M1 9.30743L5 5.20499M17 1.10254V17.5123"*/}
                            {/*          stroke="#EEBF47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
                            {/*</svg>*/}
                            <svg className={'scale-150'} width="18" height="18" viewBox="0 0 24 18"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2.5"
                                 strokeLinecap="round">
                                <path d="M26 1L11 0.999999"/>
                                <path d="M26 8L3 8"/>
                                <path d="M26 15L11 15"/>
                                <path d="M1 8.24219L6 3.00098"/>
                                <path d="M1 8L6 13"/>
                            </svg>

                        </Button>
                    </div>
                </div>
                <ul className={`lg:p-6 flex flex-col`}>
                    {profileTab.map((item: any, index) => (
                            index <= profileTab.length - 2 &&
                            <li key={index}>
                                <Link href={item.link}
                                      className={`flex items-center ${onlyIcon && ' gap-x-3 '} p-3 md:p-4 cursor-pointer ${path === item.link && 'bg-gray-200/80'}`}>
                                    <span>{item.icon}</span>

                                    <span
                                        className={`${onlyIcon ? ' w-[140px]  opacity-100' : ' w-0  opacity-0'}  overflow-hidden transition-all duration-700 whitespace-nowrap `}>{item.name}</span>

                                </Link>
                            </li>
                        )
                    )
                    }
                    <li onClick={() => setOpenLogout(true)}
                        className={`flex items-center ${onlyIcon && ' gap-x-3 '} p-3 md:p-4 mt-0 lg:mt-12 cursor-pointer border-t`}
                    >
                        {/*@ts-ignore*/}
                        <span>{profileTab[profileTab.length - 1].icon}</span>

                        <span
                            className={`${onlyIcon ? ' w-[140px]  opacity-100' : ' w-0  opacity-0'} overflow-hidden transition-all duration-700 whitespace-nowrap`}>{profileTab[profileTab.length - 1].name}</span>

                    </li>
                </ul>

            </div>
        )
    }
;

export default MobileProfileMenu;