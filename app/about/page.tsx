import React from 'react';
import {NextPage} from "next";
import BannerCarousel from "@/components/pages/home/BannerCarousel";
import CTASection from "@/components/common/CTASection";
import ConsultForm from "@/components/common/ConsultForm";
import {banner_images, banner_images_res} from "@/lib/utils";
export const metadata = {
    title: " درباره ما | موسسه تات",
    description:
        "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور ",
    icons: {
        icon: "/favicon.ico",
    },
};
const About: NextPage = () => {
    return (
        <>
            <div className={'w-full h-full hidden sm:block'}>
                <BannerCarousel images={banner_images}/>
            </div>
            <div className={'w-full h-full block sm:hidden'}>
                <BannerCarousel images={banner_images_res}/>
            </div>
            <CTASection title={'درباره ما'} subTitle={''}
                        content={'دوره‌های این طرح در زمینه‌های مختلف کسب و کار از جمله سرمایه گذاری،مدیریت، بازاریابی، حقوقی، فناوری‌اطلاعات، مالی و منابع‌انسانی و علوم‌پزشکی در صدها رشته و زیر شاخه برنامه‌ریزی شده است. همچنین با هدف درآمدزایی و ایجاد و رونق کسب و کار شخصی در هریک از رشته‌ها، به عنوان شتاب‌دهنده کسب و کار فعالیت جدی و حمایت پایداری را آغاز نموده‌ایم. در تات بر این باوریم که همه اشخاص حقیقی و حقوقی در ایران می‌توانند آینده ای روشن را با موفقیت‌های شغلی و تخصصی به ارمغان آورند. بنابراین در طرح‌های متنوع، تضمین شغلی و آغاز یک شراکت تجاری موفق را به شما نوید خواهیم داد. در این طرح‌ها متقاضیان با پرداخت‌های حداقلی می‌توانند با آسودگی خیال در دوره‌ها شرکت کرده و مدارک مورد نیاز خود را کسب کنند.'}
                        linkTitle={''} dir={'ltr'} slug={''} titleColor={''} subTitleColor={''}
                        imgUrl={'/images/about/UserMainIcon.webp'}/>
            <ConsultForm
                pageName={'aboutUs'}
                title={'درخواست مشاوره'}
                subTitle={'با پر کردن این فرم می توانید به صورت رایگان از مشاوره تخصصی در حوزه ارتقای مدارک تحصیلی و مهارتی بهره مند شوید.'}
                linkTitle={'ثبت درخواست'}
                slug={''}
                message={''}/>
        </>
    );
};

export default About;