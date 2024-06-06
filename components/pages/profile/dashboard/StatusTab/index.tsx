"use client";

import Link from "next/link";
import TotalCart from "./totalCart";
import {useAuthContext} from "@/context/auth/hooks";
import {BackupIcon, CoursesIcon, DocumentIcon, PayIcon} from "@/public/icon/profile/menu";

const StatusTab = () => {
    const {user}:any = useAuthContext()

    const InformationUsersTickets = user?.informations;
    const InformationUsersCarts_count = user?.informations;
    const InformationUsersTransactions = user?.informations;
    const InformationUsersDocument = user;


    const Icon = ({item, className}:any) => <div
        style={{backgroundColor: item.bgColor, color: item.color}}
        className={
            `min-w-[62px] w-[62px] min-h-[62px] h-[62px] rounded-full ${className} items-center justify-center`
        }
    >
        {item.icon}
    </div>

    return (
        <>
                <div className={"w-full grid grid-cols-2 2xl:flex flex-wrap gap-3 my-6"}>
                    {dashboardAccess.map((item:any, index:number) => (
                        <Link
                            href={item.link}
                            key={index}
                            className={
                                `relative  2xl:flex-grow cursor-pointer flex flex-col sm:flex-row items-center gap-x-2 p-3 desktop:p-6 bg-white drop-shadow-[0px_0px_5px_rgba(0,0,0,0.1)]`
                            }
                        >
                            <Icon item={item} className={'flex'}/>
                            <div className={"flex-grow h-full flex flex-col gap-y-1"}>
                                <span className={"font-bold text-center sm:text-right"}>
                                    {item.name}
                                </span>
                                {item.name === "تیکت" ? (
                                    <TotalCart
                                        status={item.status}
                                        activeNumber={
                                            InformationUsersTickets?.tickets.open_tickets_count
                                        }
                                        totalNumber={
                                            InformationUsersTickets?.tickets.total_tickets_count
                                        }
                                    />
                                ) : item.name === "دوره ها" ? (
                                    <TotalCart
                                        status={item.status}
                                        activeNumber={InformationUsersCarts_count?.carts_count}
                                        totalNumber={InformationUsersCarts_count?.carts_count}
                                    />
                                ) : item.name === "اسناد" ? (
                                    <TotalCart
                                        status={item.status}
                                        activeNumber={
                                            InformationUsersDocument?.user_documents_status.accepted
                                        }
                                        totalNumber={
                                            InformationUsersDocument?.user_documents_status.total
                                        }
                                    />
                                ) : (
                                    <TotalCart
                                        status={item.status}
                                        activeNumber={
                                            InformationUsersTransactions?.transactions
                                                .successful_transactions_count
                                        }
                                        totalNumber={
                                            InformationUsersTransactions?.transactions
                                                .total_transactions_count
                                        }
                                    />
                                )}
                            </div>
                            <span
                                className={
                                    "absolute w-4 h-4 left-3 top-3 md:top-1/2 md:-translate-y-1/2 bg-white flex items-center justify-center rounded-full drop-shadow-[0px_0px_6px_rgba(0,0,0,0.25)]"
                                }
                            >
                <svg
                    width="4"
                    height="6"
                    viewBox="0 0 4 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M2.21652 0.532417L0.274021 2.47492C0.204493 2.5443 0.149332 2.62672 0.111696 2.71745C0.0740601 2.80818 0.0546875 2.90544 0.0546875 3.00367C0.0546875 3.10189 0.0740601 3.19915 0.111696 3.28988C0.149332 3.38061 0.204493 3.46303 0.274021 3.53242L2.21652 5.47492C2.68902 5.94742 3.49902 5.60992 3.49902 4.94242V1.05742C3.49902 0.389916 2.68902 0.0599165 2.21652 0.532417Z"
                      fill="black"
                  />
                </svg>
              </span>
                        </Link>
                    ))}
                </div>

        </>
    );
};
const basePath = '/profile'
const dashboardAccess = [
    {
        name: 'تیکت',
        status: 'فعال:',
        icon: <BackupIcon/>,
        link: basePath + '/userTicket',
        color: '#009EF6',
        bgColor: '#EBF4F9',
    },
    {
        name: 'دوره ها',
        status: 'درحال برگزاری:',
        icon: <CoursesIcon/>,
        link: basePath + '/userCourses',
        color: '#45EB6A',
        bgColor: '#E7F9EB ',
    },
    {
        name: 'اسناد',
        status: 'تایید شده:',
        icon: <DocumentIcon/>,
        link: basePath + '/userDoc',
        color: '#F29242',
        bgColor: '#FFF3E9',
    },
    {
        name: 'امور مالی',
        status: 'موفق:',
        icon: <PayIcon/>,
        link: basePath + '/userPay',
        color: '#FD325C',
        bgColor: '#FDEAEE',
    },
]

export default StatusTab;
