
import axios from "@/lib/axios";
import SingleBlog from "@/components/pages/blog/singlePage";

const getSingleBlog = async (slug:any) => {
    try {
        const res = await axios.get("blog/" + slug);
        return {
            data: res.data.data,
            title: res.data.data.meta_title,
            description: res.data.data.meta_description,
        };
    } catch (e) {
        console.error(e);
        return {title: "", description: ""};
    }
};
const getBlogs = async (id:any) => {
    try {
        const res = await axios.get(`blogs/category/${id}`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

export async function generateMetadata({params: {slug}}:any) {
    const {title, description} = await getSingleBlog(slug[0]);
    return {
        title: title ? `${title} | موسسه تات` : "وبلاگ | موسسه تات",
        description:
            description ||
            "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور",
        icons: {
            icon: "/favicon.ico",
        },
    };
}

const Page = async ({params: {slug}}:any) => {
    const {data: blog} = await getSingleBlog(slug[0]);
    const similarBlog = await getBlogs(blog.blog_category_id);

    return <SingleBlog page={'profileNews'} similarBlogs={similarBlog.data} blog={blog}/>;
};

export default Page;