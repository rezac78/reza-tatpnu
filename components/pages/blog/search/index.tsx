'use client'

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {SpinnerLoading} from "@/components/common/Loading";
import {AxiosComponent} from "@/lib/AxiosComponent";
import {SearchIcon} from "lucide-react";
import BlogCard from "@/components/pages/blog/card";
import {Input} from "@/components/ui/input";

interface Props {
    search: string
}

const BlogSearch: React.FC<Props> = ({search}) => {
    const [searchName, setSearchName] = useState(search);
    const [submittedSearch, setSubmittedSearch] = useState(search);
    const [blogList, setBlogList] = useState({loading: true, data: []});
    const router = useRouter();

    const getBlogBySearch = async () => {
        const formData = new FormData();
        formData.append("title", submittedSearch);
        await AxiosComponent("post", "blogs/search", formData, (status, data) => {
            if (status) {
                setBlogList({loading: false, data: data});
            } else {
                setBlogList({loading: false, data: []});
            }
        });
    };

    const handleSearch = (e: any) => {
        e.preventDefault();
        if (searchName) {

            setSubmittedSearch(searchName);
            setBlogList({...blogList, loading: true});
            router.push(`/blog?search=${String(searchName)}`);
        }

    };

    useEffect(() => {
        if (blogList.loading) getBlogBySearch();
    }, [blogList.loading, submittedSearch]);
    return (
        <>
            <div className="flex flex-col gap-y-3 w-full my-14 px-6 md:px-12">
                <h2 className="flex items-center w-full">
                    نتیجه جست و جو برای
                    <span className="-mt-1 mr-1 font-bold ">
                        “{submittedSearch}”
                    </span>
                </h2>
                <form onSubmit={handleSearch}>
                    <Input
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        type="text"
                        placeholder="موضوع دلخواه تان را جست و جو کنید"
                        icon={<SearchIcon/>}
                        buttonName={'جست و جو'}
                    />

                </form>
                <div className="text-primary">
                    <span className={'underline font-bold text-xl font-digit'}>{blogList.data.length}
                    </span> نتیجه پیدا شد
                </div>
            </div>
            {blogList.loading ? (
                <div className={'flex min-h-[20vh]'}><SpinnerLoading className="mx-auto"/></div>
            ) : (
                <div className="flex flex-wrap justify-center gap-6  my-6">
                    {blogList.data.length > 0 ? (
                        blogList.data.map((item, index) => (
                            <BlogCard key={index} blog={item}/>
                        ))
                    ) : (
                        <h3 className="text-center py-20">
                            مقاله ی مرتبطی یافت نشد
                        </h3>
                    )}
                </div>
            )}
        </>
    );
};

export default BlogSearch;
