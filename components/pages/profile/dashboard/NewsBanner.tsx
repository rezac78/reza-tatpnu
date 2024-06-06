import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const NewsBanner = () => {
    const TickTitle = ({title}: any) => (
        <div className={'flex items-center gap-x-3 '}>
            <svg className={'hidden md:block text-primary'} width="19" height="19" viewBox="0 0 19 19" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor"/>
                <path d="M5 11L8.15103 13.8003L13.75 5.75" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
            <span className={'font-digit'}>{title}</span>
        </div>
    )
    return (
        <div
            className={"shadow-[0_1px_4px_#0a164629] flex flex-col sm:flex-row gap-6 p-6 bg-repeat bg-white mt-14"}>
            <Image className={' w-[198px] h-[202px] -mt-16 sm:mt-0 md:-mt-16 mx-auto md:mr-6'}
                   src={'/images/pages/profile/temp/dashboard-image.png'}
                   width={198} height={202} alt={'ticket-help'}/>
            <div className={'relative flex flex-col gap-y-6 flex-grow'}>
                <div className={'flex gap-x-3 items-center'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 9.5H17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 14.5H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={'text-[18px] font-bold'}>اخبار و اطلاعیه ها</span>
                </div>
                <TickTitle
                    title={'فراخوان پذیرش بدون آزمون استعدادهای درخشان کارشناسی ارشد دانشگاه پیام نور در سال تحصیلی (1404- 1403)'}/>
                <TickTitle title={'آغاز ثبت نام چهل و هفتمین دوره آزمون زبان دکتری تخصصی دانشگاه پیام نور  PNUET'}/>

                {/*<Link href={'/profile/news'}*/}
                {/*    className={'flex items-center justify-center rounded-[4px] text-white h-[55px] w-[169px] bg-primary mx-auto md:ml-[unset] md:mr-auto large:mr-[unset] large:absolute left-0 bottom-0'}>مطالعه*/}
                {/*    خبر*/}
                {/*</Link>*/}
                <Link href={'/profile/news'}
                      className={'h-[55px] w-[169px] font-bold mx-auto md:ml-[unset] md:mr-auto large:mr-[unset] large:absolute left-0 bottom-0'}>
                    <Button>
                        مطالعه خبر
                    </Button>
                </Link>

            </div>
        </div>
    );
};

/*<div className={"w-full"}>
    <Image
        priority
        width={1175}
        className={'w-auto'}
        height={230}
        src={"/images/temp/banner-news-temp.png"}
        alt={"banner-news"}
    />
</div>*/

export default NewsBanner;