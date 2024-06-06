import React from 'react';
import BannerCarousel from "@/components/pages/home/BannerCarousel";
import ShortTermCourses from "@/components/pages/services/shortTermCourses";
import {NextPage} from "next";
import BaCourses from "@/components/pages/services/baCourses";
import UniversityCourses from "@/components/pages/services/universityCourses";
import {banner_images, banner_images_res} from "@/lib/utils";
import axios from "@/lib/axios";
import LanguageCourses from "@/components/pages/services/languageCourses";

interface Props {
    params: {
        slug: string;
    }
}

const getCategories = async () => {
    try {
        const res = await axios("categories");
        return res.data.data;
    } catch (e) {
    }
    return null;
};

const getDataCard = async () => {
    try {
        const res = await axios("content-pages");
        return res.data.data;
    } catch (e) {
    }
    return null;
};
export const metadata = {
    title: "خدمات | موسسه تات",
    description:
        "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور ",
    icons: {
        icon: "/favicon.ico",
    },
};

const Page: NextPage<Props> = async ({params: {slug}}) => {
    const tmpNavLink: ({ name: string, enName: string, id: number }[]) = [
        {name: `دوره-های-کوتاه-مدت`, enName: '', id: 1},
        {name: 'دوره-آموزشی-BA', enName: '', id: 2},
        {name: 'دوره-دانشگاهی', enName: '', id: 3},
        {name: 'زبان', enName: '', id: 4}
    ]
    const address: string = (decodeURIComponent(slug[0]))
    // console.log(address)
    // console.info('FoundedPageId', tmpNavLink.find(val => val.name === address))

    const pageId: (number | undefined) = tmpNavLink.find(val => val.name === address)?.id

    // .filter((val) => val.category.page === "home")

    const dataCard = await getDataCard();
    const categories = await getCategories();


    return (
        <>
            <div className={'w-full h-full hidden sm:block'}>
                <BannerCarousel images={banner_images}/>
            </div>
            <div className={'w-full h-full block sm:hidden'}>
                <BannerCarousel images={banner_images_res}/>
            </div>
            {pageId === 1 && <ShortTermCourses/>}
            {pageId === 2 && <BaCourses
                CTAData={dataCard.filter((val: any) => val.category.page === "baLearnCourses")}
                productAttr={categories.filter((val: any) => val.page === "baLearnCourses")}
            />}
            {pageId === 3 &&
                <UniversityCourses productAttr={categories.filter((val: any) => val.page === "universityCourses")}
                                   CTAData={dataCard.filter((val: any) => val.category.page === "universityCourses")}/>}
            {pageId === 4 && <LanguageCourses productAttr={categories.filter((val: any) => val.page === "language")}
                                              CTAData={dataCard.filter((val: any) => val.category.page === "language")}/>}
        </>
    );
};

export default Page;