"use client"

import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import React from "react";
import {CloseIcon} from "@/public/icon/common";
import { DotLoading, SpinnerLoading } from "@/components/common/Loading";

const SearchBoxComponent = ({placeholder, searchValue, changeHandler, setSerachValue, openList,isLoading}: any) => {
    const SearchItem = ({title, text, key}: any) => {
        return (
            <div key={key} className='flex flex-col gap-4'>
                <div className='w-full flex flex-row gap-3'>
                    <div>
                        CheckedIcon
                        {/*<CheckedIcon />*/}
                    </div>
                    <span className='text-[#484848] tracking-wider'>{title}</span>

                </div>
                <span className='text-neutral-400 text-sm tracking-wider line-clamp-1'>{text}</span>
            </div>
        )
    }
    return (
        <div className={'relative w-full'}>
            <Input className={`p-3 w-full bg-[#F8F8F8] rounded-[4px] ${searchValue && `pr-14`}`}
                   buttonName={'جست و جو'}
                   buttonLoading={isLoading}
       
                   icon={searchValue ? <></> : <SearchIcon/>}
                   placeholder={placeholder} type="text" value={searchValue} onChange={changeHandler}/>
            {
                searchValue &&
                <div
                    onClick={() => setSerachValue("")}
                    className='absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer'>
                    <CloseIcon/>
                </div>
            }

            {/* {isLoading && <div className='absolute top-1/2 -translate-y-1/2 left-6 cursor-pointer'>
                <DotLoading/></div>} */}
            {/*<button*/}
            {/*    disabled*/}
            {/*    className={'absolute top-1/2 -translate-y-1/2 left-0 w-[120px] h-full bg-primary flex items-center justify-center gap-x-3'}>*/}
            {/*    <span>جست و جو</span>*/}
            {/*    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
            {/*            d="M17.9382 5.66933C16.512 2.24469 13.1704 0.0100374 9.46066 0.000128852C5.46246 -0.0209255 1.90737 2.54006 0.661047 6.3391C-0.585272 10.1381 0.761902 14.3074 3.99559 16.6588C7.22927 19.0103 11.6107 19.0068 14.8407 16.6501L17.7207 19.5301C18.0135 19.8226 18.4878 19.8226 18.7807 19.5301C19.0731 19.2373 19.0731 18.7629 18.7807 18.4701L15.9907 15.6801C18.5968 13.04 19.3644 9.09396 17.9382 5.66933ZM16.6011 12.1691C15.4036 15.0547 12.5849 16.9342 9.46066 16.9301V16.8901C5.22037 16.8847 1.77812 13.4603 1.75066 9.22013C1.74662 6.09586 3.62605 3.27717 6.51172 2.0797C9.39739 0.882226 12.7203 1.54208 14.9295 3.75127C17.1387 5.96046 17.7986 9.2834 16.6011 12.1691Z"*/}
            {/*            fill="#484848" />*/}
            {/*    </svg>*/}
            {/*</button>*/}
            {
                openList &&
                <div
                    className='p-5 flex flex-col gap-5 w-full absolute h-52 overflow-y-auto bg-[#F8F8F8] border-t border-[#D7D7D7]'>
                    <SearchItem key={1}/>

                </div>
            }

        </div>
    );
};

export default SearchBoxComponent;