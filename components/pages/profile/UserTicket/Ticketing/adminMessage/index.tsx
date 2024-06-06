import React from 'react';
import Image from "next/image";

const AdminMessage = ({created_at, name, response, file}:any) => {
    return (
        <li
            className={'flex flex-col items-start gap-y-1 md:min-w-1/2 mr-auto'}>
            <div className={'flex flex-row-reverse items-start gap-x-3 mr-auto '}>
                <div className={'mt-auto bg-white rounded-full drop-shadow'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256">
                        <g fill="currentColor">
                            <path
                                d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128"
                                fill={'#EEBF47'}
                                opacity="0.5"/>
                            <path
                                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0"/>
                        </g>
                    </svg>
                </div>
                <div className={`relative text-justify bg-white rounded-[4px]  min-w-[140px] drop-shadow`}>
                    <div className={'font-bold text-gray-500 p-3 border-b border-dashed'}>ادمین : {name}</div>

                    {/*<div className={`absolute -left-2.5 bottom-2.5 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-white border-b-[10px] border-b-transparent`}></div>*/}
                    <div className={'p-3'}>{response}</div>
                    {file &&
                        <div className={'sm:w-[250px] md:w-[350px] h-[150px] md:h-[200px] bg-gray-200/60 m-3'}>
                            <Image className={'w-full h-full object-contain rounded-[4px]'}
                                   src={file}
                                   alt="admin-file"
                                   width={300}
                                   height={200}/>
                        </div>
                    }
                    <span
                        className={'absolute -bottom-6 font-digit right-0 text-sm  text-black/50'}>
                        {created_at}
                    </span>
                </div>

            </div>
        </li>
    );
};

export default AdminMessage;


