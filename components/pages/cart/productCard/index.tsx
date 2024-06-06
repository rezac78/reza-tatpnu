"use client"

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import CurrencyComp from "@/components/common/CurrencyComp";
import {separateNumber} from "@/lib/utils";
import ConfirmModal from "@/components/pages/cart/productCard/ConfirmModal";
import {Button} from "@/components/ui/button";

interface ProductCardProps {
    item: any,
    className?: string
    handleDelete: any
    setPriceCal: any
}

const CartProductCard: React.FC<ProductCardProps> = ({item, className = "", setPriceCal, handleDelete}) => {
    const [product, setProduct] = useState<any>('')
    const [priceType, setPriceType] = useState(0)
    const [price, setPrice] = useState<number>()
    useEffect(() => {
        setProduct(item.product)
        const p = item.product
        const pType = p.prepayment ? 2 : (p.price && 1)
        const pc = (p.prepayment) ?
            ((p.price || p.price === 0) ? p.prepayment : p.price)
            :
            (p.price)

        setPriceType(Number(pType))
        setPrice(Number(pc))
    }, [item]);
    // const {product: p} = item


    useEffect(() => {
        if (price || price === 0) {
            setPriceCal((prev: any) => ([
                    ...prev.filter((val: any) => val.basketId !== item.id),
                    {
                        basketId: item.id,
                        productId: item.product.id,
                        price: price,
                        priceType: priceType
                    }
                ]
            ))
        }

    }, [item, price]);


    const handleDeleteCertificate = async (id: any) => {
        await handleDelete({id})
    }

    return (
        <div /*onClick={() => router.push(`/product/${product.id}`)}*/
            className={`p-5 w-full relative flex flex-col items-center bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.20)] hover:shadow-[0px_0px_4px_rgba(0,0,0,0.40)]`}>
            <div className={'w-full flex items-center gap-x-6'}>
                {product.image &&
                    <Image className={'ml-4 min-w-[100px]'} src={product.image} alt={'product-img'} width={100}
                           height={58}/>}
                <div className={'flex flex-col gap-y-1 lg:gap-y-2.5 w-full overflow-hidden lg:ml-4'}>
                    <div className={'flex gap-x-1 w-full'}>
                        <span className={'w-1 h-6 rounded-full bg-[#D7B131]'}></span>
                        <span
                            className={'font-bold lg:text-lg  line-clamp-2 '}>{product.title}</span>
                    </div>
                    <span
                        className={'text-[9px] lg:text-xs line-clamp-2 min-h-7 lg:min-h-[unset]'}>{product.description}</span>
                </div>
                <div className={'mb-auto hover:bg-gray-100 cursor-pointer'}>
                    <ConfirmModal
                        id={item.id}
                        icon={<DeleteProductIcon/>}
                        onClick={handleDelete}
                        header={'پاک کردن محصول'}
                        body={'آیا از پاک کردن محصول از سبد خرید خود مطمئن هستید؟'}
                    />
                </div>
            </div>

            <div className="w-full flex flex-col mt-5 " onClick={(e) => e.stopPropagation()}>
                <ul className={`w-full ${item?.certificate?.length !== 0 && "border-b border-[#DBD5D5]"} pb-3`}>
                    {product.price !== 0 &&
                        <li
                            className=" w-full flex items-center px-1 py-1 first:mt-0 mt-2 hover:bg-gray-100 cursor-pointer">
                            <div className="flex items-center h-5 ml-1">
                                <input id={"price-radio" + product.id}
                                       name={"price-radio" + product.id}
                                       type="radio"
                                       value={product.price}
                                       checked={price === product.price}
                                       onChange={(e) => {
                                           setPrice(product.price)
                                           setPriceType(1)
                                       }}
                                       className="w-5 h-5"
                                       style={{accentColor: '#264653'}}
                                />
                            </div>
                            <label className="flex-grow flex items-center justify-between"
                                   htmlFor={"price-radio" + product.id}>
                                <span className={'text-normal'}>قیمت کل</span>
                                <CurrencyComp price={product.price}/>

                                {/*<p className="text-[18px] ">*/}
                                {/*    {separateNumber(product.price)}*/}
                                {/*    <span className={'pr-1  '}>تومان</span>*/}
                                {/*</p>*/}
                            </label>
                        </li>
                    }
                    {product.prepayment !== 0 &&
                        <li
                            className=" w-full flex items-center px-1 py-1 first:mt-0 mt-2 hover:bg-gray-100 cursor-pointer">
                            <div className="flex items-center h-5 ml-1">
                                <input id={"pre_price-radio" + product.id}
                                       name={"pre_price-radio" + product.id}
                                       type="radio"
                                       value={product.prepayment}
                                       checked={price === product.prepayment}
                                       onChange={(e) => {
                                           setPrice(product.prepayment)
                                           setPriceType(2)
                                       }}
                                       className="w-5 h-5"
                                       style={{accentColor: '#264653'}}
                                />
                            </div>
                            <label className="flex-grow flex items-center justify-between"
                                   htmlFor={"pre_price-radio" + product.id}>
                                <span className={'text-normal'}>پیش پرداخت</span>
                                <CurrencyComp price={product.prepayment}/>

                                {/*<p className="text-[18px] ">*/}
                                {/*    {separateNumber(product.prepayment)}*/}
                                {/*    <span className={'pr-1  '}>تومان</span>*/}
                                {/*</p>*/}
                            </label>
                        </li>
                    }
                </ul>
                {item?.certificate?.length !== 0 &&
                    <div className={'flex flex-col gap-y-3 mt-5'}>
                        <div className={'flex items-center gap-x-1'}>
                            {/*<CertificateIcon/>*/}
                            <span className={'text-normal font-bold'}>گواهینامه‌های انتخاب شده</span>
                        </div>
                        {item?.certificate?.map((item: any, i: number) => (
                            <div key={i} onClick={() => handleDeleteCertificate(item.id)}
                                 className={'flex items-center justify-between gap-x-10 bg-gray-500/20 px-4  '}>
                                <span className={'text-sm'}>{item.product.certificate_name}</span>
                                {item.product.certificate_price !== 0 ?
                                    <CurrencyComp price={item.product.certificate_price}/>
                                    :
                                    <span className={'text-gray-500 mr-auto font-bold'}>رایگان</span>}
                                <Button
                                    className={'w-fit hover:text-error'}
                                    variant="ghost">
                                    <DeleteCertificateIcon/>
                                </Button>
                            </div>
                        ))}
                        <div></div>
                    </div>
                }
            </div>


        </div>
    );
};

const DeleteProductIcon = ()=> (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047"
            stroke="#FF3C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
            stroke="#FF3C00"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M18.8484 9.13965L18.1984 19.2096C18.0884 20.7796 17.9984 21.9996 15.2084 21.9996H8.78844C5.99844 21.9996 5.90844 20.7796 5.79844 19.2096L5.14844 9.13965"
            stroke="#FF3C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.3281 16.5H13.6581" stroke="#FF3C00" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M9.5 12.5H14.5" stroke="#FF3C00" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>
)

const DeleteCertificateIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
         viewBox="0 0 512 512" height="20" width="20"
         xmlns="http://www.w3.org/2000/svg">
        <path fill="none" strokeMiterlimit="10"
              strokeWidth="32"
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"></path>
        <path
            fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
            d="M320 320 192 192m0 128 128-128"></path>
    </svg>
)

export default CartProductCard;