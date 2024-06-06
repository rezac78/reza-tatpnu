import ProfileLayout from "@/components/pages/profile/layout";

export const metadata = {
    title: "پروفایل | موسسه تات",
    description:
        "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور ",
    icons: {
        icon: "/favicon.ico",
    },
};

const Layout = ({children}: any) => {

    return (
        <ProfileLayout>
            {children}
        </ProfileLayout>
    );
};

export default Layout;