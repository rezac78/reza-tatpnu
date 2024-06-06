'use client'

import React, {useState} from 'react';
import Image from "next/image";
import CurrencyComp from "@/components/common/CurrencyComp";
import ButtonLoading from "@/components/ui/buttonLoading";
import {UsdCoinIcon} from '@/public/icon/common';
import {SocialIconsList} from "@/lib/utils";

interface Props {
    product: any
    productAttr: []
    handleAddToCart: any
    hasLicense: any
}

const ProductLeft: React.FC<Props> = ({product, productAttr = [], handleAddToCart, hasLicense}) => {
    const courseSpecifications: any = productAttr.find((item: any) => item.key === "مشخصات دوره");
    const [loading, setLoading] = useState(false)


    const handleClickAddToCart = async () => {
        const id = product.id
        setLoading(true)
        await handleAddToCart({id})
        setLoading(false)

    }

    // inside reusable components
    // inside reusable components
    // inside reusable components


    const PriceTitle = ({fontS, color, SizeIcon, name, price, margin}: any) =>
        <div
            className={`text-[${color ? color : '#484848'}] flex items-center justify-between px-7  sm:text-[18px]`}>
            <div className={`flex ${margin} items-center`}>
                <UsdCoinIcon/>
                <span className={'text-normal p-2'}>{name}</span>
            </div>
            <CurrencyComp price={price}/>
            {/*<span className={` font-semibold `}>{price !== null ? separateNumber(price) : '---'} تومان</span>*/}
        </div>

    return (
        <div
            className={'fixed bottom-0 lg:sticky lg:left-0 lg:top-20 w-screen sm:w-full lg:col-span-1 lg:max-w-[441px]'}>
            <div
                className="shadow-[0_5px_10px_0px_rgba(0,0,0,0.3)] flex flex-col w-full bg-white lg:gap-y-4">
                <Image
                    src={product?.image}
                    alt={product?.title}
                    className={'hidden lg:block w-full object-contain max-w-full'}
                    width={510}
                    height={300}
                />
                <h1 className="hidden lg:flex gap-3 items-start text-2xl font-bold px-7 mt-7">
                    <div className={'bg-primary min-h-6 rounded-full h-full min-w-1.5'}></div>
                    <span>{product?.title}</span>
                </h1>
                <p className="hidden lg:block text-sm px-7 line-clamp-3">
                    {product?.description}
                </p>
                <div className="hidden lg:block">
                    {productAttr.some((item: any) => item.key === "مشخصات دوره") &&
                        <div
                            className={`block w-full px-3 lg:px-0`}>
                            <div className={'flex items-end gap-x-2 py-1 px-6'}>
                                <span className={'text-[21px] '}>محتوای دوره :</span>
                            </div>
                            <div className={'w-full overflow-hidden px-7 mt-4'} style={{lineHeight: "2"}}
                                 dangerouslySetInnerHTML={{__html: courseSpecifications.value}}/>
                        </div>
                    }
                </div>
                {product.prepayment ?
                    <div>
                        {product.price !== 0 &&
                            <PriceTitle fontS={12} color={'#8C8C8C'} margin={'mr-0'} SizeIcon={18} name={'قیمت کل:'}
                                        price={product.price}/>
                        }
                        {product.prepayment !== 0 && <PriceTitle name={'پیش پرداخت:'} SizeIcon={24} margin={'-mr-1'}
                                                                 price={product.prepayment}/>}
                    </div>
                    :
                    <div>
                        {product.price !== 0 && <PriceTitle fontS={12} margin={'mr-0'} SizeIcon={22} name={'قیمت کل:'}
                                                            price={product.price}/>
                        }
                    </div>
                }

                <ButtonLoading loading={loading}
                               onClick={handleClickAddToCart}
                               className={'rounded-[0]'}
                >
                    {hasLicense ? 'ثبت‌نام و مشاهده گواهینامه' : 'ثبت‌نام دوره'}
                </ButtonLoading>
                {/*<AddToBasketButton classes={`w-full md:w-[87%] h-[56px] mx-auto sm:mb-5`}*/}
                {/*                   title={hasLicense ? 'ثبت‌نام و مشاهده گواهینامه' : 'ثبت‌نام دوره'}*/}
                {/*                   handleClickAddToCart={handleClickAddToCart} loading={loading}*/}
                {/*/>*/}

            </div>
            <div className={'hidden lg:flex items-center justify-center gap-x-3 w-full pt-7'}>
                {SocialIconsList.map((item, index) => {
                    return (
                        <div key={index}
                             className="bg-[#D9D9D9] text-black w-12 h-12 rounded-full flex justify-center items-center">
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductLeft;