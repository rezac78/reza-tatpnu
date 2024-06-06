'use client'

import React, {useState} from 'react';
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {gradeList, validatePhoneNumber} from "@/lib/utils";
import ButtonLoading from "@/components/ui/buttonLoading";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import Image from "next/image";

const ShortTermCoursesForm: React.FC = () => {

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [mobileOrEmail, setMobileOrEmail] = useState('')
    const [grade_education, setGradeEducation] = useState('');
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append('fullname', name)
        formData.append('information', mobileOrEmail)
        formData.append('page', 'shortTermCourses')
        formData.append('grade_education', grade_education);
        if (!name) toast.error('ابتدا نام خود را وارد کنید')
        if (!grade_education) toast.error('  مقطع تحصیلی خود را وارد کنید')
        if (!validatePhoneNumber(mobileOrEmail)) toast.error('شماره ی وارد شده اشتباه است')
        else {
            const res = await axios.post('support', formData);
            const data = await res.data
            if (data.status) {
                toast.success('درخواست شما با موفقیت ثبت شد')
                setName('')
                setMobileOrEmail('')
                setGradeEducation('')
            }
        }
        setLoading(false)
    };
    return (
        <div className={'relative w-full flex flex-col md:flex-row items-center gap-x-20 px-9 md:px-36 py-20'}>
            <Image
                width={1920}
                height={1080}
                className={'w-full h-full hidden lg:block xl:h-[unset] object-cover absolute left-0 top-0'}
                src={'/images/pages/shortTerm/fourth-section.avif'} alt={'fourthSection'}/>
            <Image
                width={1920}
                height={1080}
                className={'w-full h-full lg:hidden lg:h-[unset] object-cover absolute left-0 top-0 -z-1 '}
                src={'/images/pages/shortTerm/fourth-section-responsive.avif'} alt={'fourthSectionResponsive'}/>
            <div className={'z-10 text-white'}>
                <div className={'md:w-1/2 flex items-center gap-x-1'}>
                    <span className={'w-9 h-1 rounded-full bg-primary'}></span>
                    <span className={'text-3xl '}>درخواست مشاوره</span>
                </div>
                <span className={'text-normal'}>از این طریق میتوانید به صورت رایگان از مشاوره های تخصصی در حوزه ارتقای مدارک تحصیلی، و مهارتی بهره مند شوید.</span>
            </div>
            <form onSubmit={handleSubmit} className={'z-10 w-full mt-6 md:mt-0  md:w-1/2 space-y-3'}>
                <Input placeholder={'نام و نام خانوادگی (فارسی)'}
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <Input placeholder={'شماره تلفن همراه'}
                       value={mobileOrEmail}
                       onChange={(e) => setMobileOrEmail(e.target.value)}
                />
                <Select
                    value={grade_education}
                    onValueChange={(e) => setGradeEducation(e)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="مقطع تحصیلی فعلی"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                gradeList.map((item, i) => (
                                    <SelectItem key={i} value={item.value}>{item.name}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <ButtonLoading loading={loading} type="submit">
                    ثبت درخواست
                </ButtonLoading>
            </form>
        </div>
    );
};

export default ShortTermCoursesForm;


