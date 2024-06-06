"use client";

import React, {useState} from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import {currentGradeList, gradeList, validatePhoneNumber} from "@/lib/utils";
import {BASE_URL} from "@/config-global";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import ButtonLoading from "@/components/ui/buttonLoading";

interface Props {
    pageName: string,
    type?: string,

    title: string;
    subTitle: string;
    linkTitle: string;
    slug: string;
    message: string;
}

const ConsultForm: React.FC<Props> = ({
                                          pageName,
                                          type,
                                          title,
                                          subTitle,
                                          linkTitle,
                                          message,
                                          slug,
                                      }) => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [mobileOrEmail, setMobileOrEmail] = useState("");
    const [grade_education, setGradeEducation] = useState("");
    const [last_level_request, setLastLevelRequest] = useState("");

    const handleClickSend = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("fullname", name);
        formData.append("information", mobileOrEmail);
        formData.append("page", pageName);
        formData.append("grade_education", grade_education);
        {
            type === "university" &&
            formData.append("last_level_request", last_level_request);
        }
        e.preventDefault();
        if (!name) toast.error("ابتدا نام خود را وارد کنید");
        if (!grade_education) toast.error("  مقطع تحصیلی خود را وارد کنید");
        if (!validatePhoneNumber(mobileOrEmail))
            toast.error("شماره ی وارد شده اشتباه است");
        else {
            const res = await fetch(BASE_URL + "support", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (data.status) {
                toast.success("درخواست شما با موفقیت ثبت شد");
                setName("");
                setMobileOrEmail("");
                setGradeEducation("");
            }
        }
        setLoading(false);
    };
    return (
        <div className="relative flex flex-wrap bg-secondary  md:w-4/5 md:mx-auto pb-6 sm:pb-0 mb-3 md:mb-36">

            <div className="md:w-1/2 flex flex-col justify-center py-9 md:py-24 pr-9">
                <div className={"flex items-center gap-x-2"}>
                    <div className="w-8 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-white text-3xl ">{title}</span>
                </div>
                <div className="text-white">{subTitle}</div>
            </div>

            <form
                onSubmit={handleClickSend}
                className="w-full md:w-1/2 md:absolute left-9 md:left-0 top-9 mx-6 md:max-w-sm bg-white flex flex-col gap-y-3 p-3 shadow">
                <Input
                    placeholder={"نام و نام خانوادگی (فارسی)"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder={"شماره تلفن همراه"}
                    value={mobileOrEmail}
                    onChange={(e) => setMobileOrEmail(e.target.value)}
                />
                <Select
                    value={grade_education}
                    onValueChange={(e) => {
                        // console.log(e)
                        setGradeEducation(e)
                    }}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="مقطع تحصیلی فعلی"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>مقطع تحصیلی فعلی</SelectLabel>
                            {gradeList.map((item, index) => (
                                <SelectItem key={index} value={item.value}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {type === "university" && (
                    <Select
                        value={last_level_request}
                        onValueChange={(e) => setLastLevelRequest(e)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="مقطع تحصیلی درخواستی"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>مقطع تحصیلی درخواستی</SelectLabel>
                                {currentGradeList.map((item, index) => (
                                    <SelectItem key={index} value={item.value}>
                                        {item.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
                <span className="text-sm text-center mt-2">{message}</span>
                <ButtonLoading type="submit" loading={loading} className="mt-3">{linkTitle}</ButtonLoading>
            </form>
        </div>
    );
};

export default ConsultForm;