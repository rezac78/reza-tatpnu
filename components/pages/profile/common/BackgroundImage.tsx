import React from 'react';
import Image from "next/image";

const BackgroundImage = ({imgSize = {}, imgTop, img, icon, title, desc}: any) => {
    const {width, height}: any = imgSize
    return (
        <div style={{marginTop: height ? height / 2 : ''}}
            // className={"px-3 py-6 bg-[url('/icons/profile/profile-banner-bg-repeat.png')]  bg-repeat bg-center bg-white sm:h-[314px] flex flex-col sm:flex-row items-center gap-6"}>
             className={"relative p-6   bg-repeat bg-center bg-contain bg-white flex flex-col md:flex-row items-center gap-6 shadow-[0_6px_9px_-3px_rgba(0,0,0,0.25)]"}>
            <Image style={{width: width ? width : 272}}
                   className={`md:absolute ${imgTop ? imgTop : '-top-24'} right-20 object-contain`} src={img}
                   width={width ? width : 272}
                   height={height ? height : 272}
                   alt={'ticket-help'}/>
            <div style={{minWidth: 320}} className={'hidden md:flex'}></div>
            <div className={'flex flex-col gap-y-3'}>
                <div className={'flex gap-x-3'}>
                    {icon}
                    <span>{title}</span>
                </div>
                <p className={' leading-[32px]'}>
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default BackgroundImage;