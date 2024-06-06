import React from 'react';
import Image from "next/image";
import RobotMainSection from "@/components/pages/robot/main";
import ConsultForm from "@/components/common/ConsultForm";

const RobotPageLayout = () => {
    const form = {
        id: 1,
        title: "درخواست مشاوره",
        subTitle:
            "با پر کردن این فرم می توانید به صورت رایگان از مشاوره تخصصی در حوزه ارتقای مدارک تحصیلی و مهارتی بهره مند شوید.",
        linkTitle: "ثبت در خواست",
        slug: "#",
        message: "بعد از فشردن دکمه ثبت درخواست منتظر تماس ما باشید"
    }
    return (
        <div className={"flex flex-col relative mt-16 sm:mt-0 "}>
            <RobotMainSection/>
            <div className="relative hidden md:block ">
                {/*<div className="hidden sm:flex relative z-30 h-[600px]">
                    <div className="hidden sm:flex z-0 absolute top-0 w-full h-full">
                        <Image
                            className={"w-full object-center"}
                            src={"/images/robot/Rectangle2.svg"}
                            alt="cover2"
                            width={1440}
                            height={415}
                        />
                    </div>
                    <div className="hidden sm:flex absolute top-12 w-full h-full">
                        <Image
                            className={"w-full object-center"}
                            src={"/images/robot/Rectangle1.svg"}
                            alt="cover1"
                            width={1440}
                            height={415}
                        />
                    </div>
                </div>*/}
                <div className="hidden sm:flex absolute top-10 md:top-0 lg:top-0 xl:-top-5 2xl:-top-14 right-12 z-0">
                    <Circle2/>
                </div>
                <div className="hidden sm:flex absolute top-16 md:top-10 lg:top-10 xl:top-5 2xl:-top-5 right-28 z-20">
                    <Circle1/>
                </div>
                <div className="hidden sm:flex absolute top-20 md:top-16 lg:top-10 xl:top-5 2xl:-top-5 right-0 z-10">
                    <DOTSVG/>
                </div>


            </div>
            <div className='mt-9'>
                <ConsultForm

                    pageName={'robot'}
                    title={form.title}
                    subTitle={form.subTitle}
                    linkTitle={form.linkTitle}
                    slug={form.slug}
                    message={form.message}/>
            </div>
        </div>
    );
};


const Circle2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="188" height="188" viewBox="0 0 188 188" fill="none">
        <circle cx="94" cy="94" r="94" fill="#D9D9D9"/>
    </svg>
)
const Circle1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="137" height="137" viewBox="0 0 137 137" fill="none">
        <circle cx="68.5" cy="68.5" r="68.5" fill="#D7B131"/>
    </svg>
)

const DOTSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="127" height="81" viewBox="0 0 127 81" fill="none">
        <g opacity="0.19">
            <circle cx="3.86417" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="36.9853" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="70.1064" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="103.231" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="14.9032" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="48.0243" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="81.1493" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="114.27" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="25.9423" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="59.0673" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="92.1884" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="125.309" cy="3.86417" r="3.86417" fill="#1C1C1C"/>
            <circle cx="3.86417" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="36.9853" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="70.1064" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="103.231" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="14.9032" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="48.0243" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="81.1493" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="114.27" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="25.9423" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="59.0673" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="92.1884" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="125.309" cy="18.5077" r="3.86417" fill="#1C1C1C"/>
            <circle cx="3.86417" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="36.9853" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="70.1064" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="103.231" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="14.9032" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="48.0243" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="81.1493" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="114.27" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="25.9423" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="59.0673" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="92.1884" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="125.309" cy="33.1513" r="3.86417" fill="#1C1C1C"/>
            <circle cx="3.86417" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="36.9853" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="70.1064" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="103.231" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="14.9032" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="48.0243" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="81.1493" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="114.27" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="25.9423" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="59.0673" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="92.1884" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="125.309" cy="47.7958" r="3.86417" fill="#1C1C1C"/>
            <circle cx="3.86417" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="36.9853" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="70.1064" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="103.231" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="14.9032" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="48.0243" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="81.1493" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="114.27" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="25.9423" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="59.0673" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="92.1884" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="125.309" cy="62.4394" r="3.86417" fill="#1C1C1C"/>
            <circle cx="3.86417" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="36.9853" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="70.1064" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="103.231" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="14.9032" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="48.0243" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="81.1493" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="114.27" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="25.9423" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="59.0673" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="92.1884" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
            <circle cx="125.309" cy="77.0829" r="3.86417" fill="#1C1C1C"/>
        </g>
    </svg>
)

export default RobotPageLayout;