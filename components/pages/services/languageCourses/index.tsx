"use client"
import React, {useEffect, useState} from 'react';
import axios from "@/lib/axios";
import CTASection from "@/components/common/CTASection";
import {IMAGE_URL} from "@/config-global";
import Link from "next/link";
import Image from "next/image";
import ProductSlider from "@/components/pages/services/shortTermCourses/productSlider";
import ConsultForm from "@/components/common/ConsultForm";


interface Props {
    productAttr: any
    CTAData: any
}

const LanguageCourses: React.FC<Props> = ({productAttr, CTAData}) => {
    const form = {
        id: 1,
        title: "درخواست مشاوره",
        subTitle:
            "با پر کردن این فرم می توانید به صورت رایگان از مشاوره تخصصی در حوزه ارتقای مدارک تحصیلی و مهارتی بهره مند شوید.",
        linkTitle: "ثبت در خواست",
        slug: "#",
        message: "بعد از فشردن دکمه ثبت درخواست منتظر تماس ما باشید"
    }
    const [activeSection, setActiveSection] = useState(0);
    useEffect(() => {
        const sections = document.querySelectorAll("div[id]");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const [products, setProducts] = useState()
    const getProductByCats_Ba = async () => {
        try {
            const res = await axios.get("products-category/8");
            setProducts(res.data.data)
        } catch (e) {
        }
        return null;
    };
    useEffect(() => {
        getProductByCats_Ba()
    }, []);


    return (
        <>
            {productAttr && <LanCTANavigator productAttr={productAttr} links={CTAData} activeSection={activeSection}/>}
            {CTAData.map((e: any, i: number) => (
                <div key={i} id={`${i - 1}`} className="scroll-mt-[200px]">
                    <CTASection
                        title={e.title}
                        titleColor={e.titleColor}
                        subTitle={e.subTitle}
                        subTitleColor={e.subTitleColor}
                        content={e.description}
                        dir={i % 2 !== 0 ? 'ltr' : 'rtl'}
                        imgWidth={250}
                        imgHeight={250}
                        linkTitle={e.slug}
                        slug={e.link}
                        imgUrl={e.image ? IMAGE_URL + e.image : undefined}
                    />
                </div>
            ))}
            <div className={'my-12 scroll-mt-[200px]'} id={`${CTAData.length}`}>
                {products && <ProductSlider products={products}/>}
            </div>
            <div id="درخواست-مشاوره-دانشگاهی" className={'scroll-mt-[200px]'}>
                <ConsultForm
                    type="university"
                    pageName="universityCourses"
                    key={form.id}
                    title={form.title}
                    subTitle={form.subTitle}
                    linkTitle={form.linkTitle}
                    slug={form.slug}
                    message={form.message}
                />
            </div>
        </>
    );
};

interface LanCTANavigatorProps {
    productAttr: any[],
    activeSection: number,
    links: any
}

const LanCTANavigator: React.FC<LanCTANavigatorProps> = ({productAttr, activeSection, links}) => {
    const [activeTabInd, setActiveTabInd] = useState(0);
    useEffect(() => {
        const index = productAttr.findIndex((item: any) => item.slug === activeSection);
        if (index !== -1) {
            setActiveTabInd(index);
        }
    }, [activeSection, productAttr]);
    const changeActive = (index: any) => {
        setActiveTabInd(index);
    };

    return (
        <div
            className="sticky top-[80px] lg:top-[105px] w-full h-20 lg:h-24 mb-10 shadow-[0_2px_5px_2px_rgba(0,0,0,0.3)] z-30">
            <ul
                className={`w-full h-full bg-secondary flex items-center justify-between sm:justify-center  text-white transition-all text-[10px]  overflow-x-auto overflow-y-hidden px-0 lg:px-6`}>
                {productAttr
                    .sort((a: any, b: any) => a.priority - b.priority)
                    .map((item: any, index: number) => (
                        <Link href={`#${index}`} key={index}>
                            <li
                                key={index}
                                onClick={() => changeActive(index)}
                                className={`${
                                    activeTabInd === index ? "bg-primary" : ""
                                } flex-none h-full text-center flex flex-col items-center justify-center gap-y-2 whitespace-nowrap py-5 px-1 sm:px-10 lg:py-4 transition-all cursor-pointer`}
                            >
                                <div className="">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <span className="text-sm sm:text-normal">
                                        {item.title}
                                    </span>
                            </li>
                        </Link>
                    ))}
                <Link href={`#6`}>
                    <li
                        onClick={() => changeActive(6)}
                        className={`${
                            activeTabInd === 6 ? "bg-primary" : ""
                        } flex-none h-full text-center flex flex-col items-center justify-center gap-y-2 whitespace-nowrap py-5 px-1 sm:px-10 lg:py-4 transition-all cursor-pointer`}
                    >
                        <div className="">
                            <svg aria-hidden="true" className="e-font-icon-svg e-far-list-alt" viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                                <path fill="white"
                                      d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path>
                            </svg>
                        </div>
                        <span className="text-sm sm:text-normal">
                                       دوره ها
                                    </span>
                    </li>
                </Link>
            </ul>
        </div>
    );
};


export default LanguageCourses;