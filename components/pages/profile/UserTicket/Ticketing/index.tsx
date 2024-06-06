"use client"

import {useEffect, useRef, useState} from 'react';
import axios from "@/lib/axios";
import {PROFILE_URL} from "@/config-global";
import Image from "next/image";
import toast from "react-hot-toast";
import ButtonLoading from "@/components/ui/buttonLoading";
import {DotLoading, SpinnerLoading} from "@/components/common/Loading";
import UserMessage from "@/components/pages/profile/UserTicket/Ticketing/userMessage";
import AdminMessage from "@/components/pages/profile/UserTicket/Ticketing/adminMessage";
import {Input} from "@/components/ui/input";
import {CloseIcon} from "@/public/icon/common";
import {Button} from "@/components/ui/button";

const Ticketing = ({ticketId}:any) => {


    const [sendLoading, setSendLoading] = useState(false)
    const [loading, setLoading] = useState(true)
    const [chatLoading, setChatLoading] = useState(true)
    const [tickets, setTickets] = useState<any>([{ticketUser: {}, ticketAdmin: {}}])

    const messageEl:any = useRef(null);
    const [msg, setMsg] = useState('')
    const [attachment, setAttachment] = useState<any>({preview: '', file: ''})

    const inputRef:any = useRef()

    const getSingleTicket = async () => {
        await axios.get(PROFILE_URL + 'tickets/user/list/' + ticketId)
            .then((res) => {
                const response = res.data.data
                setTickets(response)
            })
            .catch(e => {
                // console.log(e)
            })

        setLoading(false)
        setChatLoading(false)

    }
    useEffect(() => {
        if (chatLoading) getSingleTicket()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatLoading]);

    // scroll to the end of the chat list after each chat
    useEffect(() => {
        if (tickets.length) {
            messageEl.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [tickets.length, chatLoading]);
    const handleAddFile = (e:any) => {
        try {

            if (e.target.files && e.target.files.length > 0) {
                const reader = new FileReader()
                reader.onload = () => {
                    const file = e.target.files[0]
                    if (((file.size) <= 2097152)) {
                        setAttachment({file: file, preview: URL.createObjectURL(file)})
                    } else toast.error('حجم فایل وارد شده زیاد است. (حداکثر 2 مگابایت)')

                }
                reader.readAsDataURL(e.target.files[0])
            }
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmitButton = async (e:any) => {
        e.preventDefault()
        setSendLoading(true)
        if (msg) {
            const formData = new FormData
            formData.append('ticket_parent_id', ticketId)
            formData.append('description', msg)
            if (attachment.file) formData.append('file', attachment.file)


            await axios.post(PROFILE_URL + 'tickets/store', formData)
                .then((res) => {
                    if (res.data.status) {
                        setMsg('')
                        setAttachment({file: '', preview: ''})
                        setChatLoading(true)
                    }
                }).catch(e => {
                    // console.log(e)
                    toast.error('خطایی رخ داده است، لطفا مجدد تلاش کنید')
                })
        }
        setSendLoading(false)
    }

    const TitleValue = ({item, value}:any) => (
        <div className={'flex gap-x-1  font-bold'}>
            <span className={'text-black/50'}>{item}</span>
            <span className={''}>{value}</span>
        </div>
    )

    //
    //
    // UI Components
    //
    //

    const TicketAdminIcon = ()=><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.1394 21.6198C17.2594 21.8798 16.2194 21.9998 14.9994 21.9998H8.99937C7.77937 21.9998 6.73937 21.8798 5.85938 21.6198C6.07937 19.0198 8.74937 16.9697 11.9994 16.9697C15.2494 16.9697 17.9194 19.0198 18.1394 21.6198Z"
            stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
            stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M15.5819 10.58C15.5819 12.56 13.9819 14.17 12.0019 14.17C10.0219 14.17 8.42188 12.56 8.42188 10.58C8.42188 8.60002 10.0219 7 12.0019 7C13.9819 7 15.5819 8.60002 15.5819 10.58Z"
            stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


    return (

        <div className={'relative w-full bg-white shadow-md'}>
            <ButtonLoading loading={chatLoading}
                           className={'absolute left-28 -top-[68px] w-fit sm:w-[95px] '}
                           onClick={() => setChatLoading(true)}>

                <span className={'hidden sm:block'}>بروزرسانی</span>
                <span className={'sm:hidden'}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g
                    fill="currentColor"><path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity="0.2"/><path
                    d="M224 128a96 96 0 0 1-94.71 96H128a95.38 95.38 0 0 1-65.9-26.2a8 8 0 0 1 11-11.63a80 80 0 1 0-1.67-114.78a3 3 0 0 1-.26.25L44.59 96H72a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8V56a8 8 0 0 1 16 0v29.8L60.25 60A96 96 0 0 1 224 128"/></g></svg></span>
            </ButtonLoading>
            {loading ? <SpinnerLoading/> :
                <>
                    <div
                        className={'border-b p-3 sm:p-6  grid grid-col-1 sm:grid-cols-2 gap-y-3 bg-[#F8F9FD] drop-shadow '}>
                        <TitleValue item={'موضوع:'} value={tickets[0].ticketUser.title}/>
                        <TitleValue item={'دسته بندی:'} value={tickets[0].ticketUser.ticket_category_title}/>
                        <TitleValue item={'وضعیت تیکت:'} value={tickets[0].ticketUser.status}/>
                        <TitleValue item={'شماره تیکت:'} value={tickets[0].ticketUser.number_ticket}/>
                    </div>
                    <form onSubmit={handleSubmitButton}>
                        <ul className={`ticketingScrollBarStyle bg-[#F8F9FD] flex flex-col gap-y-9 w-full h-[450px] p-3 sm:p-6 ${attachment.file && 'sm:pb-16'} overflow-y-auto`}>
                            {
                                tickets.length !== 0 &&
                                tickets.map(({ticketUser, ticketAdmin}:any, index:number) =>
                                    <div key={index} className={'space-y-9'}>
                                        <UserMessage icon={<TicketAdminIcon/>}
                                                     created_at={new Date(ticketUser.created_at).toLocaleString('fa-IR')}
                                                     file={ticketUser.file}
                                                     description={ticketUser.description}/>
                                        {ticketAdmin && ticketAdmin.response !== null &&
                                            <AdminMessage
                                                name={ticketAdmin.admin_visit_name}
                                                file={ticketAdmin.file}
                                                created_at={new Date(ticketAdmin.created_at).toLocaleString('fa-IR')}
                                                response={ticketAdmin.response}/>
                                        }
                                    </div>
                                )
                            }
                            <li ref={messageEl}></li>
                        </ul>

                        <div className={'relative mt-auto'}>

                            {tickets[0].ticketUser.close_code === 1 ?
                                <span
                                    className={'h-[64px] w-full flex items-center text-center justify-center font-bold text-white sm:text-[20px] bg-primary border-2 border-dashed'}>تیکت مورد نظر بسته شده است و دیگر امکان ارسال پیام وجود ندارد!</span>
                                :
                                <>
                                    {/*<button*/}
                                    {/*    disabled={sendLoading}*/}
                                    {/*    className={'absolute right-0 top-1/2 -translate-y-1/2 bg-primary w-[50px] h-[50px] mr-3 rounded-full flex items-center justify-center'}*/}
                                    {/*    type="submit">*/}
                                    {/*    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <path*/}
                                    {/*            d="M9.46046 4.22867L18.0205 8.50867C21.8605 10.4287 21.8605 13.5687 18.0205 15.4887L9.46046 19.7687C3.70046 22.6487 1.35046 20.2887 4.23046 14.5387L5.10046 12.8087C5.32046 12.3687 5.32046 11.6387 5.10046 11.1987L4.23046 9.45867C1.35046 3.70867 3.71046 1.34867 9.46046 4.22867Z"*/}
                                    {/*            stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"*/}
                                    {/*            strokeLinejoin="round"/>*/}
                                    {/*        <path d="M5.4375 12H10.8375" stroke="#292D32" strokeWidth="1.5"*/}
                                    {/*              strokeLinecap="round"*/}
                                    {/*              strokeLinejoin="round"/>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {sendLoading &&
                                        <div
                                            className={'absolute right-16 top-1/2 -translate-y-1/2 bg-white border-t border-b h-full w-1/2 flex items-center pr-9 z-10'}>
                                            <DotLoading/>
                                        </div>
                                    }
                                    <Input
                                        disabled={sendLoading}
                                        value={msg}
                                        onChange={(e) => setMsg(e.target.value)}
                                        className={'w-full px-20 h-[64px] !pr-16 focus:outline-none shadow'}
                                        placeholder={tickets[0].ticketUser.close_code === 1 ? "تیکت بسته شده است" : 'اینجا تایپ کنید...'}
                                        icon={<div
                                            onClick={handleSubmitButton}
                                            className={`bg-primary w-[50px] h-[50px] rounded-full flex items-center justify-center ${sendLoading && 'opacity-50'}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.46046 4.22867L18.0205 8.50867C21.8605 10.4287 21.8605 13.5687 18.0205 15.4887L9.46046 19.7687C3.70046 22.6487 1.35046 20.2887 4.23046 14.5387L5.10046 12.8087C5.32046 12.3687 5.32046 11.6387 5.10046 11.1987L4.23046 9.45867C1.35046 3.70867 3.71046 1.34867 9.46046 4.22867Z"
                                                    stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M5.4375 12H10.8375" stroke="white" strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"/>
                                            </svg>
                                        </div>}
                                        type="text"/>
                                    {
                                        attachment.preview ?
                                            <div
                                                className={'absolute -top-16 border-4 border-dashed w-full h-[64px] bg-[#F2F2F2] flex items-center gap-x-3 px-3'}>
                                                <button type={'button'}
                                                        onClick={() => setAttachment({preview: '', file: ''})}
                                                        className={'border border-red-500 hover:bg-red-500/50 rounded-[4px] w-6 h-6 flex items-center justify-center'}>
                                                    <CloseIcon/>
                                                </button>
                                                <div className={'w-[40px] h-[40px]'}>
                                                    <Image
                                                        className={'w-full h-full  object-cover'}
                                                        src={attachment.preview}
                                                        alt={'preview-user-upload'}
                                                        width={40}
                                                        height={40}/>
                                                </div>
                                                <div className={'line-clamp-1 sm:hidden'}>{
                                                    attachment.file.name.slice(0, 27)
                                                    // `نام فایل آپلود شده`
                                                }</div>
                                                <div className={'line-clamp-1 hidden sm:block'}>{
                                                    attachment.file.name.slice(0, 54)
                                                    // `نام فایل آپلود شده`
                                                }</div>
                                            </div>
                                            :
                                            null
                                    }
                                    <Button
                                        type={'button'}
                                        onClick={() => inputRef.current.click()}
                                        variant='ghost'
                                        className={'absolute left-0 top-0 w-[64px] h-[64px] rounded-l-[4px] rounded-r-[0] flex items-center justify-center'}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="1.5"
                                                  d="M12.948 7.308L7.42 12.835a2.607 2.607 0 1 0 3.689 3.688l5.982-5.982a4.548 4.548 0 0 0 0-6.452a4.549 4.549 0 0 0-6.4.065l-6.034 5.918a6.517 6.517 0 0 0 9.215 9.214l7.377-7.312"/>
                                        </svg>
                                        <input
                                            type="file"
                                            className={'hidden'}
                                            ref={inputRef}
                                            accept="image/png, image/jpeg,.doc,.pdf"
                                            onChange={handleAddFile}/>
                                    </Button>
                                </>}
                        </div>
                    </form>
                </>
            }
        </div>
    )
};

export default Ticketing;