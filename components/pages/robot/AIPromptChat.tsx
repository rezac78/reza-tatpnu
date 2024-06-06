'use client'
import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {validatePhoneNumber} from "@/lib/utils";
import Image from "next/image";
import {useFocus} from "@/lib/hooks";
import {HOOSH_AI_URL} from "@/config-global";
import {DotLoading} from "@/components/common/Loading";
import {Input} from "@/components/ui/input";

interface Props {
    isOpen: any
}

const RobotLeftSection: React.FC<Props> = ({isOpen}) => {

    const [submitLoading, setSubmitLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [inputType, setInputType] = useState<any>('number');
    const [inputRef, setInputRef] = useFocus()
    const messageEl = useRef<any>(null);
    const [formId, setFormId] = useState('');
    const [error, setError] = useState('');
    const [answer, setAnswer] = useState('');
    const [step, setStep] = useState(1)
    const [conversation, setConversion] = useState<any>([])
    const [answers, setAnswers] = useState<any>([])
    const [questions, setQuestions] = useState<any>([])
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setConversion([...conversation, {'question': 'شماره موبایل خود را وارد کنید'}])
                setLoading(false)
                setInputRef(true)
            }, 1500)
        } else {
            setFormId('')
            setError('')
            setAnswer('')
            setStep(1)
            setConversion([])
            setAnswers([])
            setQuestions([])
        }
    }, [isOpen]);
    // scroll to the end of the chat list after each chat
    useEffect(() => {
        if (conversation.length) {
            messageEl.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [conversation.length]);

    // adding each question and sending api to get question
    useEffect(() => {
        if (step === 2) {
            setTimeout(() => {
                setConversion([...conversation, {'question': 'لطفا نام و نام‌خانوادگی خود را وارد کنید'}])
                setInputType('text')
            }, 1000)
        }
        if (step === 3) {
            const Apis = async () => {
                const formsPost = await axios.post(HOOSH_AI_URL + 'forms', {
                    phone_number: answers.phone_number,
                    'username': answers.username
                })
                    .then(({data}) => {
                        if (data.status) {
                            setFormId(data.data._id)
                            const listQuestionGet = async () => {
                                await axios.get(HOOSH_AI_URL + 'forms/attributes')
                                    .then(({data: q}) => {
                                        if (q.status) {
                                            // console.log('getting the questions', q)
                                            setQuestions(q.data)
                                        }
                                    }).catch((e) => {
                                        // console.log(e)
                                    })
                            }
                            listQuestionGet()
                        }
                    })
                    .catch((e) => {
                        // console.log(e)
                    })
                setLoading(false)
                setInputRef(true)
            }
            Apis()
        } else if (step >= 4 && step <= questions.length + 2) {
            setConversion([...conversation, questions[step - 3]])
            if (questions[step - 3].type) {
                const type = questions[step - 3].type === 'Number' && 'number' || questions[step - 3].type === 'String' && 'text'
                setInputType(type)
            }
        } else {
            if (formId) {
                setInputRef(false)
                setSubmitLoading(true)
                const submitForm = async () => {
                    await axios.post(HOOSH_AI_URL + `forms/${formId}/submit`)
                        .then(({data}) => {
                            // console.log(data)
                            if (data.status) {
                                setConversion([...conversation, {'question': data.data}])
                            }

                        })
                        .catch(e => {
                            // console.log(e)
                        })
                    setSubmitLoading(false)
                }
                submitForm()
            }
        }
    }, [step]);

    useEffect(() => {
        if (questions.length !== 0) {
            if (step === 3) {
                setConversion([...conversation, questions[3 - 3]])
                if (questions[3 - 3].type) {
                    const type = questions[3 - 3].type === 'Number' && 'number' || questions[3 - 3].type === 'String' && 'text'
                    setInputType(type)
                }
            }
        }
    }, [questions]);

    const handleAnswer = async (e: any) => {
        e.preventDefault()
        if (!answer) setError('ابتدا مقدار درخواستی را وارد کنید')
        else if (step === 1 && !validatePhoneNumber(answer)) setError('شماره موبایل وارد شده اشتباه است')
        // else if (typeof answer === conversation[conversation.length - 1].type) setError('مقدار ورودی اشتباه است')
        else {
            if (step <= questions.length + 2) {

                setLoading(true)

                if (step === 1) {
                    setConversion([...conversation, {'question': answer}])
                    setAnswers((prevState: any) => ({...prevState, 'phone_number': answer}))
                    setTimeout(() => {
                        setLoading(false)
                        setInputRef(true)
                    }, 1000)

                    setLoading(true)
                    setAnswer('')
                    setStep(step + 1)

                } else if (step === 2) {
                    setConversion([...conversation, {'question': answer}])
                    setAnswers((prevState: any) => ({...prevState, 'username': answer}))
                    setTimeout(() => {
                        setLoading(false)
                        setInputRef(true)
                    }, 1000)

                    setLoading(true)
                    setAnswer('')
                    setStep(step + 1)

                }
                /*else if (step === 3) {
                    setConversion([...conversation, {'question': answer}])

                    await axios.post(HOOSH_AI_URL + 'form_attributes', {
                        "attribute_id": conversation[step + 1]._id,
                        "form_id": formId,
                        "value": answer
                    }).then(({data}) => {
                        console.log(data)
                        setLoading(false)
                        setAnswer('')
                        setStep(step + 1)

                    }).catch(e => {
                        console.log(e)
                    }).finally(() => {

                    })

                }*/
                else if (step >= 3) {
                    setConversion([...conversation, {'question': answer}])

                    await axios.post(HOOSH_AI_URL + 'form_attributes', {
                        "attribute_id": conversation[conversation.length - 1]._id,
                        "form_id": formId,
                        "value": answer
                    }).then(({data}) => {
                        // console.log(data)
                        if (step < conversation.length) setLoading(false)
                        setInputRef(true)
                        setAnswer('')
                        setStep(step + 1)
                    }).catch(e => {
                        // console.log(e)
                    }).finally(() => {

                    })

                }

            } else {


            }
        }


    }

    return (
        <div
            className={`${isOpen ? 'opacity-100 shadow-[0px_4px_45px_-12px_rgba(0,0,0,0.25)] max-w-screen md:w-[492px] h-[565px]' : 'w-0 h-0 -z-10 scale-0'} duration-1000 transition-all relative z-10`}>

            <div
                className={`${submitLoading ? 'scale-100' : 'scale-0'} transition-all duration-700 absolute top-0 bottom-0 right-0 left-0 bg-gray-500 bg-opacity-50 z-10 backdrop-blur-[2px] flex`}>
                <span className={'bg-white p-3 animate-bounce m-auto flex items-center gap-x-3 shadow-xl'}> ربات در حال تحلیل است، لطفا منتظر بمانید <DotLoading/></span>
            </div>
            <div className="bg-white w-full mx-auto flex flex-col h-full">
                <div
                    className="relative bg-[#E0E0E0] text-right px-4 pt-4 flex ">
                    <div>
                        <h2 className="text-black text-sm md:text-sm lg:text-lg my-0 lg:my-1">سلام،
                            من هوشی نور هستم.</h2>
                        <p className="text-gray-500 text-sm lg:text-base">در قسمت پایین
                            دستیار شخصی شما برای ارائه پیشنهادات قرار
                            دارد.</p>
                    </div>
                    <div className="-mt-2 mr-auto">
                        <Image src="/images/robot/robot-image.png" width={'150'}
                               height={'150'} alt="robot"/>
                    </div>
                </div>
                <ul
                    className="robotChatScrollBarStyle relative bg-white p-4 flex-grow overflow-y-auto font-digit text-sm  leading-tight">
                    {conversation.map((item: any, index: number) =>
                        index % 2 === 0 ?
                            (
                                <li key={index} className="flex items-center justify-end mb-4">
                                    <div className="relative flex flex-col items-start">
                                             <span
                                                 className="flex items-center bg-white border text-gray-800 pl-4 pr-3 py-3 relative">
                                                                                                {item.question}
                                                 <div
                                                     className="absolute w-4 h-4 bg-white border border-gray border-r-0 border-t-0 transform rotate-45 top-1/2 -translate-y-1/2 -left-2"></div>
                                                                                </span>
                                    </div>
                                    <Image src="/images/robot/RobotIcon.svg" alt="Admin"
                                           width={40} height={40}
                                           className="w-10 h-10 rounded-full mr-4"/>
                                </li>
                            ) :
                            <li key={index}
                                className="flex items-center justify-start mb-4">
                                <Image src="/images/robot/userIcon.svg" alt="User"
                                       width={40} height={40}
                                       className="w-10 h-10 rounded-full ml-3"/>
                                <div className="relative flex flex-col items-end"><span
                                    className="flex items-center bg-custom-yellow border text-black pl-3 pr-4 py-3 relative">
                                    <div
                                        className="absolute w-4 h-4 bg-custom-yellow border  border-gray border-l-0 border-b-0 transform rotate-45 -right-2 top-1/2 -translate-y-1/2"></div>
                                    {item.question}
                                </span>
                                </div>
                            </li>
                    )}
                    <li ref={messageEl}></li>
                </ul>

                <form onSubmit={handleAnswer} className={'w-full relative'}>

                    <div className="relative shadow-sm ">

                        {error && (
                            <div
                                className="absolute -top-9 w-full bg-red-500 text-white font-bold text-sm text-center animate-pulse py-2">
                                {error}!
                            </div>
                        )}
                        {loading && (
                            <div
                                className="bg-gray-200 bg-opacity-30 backdrop-blur absolute -top-6 w-full text-black font-bold text-xs text-right py-1 pr-3 flex items-center gap-x-4">
                                <span>ربات هوشی نور در حال تایپ کردن</span>
                                <DotLoading/>
                            </div>
                        )}
                        <Input
                            ref={inputRef}
                            name="answer"
                            autoComplete="off"
                            value={answer}
                            onChange={e => {
                                setAnswer(e.target.value)
                                setError('')
                            }}
                            type={inputType}
                            placeholder="اینجا تایپ کنید..."
                            className="!pr-16 mt-auto "
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45"
                                       fill="none">
                                <circle cx="22.5" cy="22.5" r="22.5" fill="#EEBF47"/>
                                <path
                                    d="M20.4605 14.2287L29.0205 18.5087C32.8605 20.4287 32.8605 23.5687 29.0205 25.4887L20.4605 29.7687C14.7005 32.6487 12.3505 30.2887 15.2305 24.5387L16.1005 22.8087C16.3205 22.3687 16.3205 21.6387 16.1005 21.1987L15.2305 19.4587C12.3505 13.7087 14.7105 11.3487 20.4605 14.2287Z"
                                    stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M16.4414 22H21.8414" stroke="white" strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>}
                        />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default RobotLeftSection;