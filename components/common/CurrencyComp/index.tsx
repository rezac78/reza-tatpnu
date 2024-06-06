import React from 'react';
import {separateNumber} from "@/lib/utils";

interface CurrencyCompProps {
    price: number;
    className?: string;
}

const CurrencyComp: React.FC<CurrencyCompProps> = ({className,price}) => {
    return (
        <div className={className + " inline-flex items-center gap-x-1 font-semibold"}>
            <span className={'font-digit'}>{separateNumber(price)}</span>
            <span className={'text-xs'}>تومان</span>
        </div>
    );
};

export default CurrencyComp;