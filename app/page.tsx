import BannerCarousel from "../components/pages/home/BannerCarousel";
import PageCard from "@/components/pages/home/pageCard";
import {NextPage} from "next";
import CTASection from "@/components/common/CTASection";
import React from "react";
import ConsultForm from "@/components/common/ConsultForm";
import {banner_images, banner_images_res} from "@/lib/utils";
import axios from "@/lib/axios";
import {IMAGE_URL} from "@/config-global";
import Image from "next/image";


const getDataCard = async () => {
    try {
        const res = await axios.get("content-pages");
        return res.data.data;
    } catch (e) {
    }
    return null;
};
export const metadata = {
    title: "موسسه تات",
    description:
        "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور ",
    icons: {
        icon: "/favicon.ico",
    },
};

const Home: NextPage = async () => {
    const data = await getDataCard();
    const form = {
        id: 1,
        title: "درخواست مشاوره",
        subTitle:
            "با پر کردن این فرم می توانید به صورت رایگان از مشاوره تخصصی در حوزه ارتقای مدارک تحصیلی و مهارتی بهره مند شوید.",
        linkTitle: "ثبت در خواست",
        slug: "#",
        message: "بعد از فشردن دکمه ثبت درخواست منتظر تماس ما باشید"
    }
    const tempIcons = [
        'e-icon-temp-1.svg',
        'e-icon-temp-2.svg',
        'e-icon-temp-3.svg',
        'e-icon-temp-4.svg'
    ]
    const ExtraIcons = () => (
        <div className={'flex flex-wrap items-center gap-2 my-3 px-20 lg:-mt-10'}>
            {tempIcons.map((item, i) => (
                <div key={i} className={'flex items-center gap-x-2'}>
                    <Image className={'w-[70px] h-[70px]'} src={'/images/pages/home/' + item} alt="NotFound"
                           width={70} height={70}/>
                    <span className={'font-semibold'}>توسعه فردی</span>
                </div>
            ))}
        </div>
    )

    return (
        <div className={''}>
            <div className={'w-full h-full hidden sm:block'}>
                <BannerCarousel images={banner_images}/>
            </div>
            <div className={'w-full h-full block sm:hidden'}>
                <BannerCarousel images={banner_images_res}/>
            </div>

            <PageCard/>
            <div className={'homeTextEditorStyle'}>
                {data ? data
                    .filter((val: any) => val.category.page === "home")
                    .map((e: any, i: number) => (
                        <div key={i}>
                            <CTASection
                                title={e.title}
                                titleColor={'text-primary'}
                                subTitle={e.subTitle}
                                subTitleColor={'text-red-400'}
                                content={e.description}
                                dir={i % 2 === 0 ? 'ltr' : 'rtl'}
                                linkTitle={e.button}
                                slug={e.button_slug}
                                imgUrl={IMAGE_URL + e.image}
                                className={i === 0 ? '!pb-0' : ''}
                            />
                            {i === 0 && <ExtraIcons/>}
                        </div>
                    )) : null
                }
            </div>
            <ConsultForm
                pageName={"home"}
                title={form.title}
                subTitle={form.subTitle}
                linkTitle={form.linkTitle}
                slug={form.slug}
                message={form.message}
            />
        </div>
    );
}
export default Home;
