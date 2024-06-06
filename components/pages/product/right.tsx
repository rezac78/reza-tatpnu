import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import AttrTitleIcon from "@/components/pages/product/AttrTitleIcon";
import FAQExpand from "@/components/common/FAQExpand";

interface Props {
    faqs: any
    banner: any
    productAttr: any []
    productFAQ: any
    language?: 'fa' | 'en'
}

const ProductRight: React.FC<Props> = ({
                                           faqs,
                                           banner,
                                           productAttr = [],
                                           productFAQ,
                                           language = 'fa'
                                       }) => {
    const [activeTabInd, setActiveTabInd] = useState(0);
    const changeActive = (index: number) => {
        setActiveTabInd(index);
    };

    return (
        <div
            className={
                "defaultStyleForTextEditor lg:col-span-2 flex flex-col max-w-full lg:w-[945px]"
            }
        >
            <Image
                width={869}
                height={398}
                className={"w-full"}
                src={banner}
                alt="banner"
            />
            <div
                className={
                    "sticky top-[80px] sm:top-[110px]  w-full h-12 lg:h-16 mb-10 shadow-[0_2px_5px_2px_rgba(0,0,0,0.3)]"
                }
            >
                <ul
                    className={`w-full h-full bg-[#264653] flex items-center gap-x-1 sm:gap-x-3 justify-start text-white transition-all text-sm  ${
                        productAttr.length > 4 ? "lg:text-sm" : "lg:"
                    } overflow-y-hidden overflow-x-auto`}
                >
                    {productAttr.length !== 0 &&
                        productAttr
                            .sort((a, b) => a.priority - b.priority)
                            .map((item, index) => (
                                <li
                                    onClick={() => changeActive(index)}
                                    className={`${
                                        activeTabInd === index ? "bg-primary " : ""
                                    } h-full flex-grow text-center flex  gap-y-2 whitespace-nowrap  transition-all cursor-pointer`}
                                    key={index}
                                >
                                    <Link
                                        href={`#${item.key}`}
                                        className="w-full h-full flex items-center justify-center "
                                    >
                                        {item.key}
                                    </Link>
                                </li>
                            ))}
                    {faqs.length !== 0 && (
                        <li
                            className={`${
                                activeTabInd === 4 ? "bg-primary " : ""
                            } h-full flex-grow text-center flex flex-col items-center justify-center gap-y-2 whitespace-nowrap  py-3 lg:py-4 transition-all cursor-pointer`}
                            onClick={() => changeActive(4)}
                        >
                            <Link
                                href={`#سوالات متداول`}
                                className="w-full h-full flex items-center justify-center"
                            >
                <span>
                  {productFAQ[0]?.faqCategoryTitle
                      ? productFAQ[0]?.faqCategoryTitle
                      : "Frequently Asked Questions"}
                </span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            <div className={"w-full flex flex-col gap-y-6"}>
                {productAttr.length !== 0 &&
                    productAttr.map((item, index) => (
                        <div
                            id={item.key}
                            key={index}
                            className={`w-full px-3 lg:px-0 scroll-mt-[200px]`}
                        >
                            <AttrTitleIcon item={item}/>
                            <div
                                dir={item.key === 'سرفصل‌ها' ? (language === 'en' ? 'ltr' : 'rtl') : 'rtl'}
                                className={"insideEditor w-full overflow-hidden pr-4 mt-4 "}
                                style={{lineHeight: "2"}}
                                dangerouslySetInnerHTML={{__html: item.value}}
                            />
                        </div>
                    ))}
                <div id="سوالات متداول" className={`scroll-mt-[150px]`}>
                    {faqs.length !== 0 && (
                        <AttrTitleIcon
                            item={{
                                key: "سوالات متداول",
                                icon: "",
                            }}
                        />
                    )}
                    {faqs.length !== 0 && <FAQExpand data={productFAQ}/>}
                </div>
            </div>
        </div>
    );
};

export default ProductRight;
