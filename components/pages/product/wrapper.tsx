"use client";
import React, {useRef} from 'react';
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import {useAuthContext} from "@/context/auth/hooks";
import {useRouter} from "next/navigation";
import {useLoginModalContext} from "@/context/loginModal";
import ProductRight from "@/components/pages/product/right";
import ProductLeft from "@/components/pages/product/left";
import LicenseSection from "@/components/pages/product/license";
import AttrTitleIcon from "@/components/pages/product/AttrTitleIcon";
// import ProductRight from "@/components/pages/product/right";

interface Props {
    faqs: any
    banner: any
    productAttr: any
    productFAQ: any
    product: any
    ProductLicense: any
}

const ProductWrapper: React.FC<Props> = ({
                                             faqs,
                                             banner,
                                             productAttr,
                                             productFAQ,
                                             product,
                                             ProductLicense,
                                         }) => {
        const eleRef = useRef<any>();
        const {setLoginModal}: any = useLoginModalContext();
        const router = useRouter();
        const {user}: any = useAuthContext();

        const AddToCartApi = async (data: any) => {
            if (user) {
                await axios
                    .post("add-to-cart", data)
                    .then(({data}) => {
                        if (data.status) {
                            toast.success("دوره با موفقیت به سبد خرید اضافه شد");
                            router.push("/cart");
                            // session.update()
                        }
                    })
                    .catch((err) => {
                        if (err?.response?.status === 400) {
                            toast.error(err.response ? err.response.data.message : "پیامی یافت نشد!!!");
                        } else {
                            toast.error(
                                err.response ? err.response.data.message : "خطا در دیافت اطلاعات"
                            );
                        }
                    });
            } else {

                setLoginModal(true);
            }
        };
        const handleAddToCart = async ({id}: { id: any }) => {
            if (ProductLicense.length !== 0) {
                window.scrollTo({
                    top: eleRef.current.offsetTop,
                    behavior: "instant",
                });
            } else {
                //add to cart api call here =>
                const formData = new FormData();
                formData.append("productable_type", "product");
                formData.append("productable_id", id);
                await AddToCartApi(formData);
            }
        };
        const handleAddToCartLicense = async ({productId, ids}: { productId: any, ids: any }) => {
            const addCertificate = async () => {
                if (ids.length !== 0) {
                    const formData = new FormData();
                    formData.append("productable_type", "productCertificate");
                    formData.append("productable_id", ids);

                    await axios
                        .post(
                            "add-to-cart",
                            formData
                            // {
                            //     method: "POST",
                            //     data: formData,
                            //     headers: {
                            //         Authorization: userToken
                            //     }
                            // }
                        )
                        .then(({data}) => {
                            if (data.status) {
                                // toast.success("دوره با موفقیت به سبد خرید اضافه شد");
                                router.push("/cart");
                            }
                        })
                        .catch((err) => {
                            if (err?.response?.status === 400) {
                                toast.error(
                                    err.response ? err.response.data.message : "پیامی یافت نشد!!!"
                                );
                            } else {
                                toast.error(
                                    err.response
                                        ? err.response.data.message
                                        : "خطا در دیافت اطلاعات"
                                );
                            }
                        });
                }
            };

            if (user) {
                // add product to cart
                const fData = new FormData();
                fData.append("productable_type", "product");
                fData.append("productable_id", productId);
                await axios
                    .post(
                        "add-to-cart",
                        fData
                        // {
                        //     method: "POST",
                        //     data: fData,
                        //     headers: {
                        //         Authorization: userToken
                        //     }
                        // }
                    )
                    .then(({data}: { data: any }) => {
                        if (data.status) {
                            toast.success("دوره با موفقیت به سبد خرید اضافه شد");
                            addCertificate();
                        }
                    })
                    .catch((err: any) => {
                            if (err?.response?.status === 400) {
                                toast.error(
                                    err.response ? err.response.data.message : "پیامی یافت نشد!!!"
                                );
                            } else {
                                toast.error(
                                    err.response ? err.response.data.message : "خطا در دیافت اطلاعات"
                                );
                            }
                        }
                    )
                ;
            } else {
                // toast("ابتدا وارد حساب کاربری خود شوید", {
                //     style: {
                //         padding: "16px",
                //         color: "#e7cc26",
                //     },
                //     icon: <AccountIcon />,
                //     iconTheme: {
                //         primary: "#e7cc26",
                //         secondary: "#FFFAEE",
                //     },
                // });
                setLoginModal(true);
            }
        };
        return (
            <div
                className={
                    " flex flex-col lg:grid  grid-cols-3 grid-rows-1 gap-x-5 items-start py-[39px] lg:py-12 z-20"
                }
            >
                <ProductRight
                    faqs={faqs}
                    banner={banner}
                    productAttr={productAttr}
                    productFAQ={productFAQ}
                    language={product.title.includes('زبان') ? 'en' : "fa"}
                />

                <ProductLeft
                    productAttr={productAttr}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    hasLicense={ProductLicense.length !== 0}
                />
                {ProductLicense.length !== 0 ? (
                    <div ref={eleRef} className={"w-full sm:col-span-2 px-3 sm:px-0"}>
                        <div className={"w-full"}>
                            <AttrTitleIcon
                                item={{
                                    key: "گواهی‌نامه های دوره",
                                    icon: "/images/pages/product/license.svg",
                                }}
                            />
                        </div>
                        <LicenseSection
                            product={product}
                            ProductLicense={ProductLicense}
                            handleAddToCart={handleAddToCartLicense}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
;

export default ProductWrapper;