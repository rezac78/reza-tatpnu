import React from 'react';
import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from '@/components/pages/profile/ProfileSectionTitle';
import BackgroundImage from "@/components/pages/profile/common/BackgroundImage";

const Page = () => {
    return (
        <>
            <BreadCrumbs
                links={[
                { name: "پروفایل", link: "/profile" },
                { name: "لینک های ورود", link: "/profile" },
                { name: "رضایت مشتری", link: "/profile/Links/customer" },
                ]}
            />
            <ProfileSectionTitle title={"رضایت مشتری"} BackBtn/>
            <div className={'flex flex-col gap-y-6 px-6 lg:px-0 leading-[32px]'}>
                <BackgroundImage
                    imgSize={{width: 182, height: 197}}
                    img={'/images/pages/profile/temp/link_customer_temp.png'}
                    icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005V6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995Z"
                            stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.96019 5.86996C6.43019 5.50996 5.7302 5.50998 5.2002 5.88998" stroke="#484848"
                              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.9602 5.86996C10.4302 5.50996 9.7302 5.50998 9.2002 5.88998" stroke="#484848"
                              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M8.15981 11.42H5.83981C5.53981 11.42 5.2998 11.18 5.2998 10.88C5.2998 9.39 6.50981 8.18005 7.99981 8.18005C8.63981 8.18005 9.2298 8.40002 9.6898 8.77002"
                            stroke="#484848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        <path
                            d="M22 14.2V17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2Z"
                            stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.9602 13.62C14.4302 13.98 13.7302 13.98 13.2002 13.6" stroke="#484848"
                              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.9602 13.62C18.4302 13.98 17.7302 13.98 17.2002 13.6" stroke="#484848"
                              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M13.8398 16.1801H18.1598C18.4598 16.1801 18.6998 16.42 18.6998 16.72C18.6998 18.21 17.4898 19.42 15.9998 19.42C14.5098 19.42 13.2998 18.21 13.2998 16.72C13.2998 16.42 13.5398 16.1801 13.8398 16.1801Z"
                            stroke="#484848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>

                    }
                    title={'رضایت مشتری'}
                    desc={
                        <div className={''}>
                            موارد زیر بخش کوچکی از تجربه هر روز ما در همراهان است. صدای خوشحال و پر امید شما که روزانه
                            برای ما پیغام‌آور انجام درست مأموریتمان است. واژگانی که از لابلای خوشحالی قلبی آکنده از امید
                            بیرون می‌آید، انگیزه و اشتیاق مجموعه همراهان را برای ارائه خدمات بهتر بیشتر می‌کند.
                        </div>
                    }
                />
                <span className={'font-bold text-[18px]'}>صدای مشتریان</span>
                <ul className={'flex flex-col'}>
                    <li className={'hidden md:flex items-center h-[77px] border-b px-3 justify-between'}>
                        <span className={'w-[10%]'}>#</span>
                        <span className={'w-[30%]'}>موضوع</span>
                        <span className={'w-[50%] text-center'}>صدای مشتری</span>
                    </li>
                    {[1, 2, 3, 4].map((item, index) => (
                        <li key={index}
                            className={'inline-block md:flex  md:items-center py-5 space-y-3 md:space-y-0 md:gap-y-0 md:h-[77px] border-b px-3 justify-between ' + (item === 0 ? 'bg-[#083895]/15' : 'hover:bg-[#083895]/5')}>
                            {/*<div className={'md:w-[40%] flex items-center gap-x-3'}>*/}
                            <span className={'hidden md:block md:w-[10%] font-digit '}>{item}.</span>
                            <span className={'md:w-[30%] line-clamp-1 overflow-hidden '}><span
                                className={'md:hidden'}>{item}.</span> موضوع</span>
                            {/*</div>*/}
                            <audio controls className={'w-full md:w-[50%] h-[41px] md:h-[50px] '}>
                                <source
                                    src="https://hiblog.tv/1000310/file/?Ur=https://irsv.upmusics.com/Downloads/Musics/Hamid%20Hiraad%20-%20Mastam%20Kon%20(320).mp3&hst=irsv.upmusics.com&prt=https&cuid=1000310"
                                    type="audio/mpeg"/>
                                Your browser does not support the audio element.
                            </audio>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Page;