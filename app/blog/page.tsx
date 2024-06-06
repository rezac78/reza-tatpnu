import BlogPageLayout from "@/components/pages/blog/layout";

export async function generateMetadata() {
    return {
        title: "بلاگ | موسسه تات",
        description:

            "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور",
        icons: {
            icon: "/favicon.ico",
        },
    };
}

const Page = () => {
    return <BlogPageLayout/>;
};

export default Page;
