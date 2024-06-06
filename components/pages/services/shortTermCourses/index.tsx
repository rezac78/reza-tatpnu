import React from 'react';
import CategorySlider from "@/components/pages/services/shortTermCourses/categorySlider";
import StickyCategorySlider from "@/components/pages/services/shortTermCourses/StickyCategorySlider";
import ShortTermCoursesForm from "@/components/pages/home/shortTermCoursesForm";
import axios from "@/lib/axios";
import {SelectedCategoryWrapper} from "@/context/SelectedCategoryContext";
import ShortTermProducts from "@/components/pages/services/shortTermCourses/shortTermProducts";

const getCategories = async () => {
    try {
        const res = await axios("categories");
        return res.data.data;
    } catch (e) {}
    return null;
};

const shortTermCourses = async () => {
    const categories = await getCategories();
    const filterCats = await categories?.filter((val:any) => (!val.page)).filter((val:any)=> (val.id !== 8) && val.id !== 9 && val.id !== 20)
    return (
        <SelectedCategoryWrapper>
        <div className={''}>
            <CategorySlider categories={filterCats}/>
            <div className={'relative bg-secondary mb-9 pt-9'}>
                <StickyCategorySlider categories={filterCats}/>
                <div className={'w-full flex flex-col md:flex-row gap-x-9  pr-6 pb-6'}>
                    <div className={'flex flex-col justify-center text-white md:w-1/5'}>
                        <div className={'flex items-center gap-x-1'}>
                            <div className={'w-6 h-1 rounded-full bg-primary'}></div>
                            <span className={'text-2xl font-bold'}>دوره های کوتاه مدت</span>
                        </div>
                        <span className={'text-xl'}>فرصت استثنایی برای افزایش  دانش و مهارت خود</span>
                    </div>
                    <ShortTermProducts/>
                </div>
            </div>
            <ShortTermCoursesForm/>

        </div>
        </SelectedCategoryWrapper>
    );
};

export default shortTermCourses;