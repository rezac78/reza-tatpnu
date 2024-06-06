import LoginLayout from "@/components/pages/Login/layout";
export const metadata = {
    title: "ورود | موسسه تات",
    description:
        "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور ",
    icons: {
        icon: "/favicon.ico",
    },
};

const Page = () => {
    return (
            <div className={'w-full h-screen flex'}>
                <LoginLayout/>
            </div>
    );
};

export default Page;