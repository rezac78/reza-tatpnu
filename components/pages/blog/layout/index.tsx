"use client";

import {useSearchParams} from "next/navigation";
import BlogPage from "@/components/pages/blog";
import BlogSearch from "@/components/pages/blog/search";
import {Suspense} from "react";


const SearchOrPage = () => {
    const params: any = useSearchParams();
    return (params.get("search") && (
            <BlogSearch search={params.get("search")}/>
        )) ||
        (!params.get("search") && <BlogPage/>);
};
const BlogPageLayout = () => {
    return (
        <Suspense>
            <SearchOrPage/>
        </Suspense>
    )
}

export default BlogPageLayout;