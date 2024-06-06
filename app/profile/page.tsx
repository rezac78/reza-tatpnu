import React from 'react';
import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from '@/components/pages/profile/ProfileSectionTitle';
import NewsBanner from '@/components/pages/profile/dashboard/NewsBanner';
import Link from "next/link";
import {
    InputLinkAboutUsIcon,
    InputLinkAskMeIcon,
    InputLinkCalenderIcon,
    InputLinkContactUsIcon,
    InputLinkAssistIcon,
    InputLinkCustomerIcon,
    InputLinkDocIcon,
    InputLinkFAQIcon,
    InputLinkIncomeIcon
} from "@/public/icon/profile/inputLinks";
import StatusTab from '@/components/pages/profile/dashboard/StatusTab';

const Page = () => {
    const InputLinks = () => {
        return (
            <div className={'grid grid-cols-3 sm:flex flex-wrap 2xl:justify-between gap-3'}>
                {InputLinksData.map(({name, icon, link, color, bgColor}:any, index:number) => (
                    <Link href={link} key={index}
                          className={'flex flex-col items-center justify-between aspect-square sm:w-[110px] gap-y-2 p-2 bg-white drop-shadow-[0px_0px_3px_rgba(0,0,0,0.1)] '}>

                        <div style={{backgroundColor: bgColor}}
                             className={'flex-grow aspect-square flex items-center justify-center rounded-full'}>
                            {icon}
                        </div>
                        <span style={{color: color}} className={'text-sm font-semibold whitespace-nowrap'}>{name}</span>
                    </Link>
                ))}
            </div>
        );
    };
    return (
        <>
            <BreadCrumbs
                links={[
                    {name: "پروفایل", link: "/profile"},
                    {name: "داشبورد", link: "/profile"},
                ]}
            />
            <ProfileSectionTitle title={"داشبورد"} />
            <NewsBanner />
            <StatusTab />
            <ProfileSectionTitle title={"لینک های ورود"} />
            <InputLinks />
        </>
    );
};

const InputLinksData = [
    {
        icon: <InputLinkAboutUsIcon/>,
        name: 'درباره ما',
        link: '/profile/Links/about',
        bgColor: '#EBF4F9',

    },
    {
        icon: <InputLinkContactUsIcon/>,
        name: 'ارتباط با ما',
        link: '/profile/Links/contact',
        bgColor: '#E7F9EB',

    },
    {
        icon: <InputLinkDocIcon/>,
        name: 'محصولات و خدمات',
        link: '/profile/Links/service',
        bgColor: '#FFF3E9',

    },
    {
        icon: <InputLinkCustomerIcon/>,
        name: 'رضایت مشتری',
        link: '/profile/Links/customer',
        bgColor: '#FDEAEE',

    },
    {
        icon: <InputLinkFAQIcon/>,
        name: 'سوالات متداول',
        link: '/profile/Links/faq',
        bgColor: '#EBF4F9',

    },
    {
        icon: <InputLinkIncomeIcon/>,
        name: 'کسب درآمد',
        link: '/profile/Links/income',
        bgColor: '#E7F9EB',
    },
    {
        icon: <InputLinkAssistIcon/>,
        name: 'دعوت به همکاری',
        link: '/profile/Links/assist',
        bgColor: '#FFF3E9',
    },
    {
        icon: <InputLinkAskMeIcon/>,
        name: 'از من بپرس',
        link: '/profile/Links/askMe',
        bgColor: '#FDEAEE',
    },
    {
        icon: <InputLinkCalenderIcon/>,
        name: 'رزرو وقت مشاوره',
        link: '/profile/Links/consult',
        bgColor: '#EBF4F9',
    },

]

export default Page;