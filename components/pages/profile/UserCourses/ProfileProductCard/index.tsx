"use client"

import React, {useState} from 'react';
import CurrencyComp from "@/components/common/CurrencyComp";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useLoginModalContext} from "@/context/loginModal";
import {useRouter} from "next/navigation";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import {useAuthContext} from "@/context/auth/hooks";
import ButtonLoading from "@/components/ui/buttonLoading";
import Link from "next/link";

interface ProductCardProps {
    product: any,
    className?: string
}

const ProfileProductCard: React.FC<ProductCardProps> = ({product, className = ""}) => {
    const {
        id,
        category_title,
        customer_id,
        title,
        image,
        banner,
        slug,
        type,
        off_price,
        price,
        prepayment,
        is_active,
        priority,
        description
    } = product.product


    const [loading, setLoading] = useState(false)
    const {setLoginModal}: any = useLoginModalContext();
    const router = useRouter()
    const {user, cartCount}: any = useAuthContext()
    const AddTooCartApi = async (formData: any) => {
        try {
            const res: any = await axios.post('add-to-cart', formData)
            const status = res?.data?.status || res?.response?.data.status
            if (status) {
                toast.success("دوره با موفقیت به سبد خرید اضافه شد")
                cartCount()
                // update()
            } else {
                toast.error(res?.response?.data?.message)
            }
        } catch (e) {
            // console.log(e)
        }
    }
    const handleAddToBasket = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        if (user) {

            await axios.get('certificates-product/' + id)
                .then((res: any) => {
                    if ((res?.status === 404) || res?.response?.status === 404) {
                        // product have a license and can't be added to cart
                        const formData = new FormData()
                        formData.append('productable_type', 'product')
                        formData.append('productable_id', id)
                        AddTooCartApi(formData)
                    } else if (res?.data?.status) {
                        router.push('/product/' + slug)
                    }

                })
                .catch((err) => {
                    // console.log(err)

                })


            setLoading(false)

        } else {
            // toast('ابتدا وارد حساب کاربری خود شوید', {
            //     style: {
            //         padding: '16px',
            //         color: '#e7cc26',
            //     },
            //     icon: <AccountIcon/>,
            //     iconTheme: {
            //         primary: '#e7cc26',
            //         secondary: '#FFFAEE',
            //     },
            // })
            setLoginModal(true)
        }
        setLoading(false)
    }
    return (
        <div
            className={className + " max-w-[270px] max-h-[356px] h-full grid grid-rows-10 border bg-white shadow-sm rounded-md overflow-hidden"}>
            <a href="" className="row-span-4">
                <Image className="min-h-[142px] w-full h-full rounded-t-sm  object-cover object-right-top border-b"
                       width={270}
                       height={156}
                       src={image}
                       alt="Image Description"/>
            </a>
            <div className="row-span-4 p-3 h-full">
                <div className="flex items-start gap-x-1">
                    <div className={'w-1 h-7 rounded bg-primary text-transparent'}>1</div>
                    <span className="text-normal font-bold line-clamp-2">{title}</span>
                </div>
                <p className="mt-2 line-clamp-3 text-sm">
                    {description}
                </p>
            </div>
            <div className="row-span-3 flex flex-col">
                <div className="flex items-center px-3 ">

                    <USDCoinIcon/>
                    <p className="mt-1 mr-1">
                        {/*{prepayment ? 'قیمت :' : 'پیش پرداخت'}*/}
                        {product.type_price}
                    </p>
                    <CurrencyComp className="mr-auto" price={product.price}/>
                    {/*{prepayment ? <CurrencyComp className="mr-auto" price={prepayment}/> :*/}
                    {/*    <CurrencyComp className="mr-auto" price={price}/>}*/}
                </div>
                <div className="mt-auto flex items-center gap-x-3 w-full  py-1 px-3 ">
                    {/*<ButtonLoading*/}
                    {/*    onClick={handleAddToBasket}*/}
                    {/*    loading={loading}*/}
                    {/*    className={'h-9'}*/}
                    {/*>ثبت نام</ButtonLoading>*/}
                    {/*<Link href={'/product/' + slug}>*/}
                    {/*    <Button*/}
                    {/*        variant="outline"*/}
                    {/*        className={'h-9'}>*/}
                    {/*        مشاهده*/}
                    {/*    </Button>*/}
                    {/*</Link>*/}
                    <Button className={'h-9'}>
                        مشاهده دوره
                    </Button>
                </div>
            </div>
        </div>
    )
}

const USDCoinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.8984 16.9C19.5984 14.2 19.5984 9.7 16.8984 7" stroke="#484848" strokeWidth="1.5"
              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.10313 7.09961C4.40313 9.79961 4.40313 14.2996 7.10313 16.9996" stroke="#484848"
              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M9.70312 13.6008C9.70312 14.5008 10.4031 15.2008 11.3031 15.2008H13.0031C13.7031 15.2008 14.4031 14.6008 14.4031 13.8008C14.4031 12.9008 14.0031 12.6008 13.5031 12.4008L10.7031 11.4008C10.0031 11.3008 9.70312 11.0008 9.70312 10.2008C9.70312 9.40078 10.3031 8.80078 11.1031 8.80078H12.9031C13.8031 8.80078 14.5031 9.50078 14.5031 10.4008"
            stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7.80078V16.2008" stroke="#484848" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#484848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
)


export default ProfileProductCard;