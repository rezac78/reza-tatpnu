import React from "react";
import NavLinks from "@/components/mainLayout/Navbar/navLinks";
import {Input} from "@/components/ui/input";
import Logo from "@/components/common/Logo";
import Image from "next/image";

const Footer = () => {

    const Titles: React.FC<{ title: string }> = ({title}) => (
        <div className={'flex items-center gap-x-4 '}>
            <span className={'w-1.5 h-1.5 mb-2 rounded-full bg-primary'}></span>
            <span className="h-full block font-bold pb-2 text-lg text-primary">{title}</span>
        </div>
    )


    return (
        <footer
            className=" w-full flex flex-col bg-secondary text-white shadow-[0_-6px_10px_rgba(0,0,0,0.25)]">
            <div className={'container flex-grow flex flex-col gap-y-3 px-6 2xl:px-0'}>
                <div className={'h-16 w-full flex items-center justify-between'}>
                    <Logo type="white"/>
                    <div className={'hidden relative sm:flex flex-grow  items-center justify-center'}>
                        <NavLinks/>
                        <div className={'w-1/2 border-b absolute -bottom-4'}></div>
                    </div>
                </div>
                <div className={'w-full flex-grow grid sm:grid-cols-5 gap-9 items-start pb-3 sm:pb-6 pt-6'}>
                    <div className={'sm:row-start-1 sm:col-span-2'}>
                        <div className={'flex flex-col'}>
                            <Titles title={'خبرنامه'}/>
                            <span>با وارد کردن ایمیل خود عضو خبرنامه مـــا شوید</span>
                            <Input placeholder={'مثال: test@gmail.com'}
                                   className={'mt-3 bg-white/20 placeholder:text-white'}
                                   buttonName="عضویت"

                            />
                        </div>
                    </div>
                    <div className={'sm:row-start-1 sm:col-span-2'}>
                        <div className={' col-span-2'}>
                            <div className={'flex flex-col'}>
                                <Titles title={'با ما در ارتباط باشید'}/>
                                <span>جهت طرح هرگونه سوال و مشاوره در زمینه‌ حوزه‌های برگزاری کلاس ‌های مختلف تات، از روش‌های زیر با ما در ارتباط باشید.</span>
                                <div className={'flex items-center gap-x-3 justify-start mt-3'}>
                                    <svg width="32"
                                         height="32"
                                         viewBox="0 0 46 46"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect
                                            opacity="0.25"
                                            x="1.10156"
                                            y="0.75"
                                            width="43.885"
                                            height="43.8849"
                                            rx="18.75"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22.8222 19.697L22.855 20.2507L22.3085 20.1829C20.319 19.923 18.581 19.0417 17.1053 17.5614L16.3838 16.8269L16.198 17.3693C15.8045 18.5784 16.0559 19.8552 16.8757 20.714C17.313 21.1886 17.2146 21.2564 16.4604 20.9739C16.198 20.8835 15.9685 20.8157 15.9466 20.8496C15.8701 20.9287 16.1324 21.9569 16.3401 22.3637C16.6243 22.9287 17.2037 23.4824 17.8377 23.8101L18.3733 24.07L17.7393 24.0813C17.1272 24.0813 17.1053 24.0926 17.1709 24.3299C17.3895 25.0643 18.2531 25.844 19.215 26.183L19.8927 26.4203L19.3024 26.7819C18.428 27.3017 17.4004 27.5954 16.3729 27.618C15.881 27.6293 15.4766 27.6745 15.4766 27.7084C15.4766 27.8214 16.8102 28.4542 17.5863 28.7028C19.9146 29.4373 22.6801 29.1209 24.7571 27.8666C26.2327 26.974 27.7084 25.1999 28.3971 23.4824C28.7688 22.5671 29.1404 20.8948 29.1404 20.0925C29.1404 19.5727 29.1732 19.5049 29.7853 18.8835C30.1461 18.5219 30.4849 18.1264 30.5505 18.0134C30.6598 17.7987 30.6489 17.7987 30.0914 17.9908C29.1623 18.3298 29.0311 18.2846 29.4902 17.7761C29.8291 17.4145 30.2335 16.7591 30.2335 16.567C30.2335 16.5331 30.0696 16.5896 29.8837 16.6913C29.687 16.8043 29.2497 16.9738 28.9218 17.0755L28.3315 17.2676L27.7959 16.8947C27.5008 16.6913 27.0854 16.4653 26.8667 16.3976C26.3093 16.2394 25.4566 16.262 24.9538 16.4427C23.5874 16.9512 22.7239 18.262 22.8222 19.697Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 47 46"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            opacity="0.25"
                                            x="1.42969"
                                            y="0.75"
                                            width="43.8849"
                                            height="43.8849"
                                            rx="18.75"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.2997 30.2557H15.8086V19.7822H19.2997V30.2557Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.5438 17.4551H17.524C16.4821 17.4551 15.8086 16.6789 15.8086 15.7089C15.8086 14.7183 16.5026 13.9639 17.5642 13.9639C18.6258 13.9639 19.2796 14.7183 19.2997 15.7089C19.2997 16.6789 18.6258 17.4551 17.5438 17.4551Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M32.1022 30.2564H28.6716V24.7818C28.6716 23.4067 28.1752 22.4683 26.9333 22.4683C25.9855 22.4683 25.4209 23.1009 25.173 23.7119C25.0823 23.9308 25.06 24.2359 25.06 24.5418V30.2566H21.6289C21.6289 30.2566 21.6741 20.984 21.6289 20.0238H25.06V21.4732C25.5153 20.7764 26.3308 19.7832 28.1523 19.7832C30.4099 19.7832 32.1023 21.2461 32.1023 24.3891L32.1022 30.2564Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 46 46"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            opacity="0.25"
                                            x="0.75"
                                            y="0.75"
                                            width="43.885"
                                            height="43.8849"
                                            rx="18.75"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M20.4257 31.4197V22.6911H18.6211V19.6831H20.4257V17.8771C20.4257 15.4231 21.4447 13.9639 24.3398 13.9639H26.75V16.9723H25.2434C24.1165 16.9723 24.0419 17.3926 24.0419 18.1772L24.0378 19.6827H26.7671L26.4477 22.6908H24.0378V31.4197H20.4257Z"
                                            fill="currentColor"
                                        />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'sm:row-start-1 sm:col-span-1 flex items-center justify-center'}>
                        <Image
                            width={120}
                            height={75}
                            src="/images/footer/mahara-tavarom-logo.png"
                            alt=""/>
                    </div>

                    <div className={'sm:row-start-2 sm:col-span-2'}>
                        <div className={'flex flex-col'}>
                            <Titles title={'درباره تات'}/>
                            <span>تات به عنوان تنها مجری رسمی جذب و ثبت نام مقاطع دانشگاهی کارشناسی، کارشناسی ارشد و دکترا در دانشگاه پیام نور فعالیت می نماید. در تات بر این باوریم که همه اشخاص حقیقی و حقوقی در ایران از طریق آموزش و ارتقای دانش و مهارت می توانند آینده ای روشن را با موفقیت های شغلی و تخصصی به ارمغان آورند</span>
                        </div>
                    </div>
                    <div className={'sm:row-start-2 sm:col-span-2'}>
                        <div className={' col-span-2'}>
                            <div className={'flex flex-col'}>
                                <Titles title={'راه های ارتباطی'}/>
                                <span>آدرس: پاسداران، سه راه اقدسیه، تنگستان چهارم، پلاک 7، مرکز مطالعات زبان و فرهنگ ایران دانشگاه پیام‌نور</span>
                                <span className={'font-digit'}>شماره تماس: 91091314-021</span>
                                <span>آدرس ایمیل: info@tatpnu.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={'sm:row-start-2 sm:col-span-1 flex items-center justify-center '}>
                        <Image
                            width={88}
                            height={119}
                            className={'shadow bg-white py-4 rounded-md'}
                            src={"/images/footer/enamad.png"}
                            alt="maharaTavarom"

                        />
                    </div>
                </div>
            </div>
            <div
                className="border-t py-3 sm:py-6 w-full ">
                <div className={'container h-full  flex flex-col sm:flex-row items-center justify-center  gap-y-3'}>
                <span
                    className={'flex-grow text-center'}>کلیه حقوق مادی و معنوی مربوط به مالک این وب سایت می باشد</span>
                    <span className={'text-xs'}>آخرین بروزرسانی: {String(new Date().toLocaleDateString('fa-IR'))}</span>
                </div>
            </div>
        </footer>)

};

export default Footer;