"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import ButtonLoading from "@/components/ui/buttonLoading";
import {UsdCoinIcon} from "@/public/icon/common";
import CurrencyComp from "@/components/common/CurrencyComp";

interface Props {
    ProductLicense: any
    product: any
    handleAddToCart: any
}

const LicenseSection: React.FC<Props> = ({ProductLicense, product, handleAddToCart}) => {
    const [loading, setLoading] = useState(false)
    const [checkedState, setCheckedState] = useState(() =>
        [true, ...ProductLicense.slice(1).map(() => false), false]
    );

    const [totalPrice, setTotalPrice] = useState(product.price);
    useEffect(() => {
        const selectedLicensesTotal = ProductLicense.reduce((acc: any, item: any, index: number) => {
            return acc + (checkedState[index] ? item.certificate.price : 0);
        }, 0);
        setTotalPrice(product.price + selectedLicensesTotal);
    }, [checkedState, ProductLicense, product.price]);
    const handleOnChange = (position: any) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        if (position < ProductLicense.length) {
            updatedCheckedState[updatedCheckedState.length - 1] = false;
        } else {
            for (let i = 0; i < updatedCheckedState.length - 1; i++) {
                updatedCheckedState[i] = false;
            }
        }
        setCheckedState(updatedCheckedState);
    };
    const handleClickAddToCart = async () => {
        setLoading(true)
        let ids: any = []
        ProductLicense.map((item: any, index: number) => {
            if (checkedState[index]) ids.push(item.id)
        })
        const productId = product.id
        await handleAddToCart({productId, ids})
        setLoading(false)
    }

    return (
        <div className={"w-full mt-6 bg-white"}>

            <div
                className={
                    "w-full mt-1 p-3 sm:p-6 md:p-7 shadow-[0_4px_35.3px_-12px_rgba(0,0,0,0.25)] text-[#484848]"
                }
            >
                <div className={`px-1 md:px-5 mb-5 hidden sm:flex`}>
                    <div className="flex items-center justify-center">
                        <span className="text-center ml-2">✱</span> {/* Using the actual star symbol */}
                    </div>
                    <span
                        className={`text-[background: #737373]  text-[13px] font-normal leading-[16.69px] text-right`}
                    >
                        لطفا گواهینامه مورد نظر خود را از لیست زیر انتخاب کنید
                    </span>
                </div>
                {ProductLicense
                    .map((item: any, index: number) => (
                        <div
                            className={
                                "w-full flex flex-col md:flex-row justify-between mb-9 last:mb-0"
                            }
                            key={index}
                        >
                            <div className={"flex flex-col w-full md:flex-1 md:mr-4"}>
                                <div className={'flex justify-between'}>
                                    <label
                                        className={
                                            "text-[15px] sm:text-[18px] flex items-center gap-x-2 sm:gap-x-4 select-none cursor-pointer"
                                        }
                                    >
                                        <input
                                            className={"w-4 sm:w-6 h-4 sm:h-6 text-[#484848] checked:accent-black"}
                                            type="checkbox"
                                            checked={checkedState[index]}
                                            onChange={() => handleOnChange(index)}/>
                                        {item.certificate.title}
                                    </label>
                                    <div className="flex md:hidden">
                                        <Link
                                            href={'item.certificate.image'}
                                            className="pr-0 sm:pr-10 pt-1 text-[13px] text-[#34AADF]"
                                        >
                                            مشاهده نمونه
                                        </Link>
                                    </div>
                                </div>
                                <span className={"pr-0 md:pr-10 pt-2 text-[15px]"}>
                                    {item.certificate.description}
                                </span>
                                <div className="hidden md:flex">
                                    <Link
                                        href={'item.certificate.image'}
                                        className="pr-0 sm:pr-10 pt-1 text-[13px] text-[#34AADF]"
                                    >
                                        مشاهده نمونه
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={
                                    "w-full md:w-auto flex md:flex-col justify-between mt-2 gap-y-2 sm:text-[20px] text-justify"
                                }
                            >
                                <div className={`flex`}>
                                    <UsdCoinIcon/>
                                    <span className={`px-1.5  `}>
                                        قیمت گواهینامه :
                                    </span>
                                </div>
                                <div className={`text-left`}>
                                    <span
                                        className={" text-[15px]"}
                                    >{item.certificate.price !== 0 ?
                                        <CurrencyComp price={item.certificate.price}/>
                                    :
                                    'رایگان'
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    ))}
                <div
                    className={`w-full flex flex-col md:flex-row justify-between mb-9 last:mb-0`}
                >
                    <div className={`flex flex-col`}>
                        <label
                            className={`text-[18px] flex items-center md:px-4  gap-x-4 select-none cursor-pointer`}
                        >
                            <input
                                type="checkbox"
                                className="w-4 sm:w-6 h-4 sm:h-6 text-[#484848] text-lg leading-9 text-right checked:accent-black"
                                checked={checkedState[checkedState.length - 1]}
                                onChange={() => handleOnChange(checkedState.length - 1)}
                            />
                            نیازی به گواهینامه ندارم.
                        </label>
                    </div>
                </div>
                <div
                    className={
                        "w-full flex items-center mb-4 justify-between text-[#484848] text-[18px] bg-[#F1F1EF] py-2"
                    }
                >
                    <div className={`flex pr-2 sm:pr-5`}>

                        <UsdCoinIcon/>
                        <span className={`flex pr-2 test-[14px] sm:text-[15px]`}>قیمت نهایی دوره:</span>
                    </div>
                    <CurrencyComp price={totalPrice}/>
                    {/*<span*/}
                    {/*    className=" pl-2 sm:pl-5 "*/}
                    {/*>*/}
                    {/*    {separateNumber(totalPrice)}*/}
                    {/*    <span className={"text-sm"}>تومان</span>*/}
                    {/*</span>*/}
                </div>
                <div className={"flex flex-col md:flex-row items-end justify-between"}>
                    <ButtonLoading
                        loading={loading}
                        className={`w-full h-[56px] md:w-1/2 hidden sm:flex rounded-[0]`}
                        onClick={handleClickAddToCart}
                    >
                        رفتن به سبد خرید
                    </ButtonLoading>
                    <div
                        className={"w-full h-[56px] flex items-center justify-center mt-4 md:mt-0 md:pr-5 bg-[#F1F1EF]"}>
                        <div
                            className={"w-full flex items-center justify-between text-[#484848] text-[20px]"}>
                            <div className={`flex pr-2 sm:pr-5`}>

                                <UsdCoinIcon/>
                                <span className={`px-2 text-normal`}>پیش پرداخت:</span>
                            </div>
                            <span
                                className={"font-bold pl-2 sm:pl-5"}
                            >


                                {product.prepayment === null || product.prepayment === 0
                                    ? "---"
                                    : <CurrencyComp price={product.prepayment}/>
                                }
                            </span>
                        </div>
                    </div>
                    <ButtonLoading
                        loading={false}
                        className={`h-[56px] flex sm:hidden`}
                        onClick={handleClickAddToCart}
                    >
                        ثبت نام دوره با گواهی
                    </ButtonLoading>
                </div>
            </div>
        </div>
    );
};

export default LicenseSection;
