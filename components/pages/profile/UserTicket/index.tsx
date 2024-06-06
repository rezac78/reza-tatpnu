'use client'

import React, {useRef, useState} from 'react';
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import {PROFILE_URL} from "@/config-global";
import Link from "next/link";
import ButtonLoading from "@/components/ui/buttonLoading";
import {Button} from "@/components/ui/button";
import SubSectionTitle from "@/components/pages/profile/SubSectionTitle";
import {CloseIcon} from "@/public/icon/common";
import TicketTab from "@/components/pages/profile/UserTicket/TicketTab";


const UserTicket = () => {
        const [data, setData] = useState<any>({
            title: '',
            description: '',
            filePreview: '',
            file: '',
            status: '',
            // status ticket
            // 1 = انتظار
            // 2 = باز
            // 3 = بسته
            priority: 1,
            // priority ticket
            // 1 = پایین
            // 2 = متوسط
            // 3 = بالا
            // parent_id: '0',

        })
        const inputRef: any = useRef()

        const [sendLoading, setSendLoading] = useState(false)
        const [loading, setLoading] = useState(false)
        const [ticketCatList, setTicketCatList] = useState([])
        const [ticketCat, setTicketCat] = useState<any>({id: -1, title: ''})
        const [openTicket, setOpenTicket] = useState(false)

        const handleChangeImage = (e: any) => {
            if (e.target.files && e.target.files.length > 0) {
                const reader = new FileReader()
                reader.onload = () => {
                    const file = e.target.files[0]
                    if (((file.size) <= 2097152)) {
                        setData((prevState: any) => ({...prevState, file: file}))
                        setData((prevState: any) => ({...prevState, filePreview: URL.createObjectURL(file)}))
                    } else toast.error('حجم فایل وارد شده زیاد است. (حداکثر 2 مگابایت)')

                }
                reader.readAsDataURL(e.target.files[0])
            }
        }


        const handleChangeData = (name: any, e: any) => {
            const value = e.target.value
            setData((prevState: any) => ({...prevState, [name]: value}))
        }

        const handleStartTicket = async () => {
            setLoading(true)
            // Get Ticket Category list
            await axios.get(PROFILE_URL + 'ticket-categories/index',
                //     {
                //     headers: {
                //         Authorization: user.token
                //     }
                // }
            ).then(({data}) => {
                // console.log(data)
                setTicketCatList(data.data)
                setOpenTicket(true)
            }).catch((e) => {
                // console.log(e)
            })
            setLoading(false)
        }

        const handleSubmitTicket = async (e: any) => {
            e.preventDefault();
            // console.log(data)
            if (!data.title) toast.error('ابتدا موضوع تیک خود را بنویسید')
            else if (!data.description) toast.error('ابتدا خلاصه ای از مشکل خود را شرح دهید')
            else {
                setSendLoading(true)
                setLoading(true)
                const formData = new FormData()
                formData.append('title', data.title)
                formData.append('description', data.description)
                formData.append('file', data.file)
                formData.append('priority', data.priority)
                formData.append('ticket_category_id', ticketCat.id)

                await axios.post(PROFILE_URL + 'ticket-parents/store', formData)
                    .then(({data}) => {
                        // console.log(data)
                        toast.success(data.message)
                        // setTicketList(prevState => ({...prevState, loading: true}))
                        setTicketCat({id: -1, title: ''})
                        setOpenTicket(false)
                        setData({priority: 1})
                    })
                    .catch(e => {
                        // console.log(e)

                    })
                setSendLoading(false)
                setLoading(false)
            }
        }

        //
        //
        // UI INSIDE COMPONENTS
        //
        //

        const CategoryCard = ({disabled = false, className, item, onClick}: any) => (
            <button
                disabled={disabled}
                onClick={onClick}
                className={className + ' hover:shadow bg-primary/10 flex items-center gap-x-3 px-3 py-2 '}>
                <div className={'rounded-full min-w-12 min-h-12 flex items-center justify-center bg-primary/50'}>
                    {/*{item.icon}*/}
                    <Image className={'w-6 h-6'} src={item.icon} alt={item.title} width={6} height={6}/>
                    {/*<svg width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                    {/*     xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path*/}
                    {/*        d="M3 9.11035V14.8804C3 17.0004 3 17.0004 5 18.3504L10.5 21.5304C11.33 22.0104 12.68 22.0104 13.5 21.5304L19 18.3504C21 17.0004 21 17.0004 21 14.8904V9.11035C21 7.00035 21 7.00035 19 5.65035L13.5 2.47035C12.68 1.99035 11.33 1.99035 10.5 2.47035L5 5.65035C3 7.00035 3 7.00035 3 9.11035Z"*/}
                    {/*        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"*/}
                    {/*        strokeLinejoin="round"/>*/}
                    {/*    <path*/}
                    {/*        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"*/}
                    {/*        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"*/}
                    {/*        strokeLinejoin="round"/>*/}
                    {/*</svg>*/}
                </div>
                <p>{item.title}</p>
            </button>
        )


        const FQALink = ({className}: any) => (
            <div className={className}>
                <span>
                    ‫قبل از تیکت‌زدن حتما<Link href={'/profile/userHelp'}
                                               className={'text-link border-link border-b  font-bold'}> سوالات متداول</Link> را ببینید و
                </span>
                <span> سوال خود را پیدا کنید.</span>
            </div>
        )
        //
        //
        // UI INSIDE COMPONENTS
        //
        //
        return (
            <div className={'flex flex-col gap-y-6 '}>
                <div
                    className={`${(openTicket || ticketCat.title) ? 'h-0' : 'h-[483px] sm:h-[246px]'} overflow-hidden shadow transition-all duration-700`}>
                    <div
                        className={"py-6  bg-white  sm:h-[190px] mt-14"}>
                        <div className={'flex flex-col sm:flex-row items-center gap-6'}>
                            <Image className={'-mt-20 sm:mr-16'} src={'/images/pages/profile/temp/ticket-help-icon.png'}
                                   width={144}
                                   height={159}
                                   alt={'ticket-help'}/>
                            <div className={'flex flex-col'}>
                            <span
                                className={'text-[18px] font-bold'}>به مشکلی بر خوردید و نیاز به راهنمایی دارید؟</span>
                                <span
                                    className={'text-normal'}>کافیست از طریق سیستم تیکتینگ، با ما در ارتباط باشید</span>
                                <FQALink className={' mt-6 text-center flex flex-col sm:hidden'}/>
                            </div>
                            <ButtonLoading type={'button'} className={'w-[120px] mx-auto sm:mr-auto sm:ml-6 '}
                                           loading={loading} onClick={handleStartTicket}>
                                ارسال تیکت
                            </ButtonLoading>
                        </div>
                        <FQALink className={'py-3 bg-[#264653]/20 mt-6 whitespace-nowrap text-center hidden sm:block'}/>

                    </div>
                </div>
                <div
                    className={`relative flex flex-col transition-all bg-white duration-700 ${openTicket ? 'sm:h-[272px] p-6' : 'h-0 p-0'} overflow-hidden shadow`}>

                    <Button variant='outline' type="button"
                            className={'w-[120px] sm:absolute mb-3 sm:mb-0 mr-auto sm:mr-[unset] left-6'}
                            onClick={() => setOpenTicket(false)}>
                        انصراف
                    </Button>
                    <SubSectionTitle className={'!p-0 mb-3'} title={'دسته بندی مورد نظر خود را انتخاب کنید'}/>
                    <span>برای دریافت پشتیبانی دقیق تر‌، دسته بندی مورد نظر خود را از زیرانتخاب کنید</span>
                    <div className={'grid grid-cols-2 sm:grid-cols-4 items-center mt-6 gap-3'}> {
                        ticketCatList.map((item, index) => (
                            <CategoryCard key={index} item={item}
                                          onClick={() => {
                                              setTicketCat(item)
                                              setOpenTicket(false)
                                          }}/>
                        ))
                    }
                    </div>
                </div>
                <form
                    className={` transition-[height] duration-700 ${ticketCat.title ? 'h-[700px]' : 'h-0'} overflow-hidden`}
                    onSubmit={handleSubmitTicket}>
                    <div className={'flex flex-col gap-y-3 bg-white p-3 sm:p-6'}>
                        <div className={'flex items-center gap-x-3'}>
                            <span>دسته بندی انتخاب شده:</span>
                            <CategoryCard disabled={true} className={'min-w-[225px]'} item={ticketCat}/>
                        </div>
                        <span>اولویت</span>
                        <select onChange={e => handleChangeData('priority', e)} className={'p-3 bg-[#F2F2F2]'}>
                            <option value="1">پایین</option>
                            <option value="2">متوسط</option>
                            <option value="3">بالا</option>
                        </select>
                        <span>موضوع</span>
                        <input
                            value={data.title}
                            onChange={e => handleChangeData('title', e)}
                            className={'p-3 bg-[#F2F2F2]'} type="text" placeholder={'موضوع تیکت'}/>
                        <span>شرح درخواست</span>

                        <textarea
                            value={data.description}
                            onChange={e => handleChangeData('description', e)}
                            className={'bg-[#F2F2F2] p-3 resize-none min-h-[168px]'} rows={6}
                            placeholder={'درخواست خود را بصورت مختصر شرح دهید'}/>
                        <span>فایل ضمیمه</span>
                        <input type="file"
                               className={'hidden'}
                               ref={inputRef}
                               onChange={handleChangeImage}
                               disabled={sendLoading}
                        />
                        {data.filePreview ?
                            <div className={' w-full h-[64px] bg-[#F2F2F2] flex items-center gap-x-3 px-3'}>
                                <button type={'button'}
                                        onClick={() => setData((prevState: any) => ({...prevState, filePreview: ''}))}
                                        className={'border border-red-500 hover:bg-red-500/50 rounded-[4px] w-6 h-6 flex items-center justify-center'}>
                                    <CloseIcon/>
                                </button>
                                <div className={'w-[40px] h-[40px]'}>
                                    <Image
                                        className={'w-full h-full  object-cover'}
                                        src={
                                            data.filePreview
                                            // 'https://b-courses.tatpnu.com/storage/images/products/7ny7lpt24mSj1M1wjR0XQ2Dq47o2OPNnCymeqtn5.jpg'
                                        } alt={'preview-user-upload'} width={40} height={40}/>
                                </div>
                                <div className={'line-clamp-1 sm:hidden'}>{
                                    data.file.name.slice(0, 27)
                                    // `نام فایل آپلود شده`
                                }</div>
                                <div className={'line-clamp-1 hidden sm:block'}>{
                                    data.file.name.slice(0, 54)
                                    // `نام فایل آپلود شده`
                                }</div>
                            </div>
                            :
                            <button
                                type={'button'}
                                onClick={() => inputRef.current.click()}
                                className={'p-3  bg-[#F2F2F2] flex flex-col gap-y-3 items-center border-2 border-gray-300 border-dashed'}>
                                <span>برای <span className={'text-link font-bold underline'}>آپلود فایل</span> کلیک کنید یا فایل خود را به این قسمت کشیده و رها کنید<span
                                    className={'text-error font-bold mx-1'}>(حداکثر 2 مگابایت)</span></span>
                                <span>پسوندهای مجاز: png, jpeg, glf, jpg. pem, cer, txt, pfx    </span>
                            </button>
                        }
                        <div className={'flex items-center justify-end gap-x-6 pb-3 sm:pb-0'}>
                            <ButtonLoading type={'submit'} className={'w-[120px] '} loading={loading}>
                                ارسال تیکت
                            </ButtonLoading>
                            <ButtonLoading className={'w-[120px]'} loading={loading}
                                           type="button"
                                           onClick={() => {
                                               setOpenTicket(false)
                                               setTicketCat({id: -1, title: ''})
                                           }}>
                                انصراف
                            </ButtonLoading>
                        </div>
                    </div>
                </form>


                <TicketTab type={'search'} title={'لیست تیکت ها'}/>


            </div>
        );
    }
;

export default UserTicket;