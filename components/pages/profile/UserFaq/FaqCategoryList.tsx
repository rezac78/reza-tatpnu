"use client"
import React from 'react';
import Image from 'next/image';
import {IMAGE_URL} from "@/config-global";


const FaqCategoryList = ({list, filterHandler}: any) => {
    const TABS = [
        {
            name: 'ثبت نام',
            icon: <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 11C12.7614 11 15 8.76142 15 6C15 3.23858 12.7614 1 10 1C7.23858 1 5 3.23858 5 6C5 8.76142 7.23858 11 10 11Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.40625 21C1.40625 17.13 5.25625 14 9.99625 14C10.9562 14 11.8863 14.13 12.7563 14.37"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M20 17C20 17.32 19.96 17.63 19.88 17.93C19.79 18.33 19.63 18.72 19.42 19.06C18.73 20.22 17.46 21 16 21C14.97 21 14.04 20.61 13.34 19.97C13.04 19.71 12.78 19.4 12.58 19.06C12.21 18.46 12 17.75 12 17C12 15.92 12.43 14.93 13.13 14.21C13.86 13.46 14.88 13 16 13C17.18 13 18.25 13.51 18.97 14.33C19.61 15.04 20 15.98 20 17Z"
                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round"/>
                <path d="M17.4878 16.9795H14.5078" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 15.5195V18.5095" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        },
        {
            name: 'مدارک',
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.6602 9.43952L19.6802 13.6195C18.8402 17.2295 17.1802 18.6895 14.0602 18.3895C13.5602 18.3495 13.0202 18.2595 12.4402 18.1195L10.7602 17.7195C6.59018 16.7295 5.30018 14.6695 6.28018 10.4895L7.26018 6.29952C7.46018 5.44952 7.70018 4.70952 8.00018 4.09952C9.17018 1.67952 11.1602 1.02952 14.5002 1.81952L16.1702 2.20952C20.3602 3.18952 21.6402 5.25952 20.6602 9.43952Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M14.0584 18.3896C13.4384 18.8096 12.6584 19.1596 11.7084 19.4696L10.1284 19.9896C6.15839 21.2696 4.06839 20.1996 2.77839 16.2296L1.49839 12.2796C0.218388 8.30961 1.27839 6.20961 5.24839 4.92961L6.82839 4.40961C7.23839 4.27961 7.62839 4.16961 7.99839 4.09961C7.69839 4.70961 7.45839 5.44961 7.25839 6.29961L6.27839 10.4896C5.29839 14.6696 6.58839 16.7296 10.7584 17.7196L12.4384 18.1196C13.0184 18.2596 13.5584 18.3496 14.0584 18.3896Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.6406 7.5293L16.4906 8.7593" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M10.6562 11.3994L13.5563 12.1394" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        },
        {
            name: 'دانشگاهی',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke="currentColor"
                      strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5V8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M17 8H7C5 8 4 9 4 11V22H20V11C20 9 19 8 17 8Z" stroke="currentColor" strokeWidth="1.5"
                      strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.57812 12H19.4181" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.99219 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                      strokeLinejoin="round"/>
                <path d="M11.9922 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                      strokeLinejoin="round"/>
                <path d="M15.9922 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                      strokeLinejoin="round"/>
            </svg>
        },
        {
            name: 'همه',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M11.5312 9.5H21.0013" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M3 14.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M12 19H21.47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>

        },
    ]

    return (
        <ul className={'grid grid-cols-2 sm:flex flex-wrap gap-2 sm:gap-3 '}>
            <li onClick={() => filterHandler("")}
                className={' sm:w-[180px] px-1 sm:px-2 py-3 flex items-center gap-x-1 sm:gap-x-3 bg-primary/10 hover:bg-primary/20 cursor-pointer '}>
                    <span
                        className={'bg-primary/10 p-2 rounded-full text-normal '}>{TABS[3].icon}</span>
                <div className={'flex flex-col'}>
                    <span className={''}>همه ی سوالات</span>
                    {/*<span className={'text-sm'}>{desc}</span>*/}
                </div>
            </li>
            {list?.map(({icon, title, desc}: any, index: number) => (
                <li onClick={() => filterHandler(title)} key={index}
                    className={' sm:w-[180px] px-1 sm:px-2 py-3 flex items-center gap-x-1 sm:gap-x-3 bg-primary/10 hover:bg-primary/20 cursor-pointer '}>
                    <span
                        className={'bg-primary/10 p-2 rounded-full text-normal text-primary'}>
                            <Image src={`${IMAGE_URL}${icon}`} alt={title} width={24} height={24}/>
                            </span>
                    <div className={'flex flex-col'}>
                        <span className={''}>{title}</span>
                        {/*<span className={'text-sm'}>{desc}</span>*/}
                    </div>
                </li>
            ))}

        </ul>

    );
};

export default FaqCategoryList;