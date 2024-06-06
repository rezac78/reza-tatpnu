import React from 'react';
import Image from "next/image";

const UserMessage = ({icon, created_at, description, file}:any) => {
    // console.log(file)
    const previous_user = <li className={'flex flex-col items-start gap-y-1 md:w-1/2'}>

        <div className={'flex items-start gap-x-3  '}>
                                    <span
                                        className={'min-w-[42px] min-h-[42px] bg-primary rounded-full flex items-center justify-center'}>
                                        {icon}
                                    </span>
            <div className={`relative text-justify bg-[#FFF9EB] p-3  min-w-[140px]`}>
                                        <span
                                            className={'absolute -top-4 sm:-top-6 font-digit right-0  text-sm'}>{created_at}</span>
                <div
                    className={`absolute -right-2.5 top-2.5 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-[#FFF9EB] border-b-[10px] border-b-transparent`}></div>

                <span>{description}</span>
                {file &&
                    <div className={'sm:w-[250px] h-[150px] bg-primary/30 mt-3'}>
                        <Image className={'w-full h-full object-contain rounded-[4px]'}
                               src={file}
                               alt="admin-file" width={300}
                               height={200}/>
                    </div>
                }
            </div>
        </div>
    </li>
    return (
        <li
            className={'flex flex-col items-start gap-y-1 md:min-w-1/2 '}>
            <div className={'flex items-start gap-x-3 '}>
                <div className={'bg-white rounded-full w-[42px] h-[42px] flex items-center justify-center drop-shadow'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                        <g fill="currentColor">
                            <path d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity="0.2"/>
                            <path
                                d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"/>
                        </g>
                    </svg>
                </div>
                <div className={`relative text-justify bg-primary rounded-[4px]  min-w-[140px] drop-shadow`}>
                    {/*<div className={'font-bold text-gray-500 p-3 border-b border-dashed'}>ادمین : {name}</div>*/}

                    {/*<div className={`absolute -right-2.5 top-2.5 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-[#EEBF47] border-b-[10px] border-b-transparent`}></div>*/}
                    <div className={'p-3 text-white'}>{description}</div>
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
                        className={'absolute -bottom-6 font-digit left-0 text-sm  text-black/50'}>{created_at}</span>
                </div>

            </div>
        </li>
    )
        ;
};

export default UserMessage;
