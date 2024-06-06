"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";

interface Props {
    productAttr: any[],
    activeSection: number
}

const CTANavigator: React.FC<Props> = ({productAttr, activeSection}) => {
    const [activeTabInd, setActiveTabInd] = useState(0);
    useEffect(() => {
            const index = productAttr.findIndex((item) => item.slug === activeSection);
            if (index !== -1) {
                setActiveTabInd(index);
            }
    }, [activeSection, productAttr]);
    const changeActive = (index: any) => {
        setActiveTabInd(index);
    };

    return (
        <div
            className="sticky top-[80px] lg:top-[105px] w-full h-20 lg:h-24 mb-10 shadow-[0_2px_5px_2px_rgba(0,0,0,0.3)] z-30">
            <ul
                className={`w-full h-full bg-secondary flex items-center justify-between sm:justify-center  text-white transition-all text-[10px]  overflow-x-auto overflow-y-hidden px-0 lg:px-6`}
            >
                {productAttr.length !== 0 &&
                    productAttr
                        .sort((a, b) => a.priority - b.priority)
                        .map((item, index) => (
                            <Link href={`#${item.slug}`} key={index}>
                                <li
                                    key={index}
                                    onClick={() => changeActive(index)}
                                    className={`${
                                        activeTabInd === index ? "bg-primary" : ""
                                    } flex-none h-full text-center flex flex-col items-center justify-center gap-y-2 whitespace-nowrap py-5 px-1 sm:px-10 lg:py-4 transition-all cursor-pointer`}
                                >
                                    <div className="">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <span className="text-sm sm:text-normal">
                    {item.title}
                  </span>
                                </li>
                            </Link>
                        ))}
            </ul>
        </div>
    );
};

export default CTANavigator;