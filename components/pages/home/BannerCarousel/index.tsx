"use client"
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

interface Props {
    images: string[]
}


const BannerCarousel: React.FC<Props> = ({images}) => {
    const [swiper, setSwiper] = useState<any>(null);


    return (
        <div className={'relative h-[428px]'}>
            <Swiper
                // modules={[Navigation]}
                // navigation
                loop={false}
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
                className="carousel h-full"
            >
                {images.map((p, i) =>
                    <SwiperSlide key={i}>
                        <Image className={'w-full h-full object-cover'} width={1458} height={428} src={p} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>

            <div
                onClick={() => swiper.slidePrev()}
                className={'hidden absolute -right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l h-full from-white/70 px-1 sm:px-6 z-10 sm:flex'}>
                <Button
                    className={'w-9 h-9 sm:w-12 sm:h-12 p-1 sm:!p-0 rounded-full bg-white my-auto'}
                    variant="ghost"
                    name={'HeroSliderRightBtn'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                        <path fill="currentColor"
                              d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"/>
                    </svg>
                </Button>
            </div>
            <div
                onClick={() => swiper.slideNext()}
                className={'hidden absolute -left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r h-full from-white/70 px-1 sm:px-6 z-10 sm:flex'}>
                <Button
                    className={'w-9 h-9 sm:w-12 sm:h-12 p-1 sm:!p-0 rounded-full bg-white my-auto'}
                    variant="ghost"
                    name={'HeroSliderRightBtn'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                        <path fill="currentColor"
                              d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/>
                    </svg>
                </Button>
            </div>
            {/*<Button*/}
            {/*    variant="ghost"*/}
            {/*    name={'HeroSliderLeftBtn'}*/}
            {/*    onClick={() => swiper.slideNext()}*/}
            {/*    className={'w-fit absolute -left-0 top-1/2 -translate-y-1/2 bg-white drop-shadow rounded-full p-3 z-10'}>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">*/}
            {/*        <path fill="currentColor"*/}
            {/*              d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/>*/}
            {/*    </svg>*/}
            {/*</Button>*/}

        </div>
    );
};


export default BannerCarousel;