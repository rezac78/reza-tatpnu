"use client"

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import axios from "axios";
import {Button} from "@/components/ui/button";


const NavLinks = () => {
    const [menu, setMenu] = useState({loading: true, data: []})
    const tmpNavLink = [
        `دوره-های-کوتاه-مدت`,
        'دوره-آموزشی-BA',
        'دوره-دانشگاهی',
        'زبان',
    ]
    const getNavLinks = async () => {
        try {
            const res = await axios.get("https://back-api.tatpnu.com/api/" + "menus");
            setMenu(prevState => ({...prevState, loading: false, data: res.data.data}))
        } catch (e) {

        }
    }
    useEffect(() => {
        if (menu.loading) {
            getNavLinks()
        }
    }, [menu.loading]);


    return (
        (menu.loading) ? null : menu.data.map((item_1: any, i: number) => (
            item_1.sub_menus.length !== 0 ?
                <Button
                    onClick={(e) => e.stopPropagation()}
                    key={i}
                    variant="ghost"
                    className="w-fit h-auto relative overflow-visible group flex flex-col items-start md:flex-row md:items-center">
                    {item_1.title}
                    <svg className={'mr-1 absolute left-0 top-3 md:static'} xmlns="http://www.w3.org/2000/svg"
                         width="1em" height="1em"
                         viewBox="0 0 256 256">
                        <path fill="currentColor"
                              d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"/>
                    </svg>
                    {item_1.sub_menus &&
                        <div
                            className={'drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] md:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] h-0 invisible group-hover:visible group-hover:h-auto z-10'}>
                            <div
                                className={'md:absolute right-9 md:right-1/2 md:translate-x-1/2 top-0 z-10  flex flex-col justify-center !py-4 '}>
                                {item_1.sub_menus.map((item_2: any, j: number) => (
                                    <Link href={`/services/${tmpNavLink[j]}`} /*href={item_2.slug}*/ key={j}
                                          className={'text-right p-3 bg-white w-[200px] border-b last:border-b-0 first:rounded-t last:rounded-b text-black hover:bg-accent'}>
                                        {item_2.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                </Button> :
                <Link
                    key={i}
                    href={item_1.slug}
                    className='w-fit'
                >
                    <Button
                        variant="ghost">
                        {item_1.title}
                    </Button>
                </Link>
        ))
    );
};

export default NavLinks;