import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";

interface Props {
    title: string;
    subTitle: string;
    content: string;
    linkTitle: string;
    dir: string | "rtl" | "ltr";
    slug: string;
    titleColor: string;
    subTitleColor: string;
    imgUrl?: string;
    className?: string
    imgWidth?: number,
    imgHeight?: number,
}

const CTASection: React.FC<Props> = ({
                                         title,
                                         content,
                                         linkTitle,
                                         dir,
                                         slug,
                                         titleColor,
                                         imgUrl,
                                         imgWidth,
                                         imgHeight,
                                         className = ''
                                     }) => {

    const TextEditor = () => (
        <div
            className={
                ""
            }
            style={{lineHeight: "2"}}
            dangerouslySetInnerHTML={{__html: content}}
        />
    )
    return (
        imgUrl ?
            <div
                className={"gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 " + className}
                dir={dir}
            >
                <Image
                    className="max-w-[450px] max-h-[450px] object-contain"
                    src={imgUrl}
                    alt={title}
                    width={imgWidth ? imgWidth : 400}
                    height={imgHeight ? imgHeight : 400}
                />
                <div
                    className={`flex flex-col gap-y-3 !text-right`}>
                    <h2
                        className={`text-3xl ${titleColor} font-bold `}
                    >
                        {title}
                    </h2>

                    <TextEditor/>
                    {linkTitle && (
                        <Link href={slug} className="mr-auto">
                            <Button className="w-40">{linkTitle}</Button>
                        </Link>
                    )}
                </div>
            </div>
            :
            <div
                className={"gap-8 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 " + className}
                dir={dir}
            >

                <div
                    className={`flex flex-col gap-y-3 !text-right`}>
                    <h2
                        className={`text-3xl ${titleColor} font-bold `}
                    >
                        {title}
                    </h2>

                    <TextEditor/>
                    {linkTitle && (
                        <Link href={slug} className="mr-auto">
                            <Button className="w-40">{linkTitle}</Button>
                        </Link>
                    )}
                </div>
            </div>
    );
};


export default CTASection;