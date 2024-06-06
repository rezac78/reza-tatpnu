"use client"

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {EditIcon} from "lucide-react";
import {profileTab} from "@/lib/utils";

const NavbarProfileMenu = ({user, className, setOpenProfileMenu, setOpenLogout}: any) => {
        const path = usePathname()
        // const {user} = useUserContext()

        const NameNumber = ({className}: any) => (
            <div className={className + ' whitespace-pre flex flex-col'}>
                <span>{user.first_name}</span>
                <span className={'font-digit text-sm'}>{user.phone_number}</span>
            </div>)

        const EditIconLink = ({className}: any) => (
            <Link href={'/profile/userInfo'} className={className + ' absolute left-4 top-4 font-normal'}>
                <EditIcon/>
            </Link>)

        return (
            <div
                onMouseLeave={() => {
                    if (setOpenProfileMenu) setOpenProfileMenu(false)
                }}
                className={className + '  ' + ` absolute top-0 left-0 w-[220px] z-[9999]  bg-white shadow-[0_1px_4px_#0a164629] `}>
                {/*${!onlyIcon && '!z-[10000000] !absolute !right-3 !left-[unset] bottom-[unset] h-auto'}*/}
                <div
                    className={`relative border-b p-1`}>
                    {/*<button onClick={() => setOnlyIcon(!onlyIcon)}*/}
                    {/*        className={`${onlyIcon ? '' : ''} lg:hidden absolute -left-4 bottom-2 bg-white shadow-[0px_1px_5px_1px_rgba(0,0,0,0.25)] w-9 h-9 rounded-full flex items-center justify-center z-10`}>*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">*/}
                    {/*        <path fill="currentColor" fillRule="evenodd"*/}
                    {/*              d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"*/}
                    {/*              clipRule="evenodd"/>*/}
                    {/*    </svg>*/}
                    {/*</button>*/}
                    <div className={'flex items-center gap-x-3'}>
                        {/*<Image*/}
                        {/*    className={`my-3 lg:my-0 w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] lg:w-[46px] lg:h-[46px] !mx-[unset] `}*/}
                        {/*    src={'/icons/profile/no_avatar.svg'}*/}
                        {/*    width={46} height={46} alt={'profile-placeholder'}/>*/}
                        <NameNumber/>

                    </div>
                    <EditIconLink/>
                </div>
                <ul className={`p-0 flex flex-col `}>
                    {profileTab.map((item, index) => (
                            index <= profileTab.length - 2 &&
                            <li key={index}>
                                <Link href={item.link}
                                      className={`flex items-center gap-x-3 p-2 cursor-pointer hover:bg-gray-100/60 ${path === item.link && 'bg-gray-100/60'}`}>
                                    <span>{item.icon}</span>

                                    <span>{item.name}</span>

                                </Link>
                            </li>
                        )
                    )
                    }
                    <li onClick={() => setOpenLogout(true)}
                        className={`flex items-center gap-x-3 p-2 mt-0 cursor-pointer hover:bg-gray-100/60 border-t`}
                    >
                        <span>{profileTab[profileTab.length - 1].icon}</span>
                        <span>{profileTab[profileTab.length - 1].name}</span>
                    </li>
                </ul>
            </div>
        )
    }
;

export default NavbarProfileMenu;