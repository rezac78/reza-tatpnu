"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {EditIcon} from "lucide-react";
import {profileTab} from "@/lib/utils";
import {useAuthContext} from "@/context/auth/hooks";

const DesktopProfileMenu = ({ setOpenLogout }:any) => {
  const path = usePathname();
  const { user }:any = useAuthContext();
  const NameNumber = ({ className }:any) => (
    <div className={className + " whitespace-pre w-full flex flex-col"}>
      <span>{user?.first_name ? user?.first_name : "کاربر همراهان"}</span>
      <span className={"font-digit text-sm"}>{user?.phone_number}</span>
    </div>
  );

  const EditIconLink = ({ className }:any) => (
    <Link
      href={"/profile/userInfo"}
      className={className + " absolute left-4 top-4 text-[18px]"}
    >
      <EditIcon />
    </Link>
  );
  return (
    <div
      className={`hidden lg:block sticky h-fit top-[76px] left-0 min-w-[60px] lg:min-w-[320px] bg-white shadow-[0_1px_4px_#0a164629] `}
    >
      <div className={`relative border-b p-1 lg:p-6`}>
        <div className={"flex items-center gap-x-3"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 88 88"
          >
            <g id="Group_12484" transform="translate(-112 -38)">
              <g id="circle-09_1_" transform="translate(112 38)">
                <rect id="Rectangle_2703" width="88" height="88" fill="none" />
                <g id="Group_10598">
                  <path
                    id="Path_14230"
                    d="M44,0A44,44,0,1,0,88,44,44.049,44.049,0,0,0,44,0Zm0,80.667A36.51,36.51,0,0,1,18.568,70.352c1.093-7,6.145-9.706,12.6-11.854,4.338-1.445,6.211-5.269,7.036-8.364a14.67,14.67,0,0,1-8.87-13.468V33a14.667,14.667,0,0,1,29.333,0v3.667A14.67,14.67,0,0,1,49.8,50.134c.832,3.1,2.717,6.926,7.036,8.364,6.461,2.152,11.517,4.774,12.6,11.854A36.518,36.518,0,0,1,44,80.667Z"
                    fill="#e1e4e8"
                  />
                </g>
              </g>
            </g>
          </svg>
          <NameNumber />
        </div>
        <EditIconLink />
      </div>
      <ul className={`lg:p-6 flex flex-col`}>
        {profileTab.map((item, index) => {
            if (
              (item.name === "دوره های من" && user?.informations.carts_count === 0) ||
              (item.name === "امور مالی" && user?.informations.transactions.total_transactions_count === 0)
            ) {
              return null;
            }
          return (
            index <= profileTab.length - 2 && (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`flex items-center gap-x-3 p-3 md:p-4 cursor-pointer hover:bg-gray-200/70 ${
                    path === item.link && "bg-gray-200/80"
                  }`}
                >
                   {/*@ts-ignore*/}
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          );
        })}
        <li
          onClick={() => setOpenLogout(true)}
          className={`flex items-center gap-x-3 p-3 md:p-4 mt-0 lg:mt-12 hover:bg-gray-100/60 cursor-pointer`}
        >
           {/*@ts-ignore*/}
          <span>{profileTab[profileTab.length - 1].icon}</span>
          <span>{profileTab[profileTab.length - 1].name}</span>
        </li>
      </ul>
    </div>
  );
};
export default DesktopProfileMenu;
