import CartLayout from "@/components/pages/cart/layout";

export const metadata = {
    title: " سبد خرید | موسسه تات",
    description:
        "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور ",
    icons: {
        icon: "/favicon.ico",
    },
};
const Cart = () => {
    return (
        <CartLayout/>
    );
};

export default Cart;