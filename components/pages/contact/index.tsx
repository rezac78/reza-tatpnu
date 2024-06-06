"use client";

import React, {useState} from "react";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import {validatePhoneNumber} from "@/lib/utils";
import ButtonLoading from "@/components/ui/buttonLoading";
import {Input} from "@/components/ui/input";

const ContactPage = ({}) => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [mobileOrEmail, setMobileOrEmail] = useState('')
    const [description, setDescription] = useState('')
    // const [grade_education, setGradeEducation] = useState('');
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append('fullname', name)
        formData.append('information', mobileOrEmail)
        formData.append('description', description)
        formData.append('page', 'contactUs')
        // formData.append('grade_education', grade_education);
        if (!name) toast.error('ابتدا نام خود را وارد کنید')
        else if (!validatePhoneNumber(mobileOrEmail)) toast.error('شماره ی وارد شده اشتباه است')
        // else if (!grade_education) toast.error('  مقطع تحصیلی خود را وارد کنید')

        else {
            const res = await axios.post('support', formData);
            const data = await res.data
            if (data.status) {
                toast.success('درخواست شما با موفقیت ثبت شد')
                setName('')
                setMobileOrEmail('')
                setDescription('')
            }
        }
        setLoading(false)
    };
    return (
        <div className="flex flex-col relative">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div
                className="
                    flex items-center justify-center
                    bg-cover bg-center bg-no-repeat [background-image:url('/images/contact/contactPage.jpg')]
                    p-5">
                <div className="pb-8 pt-4 px-4 bg-white shadow-lg z-10 my-16 w-[90vw] lg:w-[50vw] leading-tight">
                    <h4 className=" sm:text-normal font-semibold text-center mb-5">
                        جهت ارتباط با ما فرم زیر را پر کنید تا{" "}
                        <span
                            className="text-primary">
                  مشاورین
                </span>{" "}
                        باشما تماس بگیرند
                    </h4>
                    <form className="space-y-4 relative" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input
                                type="text"
                                name="name"
                                placeholder="نام و نام خانوادگی"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                type="text"
                                name="email"
                                placeholder="شماره تلفن"
                                value={mobileOrEmail}
                                onChange={(e) => setMobileOrEmail(e.target.value)}
                            />
                        </div>

                        <textarea
                            name="message"
                            rows={6}
                            placeholder="توضیحات"
                            className="w-full p-3 border border-gray-300/50 rounded resize-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <ButtonLoading
                            loading={loading}
                            type="submit"
                            className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[120px]">
                            ثبت درخواست
                        </ButtonLoading>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
