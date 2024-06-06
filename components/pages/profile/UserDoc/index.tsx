'use client'

import axios from "@/lib/axios";
import {AUTH_URL} from "@/config-global";
import {useEffect, useRef, useState} from "react";
import {useAuthContext} from "@/context/auth/hooks";
import toast from "react-hot-toast";
import Image from "next/image";
import {DotLoading} from "@/components/common/Loading";

const STATUS_TYPE = [
    {
        status: 'empty',
        color: '#000000',
        bgColor: 'rgba(0,0,0,0.1)',
        name: 'مدرکی بارگذاری نکرده اید',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"
                   fill="currentColor">
            <g>
                <path d="M232 136v64a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity="0.2"/>
                <path
                    d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h48a8 8 0 0 1 0 16H32v64h192v-64h-48a8 8 0 0 1 0-16h48a16 16 0 0 1 16 16M85.66 77.66L120 43.31V128a8 8 0 0 0 16 0V43.31l34.34 34.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32M200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"/>
            </g>
        </svg>
    },
    {
        status: 'pending',
        color: '#d3b405',
        bgColor: 'rgba(211,180,5,0.1)',
        name: 'در انتظار بررسی',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
                  opacity="0.5"/>
            <path fill="currentColor" fillRule="evenodd"
                  d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"/>
        </svg>
    },
    {
        status: 'accepted',
        color: '#267928',
        bgColor: 'rgba(38,121,40,0.1)',
        name: 'تایید شده',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
                  opacity="0.5"/>
            <path fill="currentColor"
                  d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"/>
        </svg>
    },
    {
        status: 'rejected',
        color: '#FF3C00',
        bgColor: 'rgba(255,60,0,0.1)',
        name: 'رد شده',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
                  opacity="0.5"/>
            <path fill="currentColor"
                  d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"/>
        </svg>
    },
]

