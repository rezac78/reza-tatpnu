"use client";
import React, {useEffect, useState} from 'react';
import ProductSlider from "@/components/pages/services/shortTermCourses/productSlider";
import {useSelectedCategoryContext} from "@/context/SelectedCategoryContext";
import axios from "@/lib/axios";
import {SpinnerLoading} from "@/components/common/Loading";


const ShortTermProducts: React.FC = () => {
    // await new Promise((resolve)=>setTimeout(resolve,2000))

    // const products = await getProducts();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState({status: 0, data: []});
    const {selectedCat}:any = useSelectedCategoryContext();

    useEffect(() => {
        if (selectedCat.id) {
            const getProductByCat = async () => {
                const id = selectedCat.id;
                await axios
                    .get("products-category/" + id)
                    .then(({data}) => {
                        setProducts(data);
                    })
                    .catch((err) => {
                        setProducts({status: 0, data: []});
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            };
            getProductByCat();

        }
    }, [selectedCat]);
    return (
        <div className={'md:w-1/2 flex-grow min-h-[380px]'}>
            {(!products || products.data.length == 0) ?
                <div className={'w-full h-full flex'}><SpinnerLoading className={'m-auto'}/></div> :
                <ProductSlider products={products.data}/>}
        </div>
    )
        ;
};

export default ShortTermProducts;