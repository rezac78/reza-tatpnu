import {NextPage} from "next";
import ContactPage from "@/components/pages/contact";


export const metadata = {
    title: "ارتباط | موسسه تات",
    description:
        "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور ",
    icons: {
        icon: "/favicon.ico",
    },
};
const Contact: NextPage = () => {
    return (
        <ContactPage/>
    );
};

export default Contact;