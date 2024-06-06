import React from 'react';
import CartProductCard from "@/components/pages/cart/productCard";

interface Props {
    products: any
    handleDeleteProduct: any
    setPriceCal: any
}

const CartProductList: React.FC<Props> = ({products, handleDeleteProduct, setPriceCal}) => {
    return (
        <div className={'w-full lg:col-span-2 bg-white mt-6 lg:pt-6 lg:px-14'}>
            <div className={'flex flex-col gap-y-3 mt-3 mb-6 w-full'}>
                {products.map((item: any, i: number) => (
                    <CartProductCard key={i}
                                     handleDelete={handleDeleteProduct}
                                     item={item}
                                     setPriceCal={setPriceCal}
                    />
                ))}
            </div>
        </div>
    );
};

export default CartProductList;