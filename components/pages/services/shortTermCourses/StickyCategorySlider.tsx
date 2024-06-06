"use client"

import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {useSelectedCategoryContext} from "@/context/SelectedCategoryContext";
import Image from "next/image";

interface Props {
    categories: any[]
}

const StickyCategorySlider: React.FC<Props> = ({categories}) => {

    const eleRef = useRef(null);

    const [isInView, setIsInView] = useState(false);
    const checkInView = () => {
        const ele = eleRef.current;
        if (!ele) {
            return;
        }
        // @ts-ignore
        const rect = ele.getBoundingClientRect();
        if (rect.top <= 200) {
            setIsInView(true);
        } else {
            setIsInView(false);

        }
    };
    useEffect(() => {
        checkInView();
    }, []);


    useEffect(() => {
        document.addEventListener("scroll", checkInView);
        window.addEventListener("resize", checkInView);
        return () => {
            document.removeEventListener("scroll", checkInView);
            window.removeEventListener("resize", checkInView);
        };
    }, []);

    const {selectedCat, setSelectedCat}:any = useSelectedCategoryContext()
    const [swiper, setSwiper] = useState<any>(null);
    useEffect(() => {
        if (swiper !== null) {
            const activeIndex = (categories.findIndex(val => val.id === selectedCat.id))
            const slideTo = (index:number) => swiper.slideTo(index);
            slideTo(activeIndex)
        }
    }, [selectedCat]);
    useEffect(() => {
        if (categories) setSelectedCat(categories[0])
    }, []);




    return (
        <div
            ref={eleRef}
            className={`${isInView ? 'visible' : 'invisible absolute'} sticky top-[110px] right-0 bg-white/20 backdrop-blur z-10`}>
            <Swiper
                slidesPerView={'auto'}
                onSwiper={setSwiper}
                spaceBetween={30}
                className="!p-3"
            >
                {categories.map((item, index) => (
                    <SwiperSlide className={"!w-[180px]"}
                                 onClick={() => setSelectedCat(item)}
                                 key={index}>
                        <div
                            className={`!w-[180px] rounded-[3px] cursor-pointer  flex items-center justify-center gap-x-1 py-3 shadow-[0_0_10px_rgba(0,0,0,0.25)] ${selectedCat.id === item.id ? 'bg-primary text-[#275264]' : 'bg-white hover:bg-[#D9D9D9]'}`}>
                            <div
                                className={`${selectedCat.id === item.id ? 'bg-white' : 'bg-primary/10'} flex items-center justify-center p-2 w-9 h-9 min-w-9 min-h-9 rounded-full `}>
                                <Image className={'w-[20px] md:w-[36px] h-[20px] md:h-[36px]'}
                                       width={36} height={36}
                                       src={item.icon} alt={item.title}/>
                            </div>
                        <span className={` line-clamp-1`}>{item.title}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default StickyCategorySlider;