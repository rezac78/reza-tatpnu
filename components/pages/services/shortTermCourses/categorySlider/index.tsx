"use client"

import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {useSelectedCategoryContext} from "@/context/SelectedCategoryContext";
import Image from "next/image";

interface Props {
    categories: any[]
}

const CategorySlider: React.FC<Props> = ({categories}) => {

    const {selectedCat, setSelectedCat}: any = useSelectedCategoryContext()
    const [swiper, setSwiper] = useState<any>(null);
    useEffect(() => {
        if (swiper !== null) {
            const activeIndex = (categories.findIndex(val => val.id === selectedCat.id))
            const slideTo = (index:number) => swiper?.slideTo(index);
            slideTo(activeIndex)
        }
    }, [selectedCat]);
    useEffect(() => {
        if (categories && categories.length !== 0) setSelectedCat(categories[0])
    }, []);

    if (!categories) return null
    return (
        <div className="-mt-16 mb-3 ">
            <Swiper
                onSwiper={setSwiper}
                slidesPerView={'auto'}
                spaceBetween={30}
                className="!p-3"
            >
                {categories.map((item, index) => (
                    <SwiperSlide key={index}
                                 onClick={() => setSelectedCat(item)}
                                 className={"!w-32 md:!w-36"}>
                        <div
                            className={`cursor-pointer flex flex-col gap-y-4 justify-center shadow-[0_0_10px_rgba(0,0,0,0.25)] !items-center rounded-[3px] aspect-square  ${selectedCat.id === item.id ? 'bg-primary text-[#275264]' : 'bg-white hover:bg-[#D9D9D9]'}`}>
                            {/*<div className={' w-[44px] md:w-[78px] h-[44px] md:h-[78px]'}>*/}
                            {/*<TestCatIcon/>*/}
                            <div
                                className={`w-[54px] h-[54px] ${selectedCat.id === item.id ? 'bg-white' : 'bg-primary/10'} flex items-center justify-center rounded-full`}>
                                <Image className={''}
                                       width={24} height={24}
                                       src={item.icon} alt={item.title}/>
                            </div>
                            <span className={`line-clamp-1`}>{item.title}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategorySlider;