"use client"

import React, {useEffect, useState} from 'react';
import CTANavigator from "@/components/common/CTASection/CTANavigator";
import CTASection from "@/components/common/CTASection";
import ProductSlider from "@/components/pages/services/shortTermCourses/productSlider";
import ConsultForm from "@/components/common/ConsultForm";
import {IMAGE_URL} from "@/config-global";
import axios from "@/lib/axios";


interface Props {
    CTAData: any[]
    productAttr: any
}


const UniversityCourses: React.FC<Props> = ({CTAData, productAttr}) => {
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
            const res = await axios.get("products-category/9");
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
            {productAttr && <CTANavigator productAttr={productAttr} activeSection={activeSection}/>}

            {CTAData.map((e: any, i:number) => (
                <div key={i} id={e.title} className="scroll-mt-[200px]">
                    <CTASection
                        title={e.title}
                        titleColor={e.titleColor}
                        subTitle={e.subTitle}
                        subTitleColor={e.subTitleColor}
                        content={e.description}
                        dir={i % 2 === 0 ? 'ltr' : 'rtl'}
                        linkTitle={e.slug}
                        slug={e.link}
                        imgUrl={IMAGE_URL + e.image}
                    />
                </div>
            ))}

            <div className={'my-12 scroll-mt-[200px]'} id="دوره-دانشگاهی">
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

export default UniversityCourses;