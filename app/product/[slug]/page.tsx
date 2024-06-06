import axios from "@/lib/axios";
import ProductPageLayout from "@/components/pages/product/layout";

const getSingleProduct = async (slug: any) => {
    try {
        const res = await axios.get("product/" + slug);
        return {
            title: res.data[0].title,
            description: res.data[0].description,
            ProductId: res.data[0].id,
            product: res.data[0]
        };
    } catch (e) {
        console.error(e);
        return {title: "", description: ""};
    }
};

export async function generateMetadata({params: {slug}}: { params: { slug: any } }) {
    const {title, description} = await getSingleProduct(slug);

    return {
        title: title ? `${title} | موسسه تات` : "بلاگ | موسسه تات",
        description:
            description ||
            "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور",
        icons: {
            icon: "/favicon.ico",
        },
    };
}

const ProductPage = async ({params: {slug}}: { params: { slug: any } }) => {
    const {ProductId, product} = await getSingleProduct(slug);
    return (
        <ProductPageLayout ProductId={ProductId} product={product}/>
    );
};

export default ProductPage;

