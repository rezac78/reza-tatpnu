"use client";

import React, {useState} from "react";
import Image from "next/image";
import {ArrowDown} from "lucide-react";
import {Button} from "@/components/ui/button";

interface Props {
    data: {}[],
    headTitle: string,
    selectedCat: any,
    setSelectedCat: any
}

const MenuBlogCard: React.FC<Props> = ({data, headTitle, selectedCat, setSelectedCat}) => {
    const [open, setOpen] = useState(false);
    const MapOver = () =>
        data.map((item: any, i: number) => (
            <Button
                variant="ghost"
                key={i}
                onClick={() => setSelectedCat(item.id)}
                className={`!rounded-[0] ${
                    selectedCat === item.id && "bg-primary/50"
                } w-full flex flex-row items-start justify-start gap-2 hover:bg-primary/40 p-3`}
            >
                <Image
                    width={20}
                    height={20}
                    src={item.icon}
                    className={"w-5 h-5 object-contain"}
                    alt={"category-icon"}
                />
                <span>{item.title}</span>
            </Button>
        ));
    return (
        <div
            className="sticky top-16 md:top-20  flex flex-col bg-white p-2 sm:p-6 mb-6 md:mb-0 w-full overflow-hidden md:min-w-[370px] md:w-[370px] md:h-fit shadow">
            <div
                onClick={() => setOpen(!open)}
                className={`${
                    open ? "border-b !pb-3 border-border" : ""
                } p-3 sm:p-0 md:pb-3 md:border-b md:border-border flex items-center justify-between `}
            >
                <span className="text-xl">{headTitle}</span>
                <div
                    className={`md:hidden ${open ? "" : "rotate-180"} transition-transform`}
                >
                    <ArrowDown/>
                </div>
            </div>
            <ul className={`hidden md:block`}>
                <MapOver/>
            </ul>
            <ul
                className={`md:hidden ${
                    open ? "h-auto opacity-100" : "h-0 opacity-0 "
                } `}
            >
                <MapOver/>
            </ul>
        </div>
    );
};

export default MenuBlogCard;
