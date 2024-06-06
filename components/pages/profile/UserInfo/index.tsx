"use client";
import React, {useEffect, useRef, useState} from "react";
import {useAuthContext} from "@/context/auth/hooks";
import axios from "@/lib/axios";
import {AUTH_URL} from "@/config-global";
import toast from "react-hot-toast";
import ButtonLoading from "@/components/ui/buttonLoading";
import {Input} from "@/components/ui/input";
import {SpinnerLoading} from "@/components/common/Loading";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";


const UserInfo = () => {
    const [sendLoading, setSendLoading] = useState(false);
    const [userAttribute, setUserAttribute] = useState<any>([]);
    const {user, loading, updateUser}: any = useAuthContext();
    const ref = useRef(true);

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");

    const CreateUserAttribute = () => {
        user.user_attributes?.map((item: any) => {
            const newItem: any = {
                id: item.attribute.id,
                value: item.value ? item.value : "",
                persian_name: item.attribute.persian_name,
                name: item.attribute.name,
                type: item.attribute.type,
                priority: item.attribute.priority,
            };
            if (item.attribute.has_option) {
                newItem["options"] = [...item.attribute.options];
            }
            setUserAttribute((prevState: any) => [...prevState, newItem]);
            setFirst_name(user.first_name);
            setLast_name(user.last_name);
        });
    };
    useEffect(() => {
        if (ref.current) {
            ref.current = false;
            CreateUserAttribute();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputChange = (id: any, event: any) => {
        const newInputFields = userAttribute.map((field: any) => {
            if (field.id === id) {
                return {...field, value: event.target.value};
            }
            return field;
        });
        setUserAttribute(newInputFields);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSendLoading(true);
        // console.log(userAttribute)
        const data: any = [];
        userAttribute.map((item: any) => {
            if (item.value) {
                data.push({id: item.id, value: item.value});
            } else {
                // toast.error(`ابتدا ${item.persian_name} را وارد کنید`)
                // return
            }
        });
        try {
            const obj: any = {
                attributes: data,
            };
            if (first_name) {
                obj["first_name"] = first_name;
            }

            if (first_name) {
                obj["last_name"] = last_name;
            }
            const res = await axios.put(AUTH_URL + "users/edit", obj);
            toast.success(res.data.message);
            updateUser();
        } catch (e) {
            // console.log(e)
        }
        setSendLoading(false);
    };
    const divInput = "flex flex-col gap-y-2";
    const inputStyle =
        "py-3 pr-2 bg-[#F2F2F2] border border-[#E6E6E6] outline-[#E6E6E6]";
    return (
        <form
            onSubmit={handleSubmit}
            className={"grid sm:grid-cols-2 gap-y-3 gap-x-3 bg-white pt-3 pb-6 px-6"}
        >
            {loading ? (
                <div className={"h-[20vh] flex items-center justify-center col-span-2"}>
                    <SpinnerLoading/>
                </div>
            ) : (
                <>
                    <div className={divInput}>
                        <span>نام</span>
                        <Input
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            type="text"
                            placeholder={"نام"}
                        />
                    </div>
                    <div className={divInput}>
                        <span>نام خانوادگی</span>
                        <Input
                            value={last_name}
                            onChange={(e) => setLast_name(e.target.value)}
                            type="text"
                            placeholder={"نام خانوادگی"}
                        />
                    </div>
                    {userAttribute
                        .sort((a: any, b: any) => a.priority - b.priority)
                        .map((item: any, index: number) => (
                            <div key={index} className={divInput}>
                                <span>{item.persian_name}</span>
                                {item.options ? (
                                    <Select
                                        value={item.value}
                                        onValueChange={(e) => {
                                            // handleInputChange(item.id, e)
                                            const newInputFields = userAttribute.map((field: any) => {
                                                if (field.id === item.id) {
                                                    return {...field, value: e};
                                                }
                                                return field;
                                            });
                                            setUserAttribute(newInputFields);
                                        }}

                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="آخرین مدرک تحصیلی"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {item.options.map((opt: any, opt_index: number) => (
                                                <SelectItem key={opt_index} value={opt}>
                                                    {opt}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    // <select
                                    //     className={`flex h-12 w-full rounded-md border border-input focus-visible:ring-primary/50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                                    //     value={item.value}
                                    //     onChange={(e) => handleInputChange(item.id, e)}
                                    // >
                                    //     {item.options.map((opt: any, opt_index: number) => (
                                    //         <option key={opt_index} value={opt}>
                                    //             {opt}
                                    //         </option>
                                    //     ))}
                                    // </select>
                                ) : (
                                    <Input
                                        value={item.value}
                                        onChange={(e) => handleInputChange(item.id, e)}
                                        type="text"
                                        placeholder={item.persian_name}
                                    />
                                )}
                            </div>
                        ))}
                    <ButtonLoading
                        className={"w-[120px] mr-auto mt-auto"}
                        loading={sendLoading}>
                        ثبت
                    </ButtonLoading>
                </>
            )}
        </form>
    );
};

export default UserInfo;
