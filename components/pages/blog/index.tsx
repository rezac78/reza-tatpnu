"use client";

import {useEffect, useState} from "react";
import {AxiosComponent} from "@/lib/AxiosComponent";
import axios from "@/lib/axios";
import ButtonLoading from "@/components/ui/buttonLoading";
import {ArrowDown} from "@/public/icon/common";
import HeaderBlog from "@/components/pages/blog/header";
import BlogCard from "@/components/pages/blog/card";
import MenuBlogCard from "@/components/pages/blog/categoryMenu";
import {SpinnerLoading} from "@/components/common/Loading";

const BlogPage = () => {
    const [blogs, setBlogs] = useState({loading: true, data: []});
    const [number, setNumber] = useState(1);
    const [isLoadMoreDisabled, setIsLoadMoreDisabled] = useState(false);
    const [categories, setCategories] = useState({loading: true, data: []});
    const [selectedCat, setSelectedCat] = useState("");
    const [buttonLoading, setButtonLoading] = useState(false);

    const getBlogCategory = async () => {
        await AxiosComponent("get", "blog-categoris", null, (status, data) => {
            if (status) {
                setCategories({loading: false, data});
                if (data.length > 0) {
                    setSelectedCat(data[0].id);
                }
            } else {
                setCategories({loading: false, data: []});
            }
        });
    };

    const getBlogsByCategory = async (categoryId: any, page: any) => {
        setButtonLoading(true)

        const res = await axios.get(`blogs/category/${categoryId}?page=${page}`);
        // if (blogs.data.length !== res.data?.data.length) {
        if (res.data.status === true) {
            setBlogs((prev: any) => ({
                ...prev,
                data: [...prev.data, ...res.data.data],
            }));
            setIsLoadMoreDisabled(res.data?.is_last_page);
        }
        // } else {
        //     setBlogs({loading: false, data: []});
        //     setNumber(1);
        // }
        setButtonLoading(false)
    };


    const handleGetMoreBlog = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };

    useEffect(() => {
        if (selectedCat) {
            const call = async () => {
                setBlogs(prevState => ({...prevState, loading: true, data: []}));
                setIsLoadMoreDisabled(false)
                await getBlogsByCategory(selectedCat, number);
                setBlogs(prevState => ({...prevState, loading: false}));
            }
            call()
        }
    }, [selectedCat]);

    useEffect(() => {
        if (number > 1) {
            const call = async () => {
                await getBlogsByCategory(selectedCat, number);
            }
            call()
        }
    }, [number]);

    useEffect(() => {
        if (categories.loading) {
            getBlogCategory();
        }
    }, []);

    return (
        <>
            <HeaderBlog/>
            <div className={"flex flex-col md:flex-row gap-x-6 mt-20"}>
                {!categories.loading && (
                    <MenuBlogCard
                        data={categories.data}
                        selectedCat={selectedCat}
                        setSelectedCat={setSelectedCat}
                        headTitle="دسته بندی"
                    />
                )}
                <div className="flex-grow flex flex-col gap-y-6 px-16">
                    {blogs.loading ? (
                        <SpinnerLoading className="mx-auto"/>
                    ) : blogs.data.length === 0 ? (
                        <div className="m-auto text-3xl">مقاله ای یافت نشد!</div>
                    ) : (
                        <>
                            {/*desktop layout*/}
                            <div className="hidden lg:grid grid-cols-4 grid-rows-4 gap-3 h-[400px]">
                                <figure className="col-span-2 row-span-4">
                                    {blogs.data[0] &&
                                        <BlogCard type='table-big' className={'max-w-full max-h-full '}
                                                  blog={blogs.data[0]}/>
                                    }
                                </figure>
                                <figure className="col-span-2 row-span-4">
                                    {blogs.data[1] &&
                                        <BlogCard type='table-big' className={'max-w-full max-h-full '}
                                                  blog={blogs.data[1]}/>
                                    }
                                </figure>
                            </div>
                            <div className="hidden lg:flex flex-wrap justify-between gap-6 md:mx-6 xl:mx-0">
                                {blogs.data.slice(3, blogs.data.length).map((item, index) => (
                                    <BlogCard key={index} blog={item}/>
                                ))}
                            </div>
                            {/*desktop layout*/}


                            {/*Mobile layout*/}
                            <div
                                className=" flex lg:hidden flex-wrap items-center justify-center gap-6">
                                {blogs.data.map((item, index) => (
                                    <BlogCard key={index} blog={item}/>
                                ))}
                            </div>
                            {/*Mobile layout*/}


                            {!isLoadMoreDisabled && (
                                <ButtonLoading
                                    type={"button"}
                                    onClick={handleGetMoreBlog}
                                    loading={buttonLoading}
                                    className="w-[150px] mb-9 mx-auto">
                                    <div className='flex items-center justify-center gap-x-1'>
                                        <span>نمایش بیشتر</span>
                                        <ArrowDown/>
                                    </div>
                                </ButtonLoading>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogPage;
