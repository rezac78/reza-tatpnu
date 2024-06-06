import React from 'react';
import axios from "@/lib/axios";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import ProductWrapper from "@/components/pages/product/wrapper";

interface Props {
    ProductId: number
    product: any
}

const getProductAttr = async (ProductId: any) => {
    try {
        const res = await axios.get("product-attributes/" + ProductId);
        return res.data.data;
    } catch (e) {
        // console.log(e)
    }
    return []
};
const getProductFAQ = async (ProductId: any) => {
    try {
        const res = await axios.get("faqs/" + ProductId);
        return res.data.data;
    } catch (e) {
        // console.log(e)
    }
    return []
};
const getProductFaqs = async (ProductId: any) => {
    try {
        const res = await axios.get("faqs/" + ProductId);
        return res.data.data;
    } catch (e) {
        // console.log(e)
    }
    return []
};

const getProductLicense = async (ProductId: any) => {
    try {
        const res = await axios.get(`certificates-product/${ProductId}`);
        // if (!res.ok) throw new Error("Failed to fetch API data");
        return res.data.data;
    } catch (e) {
        return[]
    }
};

const ProductPageLayout: React.FC<Props> = async ({product, ProductId}) => {
    const faqs = await getProductFaqs(ProductId);
    const productAttr= await getProductAttr(ProductId);
    const productFAQ = await getProductFAQ(ProductId);
    const ProductLicense = await getProductLicense(ProductId);
    return (
        <div className={"flex flex-col relative "}>
            {product && product.length === 0 ? (
                <div
                    className={
                        "flex flex-col gap-y-8 items-center justify-center min-h-[60vh]"
                    }
                >
          <span className={" font-bold text-3xl"}>
            محصول مورد نظر یافت نشد!
          </span>
                    <Link href={'/'}>
                        <Button>
                            بازگشت به خانه
                        </Button>
                    </Link>
                </div>
            ) : (
                <>
                    <div
                        className={"hidden lg:block w-full h-[362px] bg-[url('/images/product/bg-repeat-product-detail.png')] bg-contain bg-repeat-x bg-secondary absolute"}
                    ></div>
                    <ProductWrapper
                        faqs={faqs}
                        banner={product?.banner}
                        productAttr={productAttr}
                        productFAQ={productFAQ}
                        product={product}
                        ProductLicense={ProductLicense}
                    />
                </>
            )}
        </div>
    );
};

export default ProductPageLayout;