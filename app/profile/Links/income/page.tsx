import React from 'react';
import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from '@/components/pages/profile/ProfileSectionTitle';
import BackgroundImage from "@/components/pages/profile/common/BackgroundImage";
import {Button} from "@/components/ui/button";

const Page = () => {
    return (
        <>
            <BreadCrumbs
                links={[
                    {name: "پروفایل", link: "/profile"},
                    {name: "لینک های ورود", link: "/profile"},
                    {name: "کسب درآمد", link: "/profile/Links/income"},
                ]}
            />
            <ProfileSectionTitle title={"کسب درآمد"} BackBtn/>
            <div className={'flex flex-col gap-y-6 px-6 lg:px-0 leading-[32px]'}>
                <BackgroundImage
                    imgSize={{width: 181, height: 182}}
                    imgTop={'-top-20'}
                    img={'/images/pages/profile/temp/link_income_temp.png'}
                    icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                            stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V18" stroke="#484848" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                              stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    }
                    title={'کسب درآمد'}
                    desc={
                        <div className={'flex flex-col md:flex-row items-center gap-6'}>
                            {[{
                                name: 'طرح مشارکت',
                                icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                           stroke="currentColor"
                                           xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.0001 7.66C17.9401 7.65 17.8701 7.65 17.8101 7.66C16.4301 7.61 15.3301 6.48 15.3301 5.08C15.3301 3.65 16.4801 2.5 17.9101 2.5C19.3401 2.5 20.4901 3.66 20.4901 5.08C20.4801 6.48 19.3801 7.61 18.0001 7.66Z"
                                        strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M16.9704 14.94C18.3404 15.17 19.8504 14.93 20.9104 14.22C22.3204 13.28 22.3204 11.74 20.9104 10.8C19.8404 10.09 18.3104 9.85 16.9404 10.09"
                                        strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M5.97047 7.66C6.03047 7.65 6.10047 7.65 6.16047 7.66C7.54047 7.61 8.64047 6.48 8.64047 5.08C8.64047 3.65 7.49047 2.5 6.06047 2.5C4.63047 2.5 3.48047 3.66 3.48047 5.08C3.49047 6.48 4.59047 7.61 5.97047 7.66Z"
                                        strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M7.00043 14.94C5.63043 15.17 4.12043 14.93 3.06043 14.22C1.65043 13.28 1.65043 11.74 3.06043 10.8C4.13043 10.09 5.66043 9.85 7.03043 10.09"
                                        strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M12.0001 15.13C11.9401 15.12 11.8701 15.12 11.8101 15.13C10.4301 15.08 9.33008 13.95 9.33008 12.55C9.33008 11.12 10.4801 9.97 11.9101 9.97C13.3401 9.97 14.4901 11.13 14.4901 12.55C14.4801 13.95 13.3801 15.09 12.0001 15.13Z"
                                        strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M9.08973 18.28C7.67973 19.22 7.67973 20.76 9.08973 21.7C10.6897 22.77 13.3097 22.77 14.9097 21.7C16.3197 20.76 16.3197 19.22 14.9097 18.28C13.3197 17.22 10.6897 17.22 9.08973 18.28Z"
                                        strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            }, {
                                name: 'آموزش از راه دور', icon:
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                         stroke="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                                            strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M7.99961 3.5H8.99961C7.04961 9.34 7.04961 15.66 8.99961 21.5H7.99961"
                                              strokeWidth="1.5" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M15 3.5C16.95 9.34 16.95 15.66 15 21.5"
                                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 16.5V15.5C8.84 17.45 15.16 17.45 21 15.5V16.5"
                                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 9.50001C8.84 7.55001 15.16 7.55001 21 9.50001"
                                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                            }].map((item, i) => (
                                <Button
                                    variant="outline"

                                    key={i}>
                                    <span className={'ml-3'}> {item.icon}</span>
                                    <span> {item.name}</span>
                                </Button>
                            ))}
                        </div>
                    }
                />

                <div className={'flex flex-col md:flex-row items-start gap-6'}>
                    <span className={'md:w-[15%] text-left'}>طرح مشارکت</span>
                    <div className={'md:w-[70%] flex flex-col gap-y-1 border-r-2 border-r-primary pr-6 leading-[32px]'}>
                        <span>مؤسسه همراهان با هدف ارتقای کیفیت و تنوع دوره‌های آموزشی، طرحی به نام«طرح مشارکت» ارائه داده است. در این طرح، مرکز با سازمان‌ها و مؤسسات دیگر همکاری می‌کند تا دوره‌های آموزشی مشترک برگزار کند.</span>
                        <span>
مزایای این طرح برای همراهان شامل افزایش تنوع دوره‌ها، ارتقای کیفیت با استفاده از تخصص شرکا، افزایش درآمد و گسترش همکاری‌ها است. مزایای این طرح برای شریک شامل استفاده از امکانات پیام نور، ارتقای برند، دسترسی به مخاطبان جدید و ایجاد فرصت‌های شغلی می‌شود. در این طرح مرکز یا سازمانی که به‌عنوان شریک وارد همکاری با همراهان می‌شود می‌تواند در برگزاری دوره‌های تخصصی یا معرفی استاد ورود کند و نهایتاً مدرک دانشگاهی دو امضائه به دانش‌پذیر اعطا خواهد شد.
                        </span>

                    </div>
                </div>
                <div className={'flex flex-col md:flex-row items-start gap-6'}>
                    <span className={'md:w-[15%] text-left'}>آموزش از راه دور بین‌الملل</span>
                    <div className={'md:w-[70%] flex flex-col gap-y-1 border-r-2 border-r-primary pr-6 leading-[32px]'}>
                        <span>
                          همراهان در راستای گسترش دسترسی به آموزش عالی، طرحی باعنوان «آموزش از راه دور بین الملل» را برای دانشجویان ایرانی مقیم خارج و اتباع خارجی ارائه می‌دهد. این طرح که به‌صورت آنلاین در واحدهای بین‌الملل دانشگاه‌های داخل کشور برگزار می‌شود، مزایای متعددی ازجمله انعطاف‌پذیری، هزینه کم، کیفیت بالا و تنوع رشته را برای دانشجویان به ارمغان می‌آورد. مؤسسه همراهان با راه‌اندازی این طرح فرصتی را برای دانشجویان غیرمقیم فراهم می‌کند تا بدون اینکه لازم باشد به ایران بیایند، از خدمات ثبت نام در دانشگاه، آموزش و دریافت مدرک دانشگاهی بهره‌مند شوند.
                        </span>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Page;