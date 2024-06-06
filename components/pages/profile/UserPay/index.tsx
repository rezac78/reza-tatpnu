"use client";

import React, {useEffect, useState} from "react";
import CurrencyComp from "@/components/common/CurrencyComp";
import {SpinnerLoading} from "@/components/common/Loading";
import {PayIcon} from "@/public/icon/profile/menu";
import SubSectionTitle from "@/components/pages/profile/SubSectionTitle";

const UserPay: React.FC<any> = ({
                                    title = "",
                                    type = "search",
                                    loading = false,
                                    transactions = [],
                                }) => {
    const [tab, setTab] = useState(0);
    const [tabs, setTabs] = useState<any>([]);

    useEffect(() => {
        let success = [];
        let unsuccess = [];
        transactions.forEach((item:any) => {
            if (item.status === 1) {
                success.push(item);
            } else if (item.status === 0) {
                unsuccess.push(item);
            }
        });
        setTabs([
            {name: "همه", value: success.length + unsuccess.length},
            {name: "ناموفق", value: unsuccess.length},
            {name: "موفق", value: success.length},
        ]);
    }, [transactions]);

    const TransactionComponent = ({item}: any) => (
        <li
            className={
                "w-full grid grid-cols-2 sm:flex items-center justify-between text-gray-500 sm:text-center h-[124px] px-3 sm:h-[54px] bg-[#F6F6F6]  font-bold"
            }
        >
      <span className={"sm:w-[40%] line-clamp-1 font-digit"}>
        {item.trx_id ? item.trx_id : "------"}
      </span>
            <div
                className={`sm:w-[20%] flex items-center justify-center gap-x-1 ${
                    item.status === 1 && "text-[#328C56]"
                } ${item.status === 0 && "text-[#FF3C00]"}`}
            >
                <div
                    className={`w-2 h-2 rounded-full ${
                        item.status === 1 && "bg-[#328C56]"
                    } ${item.status === 0 && "bg-[#FF3C00]"}`}
                ></div>
                {item.status === 0 && "ناموفق"}
                {item.status === 1 && "موفق"}
            </div>
            <span className={"sm:w-[20%] font-digit "}>
        <span className={"mx-1 sm:hidden"}>تاریخ</span>
                {new Date(item.created_at).toLocaleDateString("fa-IR")}
      </span>
            <span
                className={
                    "col-span-2 sm:w-[20%] h-full flex items-center justify-center border-t sm:border-t-0"
                }
            >
                <CurrencyComp price={item.price}/>
                {/*<span className={"font-digit"}>*/}
                {/*  {separateNumber(item.price)}*/}
                {/*  <span className={"text-sm"}>تومان</span>*/}
                {/*</span>*/}
            </span>
        </li>
    );

    return (
        <div className={"w-full bg-white shadow-[0_1px_4px_#0a164629] pt-6"}>
            <div
                className={
                    "flex flex-col gap-y-3 sm:flex-row items-center justify-between"
                }
            >
                <SubSectionTitle className={"!pt-0 !pr-0 sm:!pr-6 "} title={title}/>
            </div>
            {loading ? (
                <div className={"w-full h-[20vh] flex items-center justify-center"}>
                    <SpinnerLoading/>
                </div>
            ) : transactions.length !== 0 ? (
                <>
                    <ul
                        className={
                            "w-full flex gap-x-2 sm:gap-x-9 border-b select-none pr-2 sm:pr-6 pt-6 overflow-x-auto "
                        }
                    >
                        {tabs.map((item: any, index: number) => (
                            <li
                                onClick={() => setTab(index)}
                                key={index}
                                className={`cursor-pointer pt-3 flex flex-col items-center overflow-hidden`}
                            >
                                <div className={"flex items-center sm:gap-x-4 "}>
                                    <span className={"pr-1"}>{item.name}</span>
                                    <span
                                        className={`bg-primary/10 text-primary w-5 h-5 flex items-center justify-center font-bold font-digit text-sm`}
                                    >
                    {item.value}
                  </span>
                                </div>
                                <span
                                    className={`${
                                        tab === index ? "translate-x-0" : "translate-x-[110%]"
                                    } bg-primary h-1 w-full mt-4 rounded-t-3 transition-all duration-500`}
                                ></span>
                            </li>
                        ))}
                    </ul>
                    <ul className={"flex flex-col gap-y-3 w-full sm:p-6"}>
                        <li
                            className={
                                "hidden sm:flex items-center justify-between text-gray-500 text-center pb-3 font-bold text-normal"
                            }
                        >
                            <span className={"w-[40%]"}>شناسه</span>
                            <span className={"w-[20%]"}>وضعیت تراکنش</span>
                            <span className={"w-[20%]"}>تاریخ</span>
                            <span className={"w-[20%]"}>مبلغ</span>
                        </li>
                        {transactions
                            .filter((val: any) => {
                                if (tab === 0) return val;
                                else if (tab === 1) {
                                    if (val.status === 0) return val;
                                } else if (tab === 2) {
                                    if (val.status === 1) return val;
                                } else if (tab === 3) {
                                    if (val.status === 2) return val;
                                }
                            })
                            .map((item: any, index: number) => (
                                <TransactionComponent key={index} item={item}/>
                            ))}
                    </ul>
                </>
            ) : (
                <div
                    className={
                        "mx-auto my-12 flex flex-col gap-y-6 items-center text-2xl sm:text-3xl pb-20  "
                    }
                >
                    <PayIcon width={"2em"} height={"2em"}/>{" "}
                    <span>دوره ای یافت نشد!</span>
                </div>
            )}
        </div>
    );
};

export default UserPay;
