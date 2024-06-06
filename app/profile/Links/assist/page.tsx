import React from "react";
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
                    {name: "دعوت به همکاری", link: "/profile/Links/assist"},
                ]}
            />
            <ProfileSectionTitle title={"دعوت به همکاری"} BackBtn/>
            <div className={"flex flex-col gap-y-6 px-6 lg:px-0 leading-[32px]"}>
                <BackgroundImage
                    imgSize={{width: 181, height: 182}}
                    imgTop={"-top-20"}
                    img={"/images/pages/profile/temp/link_corporate_temp.png"}
                    icon={
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.15957 10.87C9.05957 10.86 8.93957 10.86 8.82957 10.87C6.44957 10.79 4.55957 8.84 4.55957 6.44C4.55957 3.99 6.53957 2 8.99957 2C11.4496 2 13.4396 3.99 13.4396 6.44C13.4296 8.84 11.5396 10.79 9.15957 10.87Z"
                                stroke="#484848"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.4103 4C18.3503 4 19.9103 5.57 19.9103 7.5C19.9103 9.39 18.4103 10.93 16.5403 11C16.4603 10.99 16.3703 10.99 16.2803 11"
                                stroke="#484848"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.15973 14.56C1.73973 16.18 1.73973 18.82 4.15973 20.43C6.90973 22.27 11.4197 22.27 14.1697 20.43C16.5897 18.81 16.5897 16.17 14.1697 14.56C11.4297 12.73 6.91973 12.73 4.15973 14.56Z"
                                stroke="#484848"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
                                stroke="#484848"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    }
                    title={"دعوت به همکاری"}
                    desc={
                        <div className={"flex flex-col md:flex-row items-center gap-6"}>
                            {[
                                {
                                    name: "طرح مشارکت",
                                    icon: (
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            stroke="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.1103 11.65H7.4603C6.8303 11.65 6.32031 12.16 6.32031 12.79V17.91H10.1103V11.65V11.65Z"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.7616 7.09998H11.2415C10.6115 7.09998 10.1016 7.60999 10.1016 8.23999V17.9H13.8916V8.23999C13.8916 7.60999 13.3916 7.09998 12.7616 7.09998Z"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.5484 13.35H13.8984V17.9H17.6884V14.49C17.6784 13.86 17.1684 13.35 16.5484 13.35Z"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    ),
                                },
                                {
                                    name: "آموزش از راه دور",
                                    icon: (
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            stroke="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.5001 7.66C18.4401 7.65 18.3701 7.65 18.3101 7.66C16.9301 7.61 15.8301 6.48 15.8301 5.08C15.8301 3.65 16.9801 2.5 18.4101 2.5C19.8401 2.5 20.9901 3.66 20.9901 5.08C20.9801 6.48 19.8801 7.61 18.5001 7.66Z"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.4704 14.94C18.8404 15.17 20.3504 14.93 21.4104 14.22C22.8204 13.28 22.8204 11.74 21.4104 10.8C20.3404 10.09 18.8104 9.85 17.4404 10.09"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.47047 7.66C6.53047 7.65 6.60047 7.65 6.66047 7.66C8.04047 7.61 9.14047 6.48 9.14047 5.08C9.14047 3.65 7.99047 2.5 6.56047 2.5C5.13047 2.5 3.98047 3.66 3.98047 5.08C3.99047 6.48 5.09047 7.61 6.47047 7.66Z"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.50043 14.94C6.13043 15.17 4.62043 14.93 3.56043 14.22C2.15043 13.28 2.15043 11.74 3.56043 10.8C4.63043 10.09 6.16043 9.85 7.53043 10.09"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.5001 15.13C12.4401 15.12 12.3701 15.12 12.3101 15.13C10.9301 15.08 9.83008 13.95 9.83008 12.55C9.83008 11.12 10.9801 9.97 12.4101 9.97C13.8401 9.97 14.9901 11.13 14.9901 12.55C14.9801 13.95 13.8801 15.09 12.5001 15.13Z"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9.58973 18.28C8.17973 19.22 8.17973 20.76 9.58973 21.7C11.1897 22.77 13.8097 22.77 15.4097 21.7C16.8197 20.76 16.8197 19.22 15.4097 18.28C13.8197 17.22 11.1897 17.22 9.58973 18.28Z"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    ),
                                },
                            ].map((item, i) => (
                                <Button
                                    className={"w-[240px] font-bold"}
                                    // @ts-ignore
                                    icon={<>{item.icon}</>}
                                    key={i}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </div>
                    }
                />

                <div className={"flex flex-col md:flex-row items-start gap-6"}>
                    <span className={"md:w-[15%] text-left"}>طرح شتاب</span>
                    <div
                        className={
                            "md:w-[70%] flex flex-col gap-y-1 border-r-2 border-r-primary pr-6 leading-[32px]"
                        }
                    >
            <span>
              همراهان با هدف ایجاد فرصت‌های حمایت از ایده‌های شجاعانه افراد و
              شرکت‌ها خدمات مربوط به طرح شتاب را راه‌اندازی کرده است. طرح شتاب
              درواقع شناسایی و توانمندسازی ایده‌های برتر و هدف آن، شناسایی و
              کاربردی‌کردن آنها است. در این طرح به توسعه فرهنگ کارآفرینی و ایجاد
              فرصت‌های یادگیری کارآفرینی پرداخته می‌شود تا در جهت تحول و پیشرفت
              اقتصادی مشترک حرکت کنیم. مهم نیست دارای چه مدرک تحصیلی هستید، اما
              برای عقد قرارداد با دانشگاه باید رزومه شخصی یا شرکتی خود را تکمیل
              کنید. طرح شما براساس فرم تکمیلی ارسال و غربال‌گری‌های لازم براساس
              ایده‌ها و نیازهای سایت نان وزارت علوم و 14 هزار محصولی که در وزارت
              صنایع و معادن، نیازمند کمک و همراهی در فروش هستند و نیز براساس
              رشته‌های پرترافیک مهارتی، دسته‌بندی و اجرا می‌شود.
            </span>
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row items-start gap-6"}>
                    <span className={"md:w-[15%] text-left"}>فضای همکاری</span>
                    <div
                        className={
                            "md:w-[70%] flex flex-col gap-y-1 border-r-2 border-r-primary pr-6 leading-[32px]"
                        }
                    >
            <span>
              • هرگونه ارتباط با هر مرکز و سازمانی را ازطریق دانشگاه برای شما
              مهیا می‌کنیم. • یک تیم 400 نفره در بخش معرفی، تبلیغات،
              دیجتال‌مارکتینگ و فروش در طرح و ایده شما فعالیت می‌کنند. • در
              ایده‌هایی که نیاز به حضور شما دارد، امکانات فضای اشتراکی و تیم‌های
              اداری و اجرایی دراختیارتان قرارداده می‌شود. • تمامی بسترهای سایت و
              شبکه‌های اجتماعی و امکانات معرفی و اجرای طرح در فضای آنلاین و
              آفلاین در کوتاه‌ترین زمان ممکن انجام می‌شود. • ارائه توصیه‌نامه
              معتبر دانشگاهی و آورده‌های اعتباری این قرارداد را نمی‌توان معطوف
              به چند خط کرد.
            </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
