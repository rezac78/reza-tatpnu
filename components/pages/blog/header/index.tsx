"use client"

import {useRouter} from "next/navigation";
import {useState} from "react";
import {Input} from "@/components/ui/input";

const HeaderBlog = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSearch = (e:any) => {
        e.preventDefault();
        if (search) {
            router.push(`/blog?search=${String(search)}`)
        }
    }
    return (
        <div className="bg-primary/20  flex flex-col gap-y-3 pt-16 pb-9">
            <div className="flex justify-center align-center font-bold text-3xl">
                <span className="">مقالات </span>
                <span className="text-primary px-1"> تات</span>
            </div>
            <div className={'relative w-[90%] md:w-[50%] mx-auto'}>
                <p className="flex mx-auto text-center">
                    خوش آمدید به صفحه بلاگ ما! اینجا مکانی است که ما داستان‌های جذاب، مطالب
                    آموزنده و نکات مفید را با شما به اشتراک می‌گذاریم. از ما همراهی کنید تا
                    در جستجوی دانستنی‌های جدید همراه شما باشیم. امیدواریم که از مطالب ما لذت
                    ببرید و از آن‌ها بهره‌مند شوید. به ما بپیوندید و با ما در این سفر به
                    دنیای دانش همراه باشید!
                </p>
                <form onSubmit={handleSearch}
                      className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full px-9">
                    <Input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="flex-grow "
                        type="text"
                        placeholder="موضوع دلخواه تان را جست و جو کنید"
                        buttonName="جست و جو"
                    />
                </form>
            </div>
        </div>
    );
};

export default HeaderBlog;
