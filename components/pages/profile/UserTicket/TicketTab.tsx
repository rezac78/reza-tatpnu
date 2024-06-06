"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import axios from "@/lib/axios";
import {PROFILE_URL} from "@/config-global";
import {BackupIcon} from "@/public/icon/profile/menu";
import {SpinnerLoading} from "@/components/common/Loading";
import SubSectionTitle from "@/components/pages/profile/SubSectionTitle";
import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";

const TABS = [
    {
        name: "باز",
        status: 2,
        close: 0,
    },
    {
        name: "در انتظار",
        status: 1,
        close: 0,
    },
    {
        name: "بسته شده",
        status: 3,
        close: 1,
    },
];
const TicketTab = ({title = "", type = "", loading}: any) => {
    const [search, setSearch] = useState("");
    const [tickets, setTickets] = useState<any>({
        loading: true,
        close: 0,
        status: 1,
        length: 0,
        data: [],
    });

    const getUserTicketList = async () => {
        const formData = new FormData();
        // status => 1: waiting , 2:responding
        // close => 0: open , 1:close
        formData.append("close", tickets.close);
        formData.append("status", tickets.status !== 3 ? tickets.status : 2);
        await axios
            .post(PROFILE_URL + "ticket-parents/user", formData)
            .then((res) => {
                if (res.status) {
                    setTickets((prevState:any) => ({
                        ...prevState,
                        length: res.data.data.length,
                        data: res.data.data,
                    }));
                }
            })
            .catch((e) => {
                // console.log(e)
            });
        setTickets((prevState:any) => ({...prevState, loading: false}));
    };
    useEffect(() => {
        if (tickets.loading) getUserTicketList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tickets.loading]);

    const handleChangeStatus = ({close, status}:any) => {
        setTickets({
            loading: true,
            close: close,
            length: 0,
            status: status,
            data: [],
        });
    };

    const TicketComponent = ({item}:any) => (
        <li
            className={
                "w-full grid grid-cols-2 sm:flex items-center justify-between text-gray-500  h-[124px] px-3 sm:h-[54px] bg-gray-400/10  font-bold"
            }
        >
            <span className={"sm:w-[20%] line-clamp-1 font-digit"}>{item.number}</span>
            <span className={"sm:w-[50%] line-clamp-1"}>{item.title}</span>
            <div
                className={`sm:w-[10%] flex items-center gap-x-1
                ${
                    tickets.close === 0 &&
                    (tickets.status === 1 ? "text-warn " : "text-success ")
                } ${tickets.close === 1 && "text-error"}
                `}
            >
                {/*${item.close === 0 && (item.latest_child.status === 1 ? 'text-[#FFC436]' : 'text-[#328C56]')} ${item.close === 1 && 'text-[#FF3C00]'}*/}
                <div
                    className={`w-2 h-2 rounded-full ${
                        tickets.close === 0 &&
                        (tickets.status === 1 ? "bg-warn" : "bg-success ")
                    } ${tickets.close === 1 && "bg-error"}`}
                ></div>

                {tickets.close === 0 && (tickets.status === 1 ? "در انتظار" : "باز")}
                {tickets.close === 1 && "بسته شده"}
            </div>
            <span className={"sm:w-[10%] font-digit "}>
        <span className={"mx-1 sm:hidden"}>تاریخ</span>
                {new Date(item.created_at).toLocaleDateString("fa-IR")}
      </span>
            <Link
                href={"/profile/userTicket/response/" + item.id}
                className={
                    "col-span-2 sm:w-[10%] hover:bg-gray-500/10 h-full flex items-center justify-center border-t sm:border-t-0"
                }
            >
                <span className={"mx-1 sm:hidden"}>مشاهده</span>
                {/*<EyeTicketIcon/>*/}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                >
                    <g fill="currentColor">
                        <path
                            d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                            opacity="0.2"
                        />
                        <path
                            d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/>
                    </g>
                </svg>
            </Link>
        </li>
    );

    return (
        <div className={"w-full bg-white shadow-[0_1px_4px_#0a164629] pt-6"}>
            <div
                className={`flex ${
                    type === "button" ? "flex-row pr-3" : "flex-col"
                }  gap-y-3 sm:flex-row items-center justify-between `}
            >
                <SubSectionTitle className={"!pt-0 !pr-0 sm:!pr-6 "} title={title}/>

                {type === "search" && (
                    <div className={"w-full sm:w-1/2 sm:ml-6 px-3 sm:px-0"}>
                        <Input
                            type="text"
                            // className={'p-3 w-full bg-[#F8F8F8] rounded-[4px]'}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={"موضوع یا شماره تیکت ..."}
                            buttonName="جست و جو"
                            icon={
                                <SearchIcon/>
                            }
                        />
                    </div>
                )}
                {type === "button" && (
                    <Link
                        href={"/profile/userTicket"}
                        className={
                            "bg-primary flex items-center gap-x-3 py-3 px-3 ml-6 mr-auto font-bold"
                        }
                    >
                        <BackupIcon width={"3em"} height={"3em"}/>
                        تیکت و پشتیبانی
                    </Link>
                )}
            </div>
            <ul
                className={
                    "flex gap-x-2 sm:gap-x-3 border-b select-none pr-2 sm:pr-6 pt-6 w-full overflow-x-auto whitespace-nowrap"
                }
            >
                {TABS.map((item, index) => (
                    <li
                        onClick={() =>
                            handleChangeStatus({close: item.close, status: item.status})
                        }
                        key={index}
                        className={`min-w-9 cursor-pointer pt-3 flex flex-col items-center overflow-hidden`}
                    >
                        <div className={"flex items-center sm:gap-x-4 "}>
                            <span className={"pr-1"}>{item.name}</span>
                            <span
                                className={`${
                                    tickets.status === item.status && tickets.length !== 0
                                        ? "bg-primary/10 text-primary"
                                        : "text-white"
                                }  w-5 h-5 flex items-center justify-center font-bold font-digit text-sm`}
                            >
                {tickets.length}
              </span>
                        </div>
                        <span
                            className={`${
                                tickets.status === item.status
                                    ? "translate-x-0"
                                    : "translate-x-[110%]"
                            } bg-primary h-1 w-full mt-4 rounded-t-3 transition-all duration-500`}
                        ></span>
                    </li>
                ))}
            </ul>

            <ul className={"flex flex-col gap-y-3 w-full sm:p-6"}>
                <li
                    className={
                        "hidden sm:flex items-center  text-gray-500  pb-3 font-bold text-normal "
                    }
                >
                    <span className={"w-[20%]"}>شماره تیکت</span>
                    <span className={"w-[50%]"}>موضوع</span>
                    <span className={"w-[10%] !text-right"}>وضعیت</span>
                    <span className={"w-[10%]"}>تاریخ</span>
                    <span className={"w-[10%]"}>مشاهده</span>
                </li>
                {tickets.loading ? (
                    <div className={"w-full h-[204px]  flex items-center justify-center"}>
                        <SpinnerLoading/>
                    </div>
                ) : tickets.data.length !== 0 ? (
                    (search
                            ? tickets.data.filter(
                                (val: any) =>
                                    val.title.includes(search) || val.number.includes(search)
                            )
                            : tickets.data
                    ).map((item:any, index:number) => <TicketComponent key={index} item={item}/>)
                ) : (
                    <div className={"mx-auto my-12 flex flex-col gap-y-6 items-center pb-20 "}>
                        <BackupIcon width={'2.5em'} height={'2.5em'}/>
                        <span className="text-2xl">هنوز تیکتی ثبت نکرده‌اید</span>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default TicketTab;