const UserDocument = () => {

    const {user}: any = useAuthContext()


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputClickRefs: any = Array.from({length: 20}, () => useRef(null));
    const [loading, setLoading] = useState(true)
    const [userDoc, setUserDoc] = useState<any>([])


    const ref = useRef(true)
    const CreateUserDocument = async () => {
        await user.user_documents?.map((item: any, i: number) => {
            const newItem = {
                name: item.document.name,
                doc_id: item.document.id,
                description: item.document.description,
                preview: '',
                file: '',
                persian_name: item.document.persian_name,
                existFile: item.storage_url ? item.storage_url : '',
                status: item.status ? item.status : 'empty',
                loading: false
            }
            setUserDoc((prevState: any) => ([...prevState, newItem]))
        })
        setLoading(false)
    }
    useEffect(() => {
        if (ref.current) {
            ref.current = false
            CreateUserDocument()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleChangeImage = (name: any, doc_id: any, storage_url: any, status: any, e: any) => {
        // if (userDoc.find(val => val.doc_id === doc_id)) {
        //     console.log(1)
        //     const updatedItems = userDoc.filter((item, index) => item.doc_id !== doc_id);
        //     setUserDoc(updatedItems);
        // }
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader()
            reader.onload = () => {
                const file = e.target.files[0]
                if (((file.size) <= 2097152)) {

                    const newInputFields = userDoc.map((field: any) => {
                        if (field.doc_id === doc_id) {
                            return {
                                ...field,
                                preview: URL.createObjectURL(file),
                                file: file,
                            };
                        }
                        return field;
                    });
                    setUserDoc(newInputFields);

                    /*setUserDoc(
                        prevState => ([...prevState, {
                            name: name,
                            doc_id: doc_id,
                            preview: URL.createObjectURL(file),
                            file: file,
                            existFile: storage_url ? storage_url : '',
                            status: status
                        }]))*/

                } else toast.error('حجم فایل وارد شده زیاد است. (حداکثر 2 مگابایت)')

            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    const handleLoading = ({doc_id, loading, status, preview, existFile}: any) => {
        const newInputFields = userDoc.map((field: any) => {
            if (field.doc_id === doc_id) {
                return {
                    ...field,
                    loading: loading,
                    status: status,
                    preview: preview,
                    existFile: existFile
                };
            }
            return field;
        });
        setUserDoc(newInputFields);
    }

    const handleSendImage = async (e: any, item: any) => {
        e.stopPropagation()

        handleLoading({doc_id: item.doc_id, loading: true, status: item.status, preview: item.preview})


        const formData = new FormData()
        formData.append('user_id', String(user.id))
        formData.append('document_id', item.doc_id)
        formData.append('file', item.file)

        await axios.post(AUTH_URL + 'users/documents', formData)
            .then((res) => {
                if (res.data.status) {
                    handleLoading({
                        doc_id: item.doc_id,
                        loading: true,
                        status: res.data.data.status,
                        preview: '',
                        existFile: res.data.data.storage_url
                    })
                }
            })
            .catch(e => {
                // console.log(e)
            })

        // handleLoading({doc_id: item.doc_id, loading: false})
    }


    const ImportDoc = ({item, index}: any) => (
        <div onClick={() => {
            if (item.status !== 'accepted') inputClickRefs[index].current.click()
        }}
             className={`relative flex flex-col gap-y-6 xl:flex-row items-center bg-white p-6 pb-16   ${item.status !== 'accepted' && (!item.preview && 'hover:bg-black/5 cursor-pointer')}`}>
            <div className={'flex-grow flex flex-col gap-y-3'}>
                <span className={'font-bold'}>{item.persian_name}</span>
                <span className={'text-sm'}>{item.description}</span>

            </div>
            <div
                className={' border border-dashed w-[200px] min-w-[200px] min-h-[107px] h-[107px] flex items-center justify-center'}>
                {item.preview ?
                    <>
                        <Image
                            className={'w-full h-full object-cover'}
                            src={item.preview}
                            alt={item.name} width={143} height={107}/>
                        {/*<div className={'m-auto flex flex-col items-center gap-y-3 rounded-[4px]'}>*/}
                        {/*    <UploadIcon width={24} height={24}/>*/}
                        {/*    بارگزاری تصویر*/}
                        {/*</div>*/}
                    </>
                    :
                    item.existFile ?
                        <Image
                            className={'w-full h-full object-cover'}
                            src={item.existFile}
                            alt={item.name} width={143} height={107}/>
                        :
                        <UploadIcon/>
                    /* <UploadIcon width={24} height={24}/>*/
                }
            </div>
            <input
                ref={inputClickRefs[index]}
                onChange={(e) => handleChangeImage(item.name, item.doc_id, item.storage_url, item.status, e)}
                className={'hidden'}
                type="file"/>

            <div className={'w-full flex items-center gap-x-1 px-3 absolute left-0 bottom-3'}>
                {(item.preview) ?
                    <div
                        className={'w-full h-[42px] flex items-center justify-between cursor-pointer pr-3  border border-dashed hover:bg-black/5'}
                        onClick={(e) => handleSendImage(e, item)}>
                        {item.loading ? <span className={'mx-auto'}><DotLoading/></span> : <>
                            <span>بارگذاری مدرک انتخاب شده</span>
                            <div
                                className={'flex items-center gap-x-1  font-bold bg-primary h-full px-3'}>
                                {`بارگذاری`}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"
                                     viewBox="0 0 256 256">
                                    <g fill="currentColor">
                                        <path d="M112 56v144l-72-72Z" opacity="0.2"/>
                                        <path
                                            d="M216 120h-96V56a8 8 0 0 0-13.66-5.66l-72 72a8 8 0 0 0 0 11.32l72 72A8 8 0 0 0 120 200v-64h96a8 8 0 0 0 0-16m-112 60.69L51.31 128L104 75.31Z"/>
                                    </g>
                                </svg>
                            </div>
                        </>
                        }
                    </div>
                    :
                    STATUS_TYPE.map((val) => (
                        item.status === val.status &&
                        <div key={index} style={{color: val.color, backgroundColor: val.bgColor}}
                             className={`w-full flex items-center gap-x-1 py-1 px-3`}>
                            {val.icon}
                            <span>{val.name}</span>
                        </div>
                    ))
                }
                {/*<span>{item.status === 'pending' && STATUS_TYPE[0].icon}</span>*/}
                {/*<span>{item.status === 'accepted' && STATUS_TYPE[2].icon}</span>*/}
                {/*<FailedUploadIcon/>*/}
                {/*<span className={'text-red-600'}>بارگزاری تصویر با خطا مواجه شد.</span>*/}
            </div>
        </div>)

    return (
        <div className={'flex flex-col gap-y-6 '}>
            {loading ? <div className={'w-full h-[20vh] flex items-center justify-center'}>Loading</div> :
                <div className={'grid sm:grid-cols-2 gap-3'}>
                    {userDoc.map((item: any, index: number) => (
                        <ImportDoc key={index} item={item} index={index}/>
                    ))
                    }
                    {/*<button onClick={() => console.log(userDoc)}*/}
                    {/*        className={'bg-primary mt-auto mr-auto h-[50px] w-[100px] sm:col-start-2'}>ارسال مدارک*/}
                    {/*</button>*/}
                </div>

            }
        </div>
    );
};
const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256"
         fill="currentColor">
        <g>
            <path d="M232 136v64a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity="0.2"/>
            <path
                d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h48a8 8 0 0 1 0 16H32v64h192v-64h-48a8 8 0 0 1 0-16h48a16 16 0 0 1 16 16M85.66 77.66L120 43.31V128a8 8 0 0 0 16 0V43.31l34.34 34.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32M200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"/>
        </g>
    </svg>
)

export default UserDocument;