"use client"

import React, {useState} from 'react';
import {GuestGuard} from "@/context/auth/guard";
import Logo from "@/components/common/Logo";
import {LoginErrors, LoginTitles, validatePhoneNumber} from "@/lib/utils";
import {useAuthContext} from "@/context/auth/hooks";
import {Input} from "@/components/ui/input";
import ButtonLoading from "@/components/ui/buttonLoading";
import {AuthAxiosComponent} from "@/lib/AuthAxiosComponent";
import {EditIcon} from "lucide-react";
import {useLoginModalContext} from "@/context/loginModal";

const LoginLayout = () => {
    const {register, loginPass, loginCode, resetPass}: any = useAuthContext();
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(0)
    const {loginModal, setLoginModal}: any = useLoginModalContext()
    // step === 0 ==> check user existence
    // step === 1 ==> confirm temp code and set new pass
    // step === 2 ==> the exist user with password
    // step === 3 ==> reset the user password with code
    // step === 4 ==> the exist user with temp code

    const [infos, setInfos] = useState({
        "phone_number": "",
        "password": "",
        "name": "",
        "code": "",
        "existCode": "",
        "resetCode": "",
        "newPassword": "",
    })
    const [infosErr, setInfosErr] = useState({
        "phone_number": "",
        "password": "",
        "name": "",
        "code": "",
        "existCode": "",
        "resetCode": "",
        "newPassword": "",
    })


    const setInfoValueFunc = (name: string, e: any) => {
        const value = e.target.value
        setInfos(prevState => ({...prevState, [name]: value}))
        clearInfoValueErrFunc(name)
    }

    const setInfoValueErrFunc = (name: string) => {
        const {value}: any = LoginErrors.find(val => val.name === name);

        setInfosErr(prevState => ({...prevState, [name]: value}))
    }

    const clearInfoValueErrFunc = (name: string) => {
        setInfosErr(prevState => ({...prevState, [name]: ''}))
    }

    const handleCheckPhoneNumber = async () => {
        const infosFormData = new FormData()
        if (!validatePhoneNumber(infos.phone_number)) {
            // toast.error('شماره وارد شده اشتباه است')
            setInfoValueErrFunc('phone_number')
        } else {

            infosFormData.append("phone_number", infos.phone_number)
            let is_created = false
            // sending phone_number for checking the user status
            await AuthAxiosComponent({
                method: 'post',
                url: 'account/check',
                data: infosFormData,
                callback: (res) => {
                    is_created = res.is_created
                }
            })
            // console.log(is_created)
            if (is_created) {
                // receiving the password from the user
                setStep(2)
            } else {
                let notConfirmed = false
                // sending the temp code to the user
                await AuthAxiosComponent({
                    method: 'post', url: 'account/not-confirmed', data: infosFormData,
                    callback: (res) => {
                        // console.log('account/not-confirmed',res)
                        notConfirmed = res
                    }
                })
                if (notConfirmed) {
                    // toast.success('کد تایید برای شما ارسال شد')
                    setStep(1)
                }
            }


        }
    }

    const handleSendTempCode = async () => {
        const fData = new FormData()
        fData.append("phone_number", infos.phone_number)
        // sending the temp code to the user
        await AuthAxiosComponent({
            method: 'post', url: 'account/not-confirmed', data: fData,
            callback: (res) => {
                setStep(4)
            }
        })
    }

    const handleForgotPassword = async () => {
        const fData = new FormData()
        fData.append("phone_number", infos.phone_number)

        await AuthAxiosComponent({
            method: 'post', url: 'account/password/forgot', data: fData,
            callback: (res) => {
                if (res) setStep(3)
            }
        })
    }

    const handleRegisterUser = async () => {
        const infosFormData = new FormData()
        // confirm the code and create the user (set the new password)
        if (!infos.code) setInfoValueErrFunc('code')
        else if (!infos.password) setInfoValueErrFunc('password')
        else {

            infosFormData.append("phone_number", infos.phone_number)
            infosFormData.append("first_name", infos.name ? infos.name : 'کاربر همراهان')
            infosFormData.append("code", infos.code)

            // If confirm code is true then create the user
            await register(infos)
            setLoginModal(false)

        }
    }

    const handleLoginUser = async () => {
        if (!infos.password) setInfoValueErrFunc('password')
        else {
            // receiving the password from the user
            await loginPass?.(infos.phone_number, infos.password);

            // router.push(returnTo || '/profile');
            setLoginModal(false)
        }
    }
    const handleResetPass = async () => {
        if (!infos.resetCode) setInfoValueErrFunc('resetCode')
        else if (!infos.newPassword) setInfoValueErrFunc('newPassword')
        else {
            // receiving the password from the user
            await resetPass?.(infos.resetCode, infos.newPassword);

            // router.push(returnTo || '/profile');
            setLoginModal(false)

        }
    }
    const handleLoginCode = async () => {
        if (!infos.existCode) setInfoValueErrFunc('existCode')
        else {
            await loginCode?.(infos.phone_number, infos.existCode);
            setLoginModal(false)

            setInfoValueErrFunc('resetCode')
            setInfoValueErrFunc('newPassword')
        }
    }

    const handleSubmitBtn = async (e: any) => {
        e.preventDefault();
        // setStep(step+1)
        // console.log(step)

        setLoading(true)

        if (step === 0) await handleCheckPhoneNumber()
        else if (step === 1) await handleRegisterUser()
        else if (step === 2) await handleLoginUser()
        else if (step === 3) await handleResetPass()
        else if (step === 4) await handleLoginCode()

        setLoading(false)
    }


    return (
        <GuestGuard>
            <div
                onClick={(e) => e.stopPropagation()}
                className={'flex w-full h-fit bg-white shadow-[2px_0px_10px_rgba(0,0,0,0.25)] mt-auto rounded-md sm:w-[400px] sm:h-[450px] sm:p-6 sm:m-auto '}>
                <form onSubmit={handleSubmitBtn}
                      className={'flex flex-col gap-y-10 py-9 px-6 sm:p-0 w-full h-full'}>
                    <div className={'mx-auto flex flex-col items-center text-primary font-bold'}>
                        <Logo/>
                    </div>
                    <div className={'space-y-3 sm:my-auto'}>
                        {/*<div className={'bg-pink-700 text-white'}>Step === {step}</div>*/}
                        <div className={'font-bold flex items-center'}>
                            <span onClick={() => setStep(0)}>{LoginTitles[step]}</span>
                            {step === 2 &&
                                <span
                                    onClick={() => setStep(0)}
                                    className={'cursor-pointer text-link text-sm flex items-center '}>
                                    <EditIcon/>(ویرایش شماره)
                                </span>
                            }
                        </div>

                        {step === 0 && (
                            <Input
                                label="شماره تلفن"
                                type="number"
                                autoFocus
                                value={infos.phone_number}
                                onChange={(e) => setInfoValueFunc('phone_number', e)}
                                placeholder={'شماره تلفن خود را وارد کنید'}
                                msgType={'error'}
                                message={infosErr.phone_number}
                            />
                        )}
                        {step === 1 &&
                            <div className={'space-y-3'}>
                        <span className={'text-sm mb-2 flex items-center whitespace-nowrap'}>
                            کد تایید برای شماره
                            <span
                                className={' font-digit text-normal'}>
                                {infos.phone_number}
                            </span>
                            پیامک شد.
                            <span className={'cursor-pointer font-bold text-link flex items-center text-sm '}
                                  onClick={() => setStep(0)}>
                                <EditIcon/>
                                ویرایش شماره
                        </span>
                        </span>
                                <span className={'text-sm flex items-center'}><span
                                    className={'text-red-600 font-bold text-normal'}>!</span> کد ارسالی و رمز عبور جدید برای <span
                                    className={' px-1 font-bold'}>ایجاد حساب</span> خود را وارد کنید</span>
                                <Input
                                    type="number"
                                    autoFocus
                                    value={infos.code}
                                    onChange={(e) => setInfoValueFunc('code', e)}
                                    placeholder={'کد تایید'}
                                    msgType={'error'}
                                    message={infosErr.code}
                                />

                                <Input
                                    autoFocus
                                    type="password"
                                    value={infos.password}
                                    onChange={(e) => setInfoValueFunc('password', e)}
                                    placeholder={'رمز عبور جدید'}
                                    className={'font-digit'}
                                    msgType={'error'}
                                    message={infosErr.password}
                                />
                            </div>
                        }
                        {step === 2 &&
                            <>
                                <Input
                                    autoFocus
                                    type="password"
                                    value={infos.password}
                                    onChange={(e) => setInfoValueFunc('password', e)}
                                    placeholder={'رمز عبور'}
                                    className={'font-digit'}
                                    msgType={'error'}
                                    message={infosErr.password}
                                />

                                <div className={'text-sm text-link mt-4 flex flex-col items-start gap-y-3'}>
                            <span className={'cursor-pointer'} onClick={handleSendTempCode}>{`ورود با رمز یکبار مصرف >`}
                            </span>
                                    <span className={'cursor-pointer'}
                                          onClick={handleForgotPassword}>{`فراموشی رمز عبور >`}
                            </span>
                                </div>
                            </>
                        }
                        {step === 3 &&
                            <div className={'space-y-3'}>
                            <span
                                className={'text-sm'}>برای تغییر رمز عبور،کد ارسال شده به شماره <span
                                className={'font-digit text-normal'}>{infos.phone_number}</span>  را وارد کنید</span>
                                <Input
                                    autoFocus
                                    value={infos.resetCode}
                                    onChange={(e) => setInfoValueFunc('resetCode', e)}
                                    placeholder={'کد تایید'}
                                    msgType={'error'}
                                    message={infosErr.resetCode}
                                />
                                <Input
                                    value={infos.newPassword}
                                    onChange={(e) => setInfoValueFunc('newPassword', e)}
                                    placeholder={'رمز عبور جدید'}
                                    msgType={'error'}
                                    message={infosErr.newPassword}
                                />

                            </div>
                        }
                        {
                            step === 4 &&
                            <>
                        <span className={'text-sm  flex items-center'}>کد تایید برای شماره <span
                            className={'font-bold font-digit text-md'}>{infos.phone_number}</span> پیامک شد. <span
                            className={'font-bold cursor-pointer flex text-link'} onClick={() => setStep(0)}>
                            <EditIcon/>(ویرایش شماره)
                        </span>
                        </span>
                                <Input
                                    autoFocus
                                    type={'number'}
                                    value={infos.existCode}
                                    onChange={(e) => setInfoValueFunc('existCode', e)}
                                    placeholder={'کد تایید'}
                                    msgType={'error'}
                                    message={infosErr.existCode}
                                />
                            </>
                        }

                    </div>
                    <ButtonLoading type='submit'

                                   loading={loading}>
                        {step === 0 ? 'ورود' : 'تایید'}
                    </ButtonLoading>
                </form>
            </div>
        </GuestGuard>
    );
};

export default LoginLayout;