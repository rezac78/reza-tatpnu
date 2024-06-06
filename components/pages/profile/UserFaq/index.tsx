'use client';

import React, {useEffect, useRef, useState} from "react";
import axios from "@/lib/axios";
import SearchBoxComponent from "@/components/pages/profile/UserFaq/searchBox";
import Image from "next/image";
import {SpinnerLoading} from "@/components/common/Loading";
import FAQExpand from "@/components/common/FAQExpand";
import {Button} from "@/components/ui/button";
import FaqCategoryList from "./FaqCategoryList";

const PAGE_SIZE = 4
let startIndex = 0
let endIndex = startIndex + PAGE_SIZE
let total = 0
const UserFaq: React.FC<any> = ({FAQList}) => {

    const [faqCats, setFaqCats] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [searchedList, setSearchedList] = useState(FAQList.data)
    const [openList, setOpenList] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageData, setCurrentPageData] = useState([])
    const messageEl: any = useRef(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSearchLoading, setIsSearchLoading] = useState(false)
    console.log(searchedList);
    const pageRef = useRef(1)
    const lastPageRef = useRef(FAQList.is_last_page)
    const valueRef = useRef("")
    const totalRef = useRef(FAQList.total_pages)
    

    startIndex = (currentPage - 1) * PAGE_SIZE
    total = FAQList.total_pages
    endIndex = startIndex + PAGE_SIZE
    console.log(FAQList);
    




    const changeHandler = (e: any) => {
        setSearchValue(e.target.value)
    }


    const filterHandler = async (value: any,page=1) => {
       
        pageRef.current = 1
        valueRef.current = value
        setIsLoading(true)
        try {
            const response = await axios.post(`faq-categories/search?page=${page}&search=${searchValue}`, {
                title: valueRef.current
            })
            if (response.status) {
                setSearchedList(response.data.data || [])
                totalRef.current =response.data.total_pages
                lastPageRef.current = response.data.is_last_page
            } else {
                setSearchedList([])
             
                
            }

            total=response.data.total_pages

        } catch (error) {
            // console.log(error);
        } finally {
            setIsLoading(false)
            return "filterHandler"
        }
    }

    const handlePageChange = async(page:number)=>{
        
        setIsLoading(true)
        try {
            const response = await axios.post(`faq-categories/search?page=${page.toString()}&search=${searchValue}`, {
                title:valueRef.current
            })
            if (response.status) {

                setSearchedList(response.data.data)
                lastPageRef.current = response.data.is_last_page
            } else {
                setCurrentPageData([])
                setSearchedList([])
            }

            total=response.data.total_pages

        } catch (error) {
            // console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    // useEffect(() => {
    //     if (searchedList.length > 0)
    //         setCurrentPageData(searchedList.slice(startIndex, endIndex))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [currentPage])

    // useEffect(() => {

    //     if (searchedList.length > 0 && !searchValue)
    //         setCurrentPageData(searchedList.sort((a: any, b: any) => a.priority - b.priority).slice(startIndex, endIndex))
    // }, [searchedList, searchValue])

    // useEffect(() => {
    //     if (searchValue) {
    //         const finalValue = searchedList.filter((question: any) => question.question.includes(searchValue))
    //         setCurrentPageData(searchedList.filter((question: any) => question.question.includes(searchValue)))
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [searchValue])


    const getCommonFaqCats = async () => {
        try {
            const res = await axios.get("faq-categories");
            setFaqCats(res.data.data.filter((val: any) => !val.categorizable_type))
        } catch (e) {
            // console.log(e)
        }
    };
    useEffect(() => {
        getCommonFaqCats()
    }, [])


    useEffect(()=>{
        // if(!searchValue) return
       
        pageRef.current = 1
        const timeOut = setTimeout(async() => {
            setIsLoading(true)
            setIsSearchLoading(true)
        try {
            const response = await axios.post(`faq-categories/search?page=1&search=${searchValue}`, {
                title: valueRef.current
            })
            if (response.status) {
                setSearchedList(response.data.data || [])
                totalRef.current =response.data.total_pages
                lastPageRef.current = response.data.is_last_page
            } else {
                setSearchedList([])
             
                
            }

            total=response.data.total_pages

        } catch (error) {
            // console.log(error);
        } finally {
            setIsLoading(false)
            setIsSearchLoading(false)
        }
            

        }, 800)

        return () => clearTimeout(timeOut)
    },[searchValue])

    return (
        <>
            <div className={''}>
                <div
                    className={" flex flex-col sm:flex-row gap-x-6 p-6 bg-white shadow mt-14"}>
                    <Image className={' w-[93px] h-[133px] -mt-16 mx-auto sm:mr-6'}
                           src={'/images/pages/profile/temp/faq-question.png'}
                           width={93} height={133} alt={'ticket-help'}/>
                    <div className={'flex flex-col gap-y-6 flex-grow'}>
                        <span className={'text-[18px] font-bold'}>چطور می‌توانیم کمکتان کنیم؟</span>
                        <span className={'text-normal'}>با جستجو در باکس زیر، سوالات خود را پیدا کنید</span>
                        <div className={'sm:w-2/3'}>
                            <SearchBoxComponent placeholder={'جست و جو ...'}
                                                changeHandler={changeHandler} searchValue={searchValue}
                                                setSerachValue={setSearchValue} getFAQList={""}
                                                searchedList={searchedList} openList={openList}
                                                isLoading={isSearchLoading}/>
                        </div>
                    </div>
                </div>
                {/*<div className={'p-6 border-b'}>*/}
                {/*    <span className={' sm:text-normal'}>‫قبل از تیکت‌زدن حتما سوالات را ببینید و سوال خود را پیدا کنید.</span>*/}
                {/*</div>*/}
                <div className={'shadow p-3 sm:p-6 flex flex-col bg-white mt-6'}>
                    <span className={'my-6'}>دسته بندی سوال ها</span>
                    {faqCats && <FaqCategoryList list={faqCats} filterHandler={filterHandler}/>}
                </div>

                <div className="w-full py-4 mt-6 bg-white shadow flex flex-col min-h-[50vh]">
                    {isLoading ? <SpinnerLoading className={'m-auto'}/> : (searchedList.length > 0 ? <>
                            <FAQExpand
                                className={'bg-gray-500/10'}
                                data={searchedList}/>

                            {searchedList.length > 0 && totalRef.current >1 && (
                                <div className="mx-auto flex justify-center items-center md:gap-4 mt-6 ">
                                    <Button
                                    variant="outline"
                                        className={'w-9 h-9 disabled:bg-primary/30 rounded-full p-3'}
                                        onClick={() => handlePageChange(pageRef.current -=1)}
                                        disabled={pageRef.current === 1}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"/></svg>
                                    </Button>
                                    <div className="flex gap-3 items-center">
                                        {/* <span className={'text-black'}>صفحه</span> */}
                                        <div
                                            className="border border-primary w-7 h-7 text-center rounded-md py-1 font-digit">1</div>
                                            <span>...</span>
                                        <div
                                            className="bg-primary w-8 text-center rounded-md py-1 font-digit text-white">{pageRef.current}</div>
                                     
                                     <span>...</span>
                                        <div className="border border-primary w-7 h-7  text-center rounded-md py-1 font-digit">{totalRef.current}</div>

                                    </div>
                                    <Button
                                    variant="outline"
                                        className={'w-9 h-9 disabled:bg-primary/30 rounded-full p-3'}
                                        onClick={() => handlePageChange(pageRef.current +=1)}
                                        disabled={lastPageRef.current}
                                    >
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg>
                                    </Button>

                                </div>
                            )}
                        </> : <p className="text-center text-[#FF3C00] py-9">نتیجه ای یافت نشد!</p>
                    )}

                </div>

            </div>
            <div className="absolute bottom-0" ref={messageEl}></div>
        </>
    );
};

export default UserFaq;