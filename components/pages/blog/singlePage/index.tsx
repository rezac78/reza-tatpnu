"use client"

import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {ShareIcon} from "@/public/icon/common";
import {Button} from "@/components/ui/button";

interface Props {
    similarBlogs: any
    blog: any
    page?: string
}

const SingleBlog: React.FC<Props> = ({similarBlogs, blog, page = 'blog'}) => {
    const [search, setSearch] = useState("");
    const date = new Date(blog.created_at).toLocaleDateString("fa-IR");
    const router = useRouter();
    const handleSearch = (e: any) => {
        e.preventDefault();
        if (search) {
            router.push(`/blog?search=${String(search)}`);
        }

    };

    const {image, title, content, study_time, alt} = blog;

    const SimilarBlogComponent = () =>
        similarBlogs.slice(0, 3).map(({slug, image, title, alt, short_description}: any, i: number) => (
            <Link href={`/blog/${slug}`} key={i} className={'flex my-3 hover:bg-black/10'}>
                <div className={'min-w-[120px] w-[120px] h-[90px]'}>
                    <Image className={'object-cover w-full h-full'} src={image}
                           width={110}
                           height={80}
                           alt={alt ? alt : 'blog'}/>
                </div>
                <div className="px-4 flex flex-col justify-center">
                    <h2 className=" md:text-[15px] font-bold line-clamp-1">{title}</h2>
                    <span className={'line-clamp-3'}>{short_description}</span>
                </div>
            </Link>
        ));

    return (
        <>

            {page !== 'profileNews' &&
                <div className="my-10 ">
                    <form
                        onSubmit={handleSearch}
                        className="bg-white  w-[90%] md:w-[720px] mx-auto shadow-lg"
                    >
                        <Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="موضوع دلخواه تان را جست و جو کنید"
                            buttonName={'جست و جو'}
                        />

                    </form>
                </div>
            }
            <div
                className={`relative h-full pb-10 flex flex-col xl:flex-row mx-auto gap-6 px-3 ${page !== 'profileNews' && 'md:w-[845px] xl:w-full'} `}>
                <div
                    className={"xl:min-w-[845px] w-full flex flex-col gap-y-6 bg-white px-2 sm:px-6 shadow-xl"}>
                    <h2 className="pt-5">
                        {title}
                    </h2>
                    <div className="flex gap-x-5 text-sm">
                        <span>#آموزشی</span>
                        <span className={""}>
                {`تاریخ انتشار : ${date}`}
              </span>
                        <span>زمان مطالعه: {study_time} دقیقه</span>
                    </div>
                    <Button className={'w-fit mr-auto'} variant="ghost">
                        اشتراک گذاری
                        <ShareIcon/>
                    </Button>
                    <Image
                        className={"rounded-t-[3px] w-full lg:h-[388px] object-cover "}
                        src={image}
                        alt={alt ? alt : 'some-image'}
                        width={745}
                        height={388}
                    />
                    <div className={"flex flex-col gap-y-6 px-3 sm:p-6 sm:pt-0"}>
                        <div className="flex justify-end  "></div>
                        <div
                            className="blogTextEditorStyle text-justify leading-[2rem]"
                            dangerouslySetInnerHTML={{__html: content}}
                        />
                    </div>
                </div>
                {page !== 'profileNews' &&
                    <div
                        className=" sticky top-28 flex flex-col bg-white p-4 sm:p-6 mb-4 w-full overflow-hidden flex-grow h-fit mx-auto shadow-xl">
                        <div
                            className="flex items-center justify-between desktop:border-b desktop:border-[#a7a6a6]">
                            <h2 className="font-bold text-[20px] sm:text-[26px] mb-0 lg:mb-5 ">
                                مقالات مشابه
                            </h2>
                        </div>
                        <SimilarBlogComponent/>
                    </div>
                }
            </div>

        </>
    );
};

export default SingleBlog;