import React from 'react';
import CurrencyComp from "@/components/common/CurrencyComp";
import ButtonLoading from "@/components/ui/buttonLoading";

interface Props {
    count: any
    finalPrice: any
    loading: any
    handleClickPay: any
}

const CartInfoPay: React.FC<Props> = ({count, finalPrice, loading, handleClickPay}) => {
    return (
        <div className={'w-full lg:col-span-1 bg-gray-50 sticky top-0  mt-0 lg:mt-6 shadow-md p-12 md:pt-12 md:p-0'}>
            <span className={'text-2xl font-bold my-9 md:p-12'}>سبد خرید محصول</span>
            <div
                className={'flex items-center justify-between border-b pb-4 my-9 md:m-12'}>
                <span className={'text-lg'}>تعداد محصول:</span>
                <div className={`font-digit font-bold`}>
                    {count}
                </div>
            </div>
            <div
                className={'flex items-center justify-between pb-4 my-9 md:m-12'}>
                <span className={'text-lg'}>جمع سبد خرید:</span>
                <CurrencyComp price={finalPrice}/>
            </div>
            <ButtonLoading
                className='h-14 md:rounded-[0]'
                loading={loading}
                type="button"
                onClick={handleClickPay}>
                پرداخت
            </ButtonLoading>
        </div>
    );
};

export default CartInfoPay;