"use client"

import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCard from "@/components/common/ProductCard";
import {Button} from "@/components/ui/button";

interface Props {
    products: typeof ProductCard[];
}

const ProductSlider: React.FC<Props> = ({products}) => {
    const [swiper, setSwiper] = useState<any>(null);

    return (
        (products && products.length !== 0) ?
            <div className='relative'>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    className="!p-3"
                    grabCursor={true}
                    onSwiper={(swiper) => {
                        setSwiper(swiper);
                    }}
                >
                    {products.map((product, i) => (
                        <SwiperSlide key={i} className={'!w-[270px]'}>
                            <ProductCard product={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {products.length > 3 &&
                    <>
                        <div
                            onClick={() => swiper.slidePrev()}
                            className={'hidden absolute -right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l h-full from-black/20 px-1 z-10 sm:flex'}>
                            <Button
                                className={'w-9 h-9 sm:w-12 sm:h-12 p-1 sm:!p-0 rounded-full bg-white my-auto drop-shadow-xl'}
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
                            className={'hidden absolute -left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r h-full from-black/20 px-1 z-10 sm:flex'}>
                            <Button
                                className={'w-9 h-9 sm:w-12 sm:h-12 p-1 sm:!p-0 rounded-full bg-white my-auto drop-shadow-xl'}
                                variant="ghost"
                                name={'HeroSliderRightBtn'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                                    <path fill="currentColor"
                                          d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/>
                                </svg>
                            </Button>
                        </div>
                    </>
                }

            </div>
            :
            null

    )
        ;
};

export default ProductSlider;