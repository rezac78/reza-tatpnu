"use client"

import * as React from "react"

import {cn} from "@/lib/utils"
import ButtonLoading from "@/components/ui/buttonLoading";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    icon?: React.ReactNode,
    buttonName?: string,
    buttonClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void,
    buttonLoading?: boolean,
    msgType?: 'error' | 'info' | 'warning',
    message?: string
}
const OpenEyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
        <g fill="currentColor">
            <path
                d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                opacity="0.2"/>
            <path
                d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/>
        </g>
    </svg>
)
const CloseEyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
        <g fill="currentColor">
            <path
                d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                opacity="0.2"/>
            <path
                d="M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z"/>
        </g>
    </svg>
)
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({
         className, type
         , label
         , icon
         , buttonName, buttonClick, buttonLoading = false
         , msgType, message
         , ...props
     }, ref) => {

        const [open, setOpen] = React.useState(false)


        return (
            <div
                className={(label && "relative grid w-full gap-y-1.5")}>
                {label && <label>{label}</label>}

                <div className={" relative " + ''}>
                    <input
                        type={(type === 'password') ? (open ? 'text' : 'password') : type}
                        className={cn(
                            `flex h-12 w-full rounded-md border ${message ? 'border-error focus-visible:ring-error/50': 'border-input focus-visible:ring-primary/50'} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
                            type === 'number' && ' font-digit ',
                            className,

                            icon && 'pr-9',
                            buttonName && 'py-[23px] pl-[98px]',
                            type === 'password' && 'pl-9'
                        )}
                        ref={ref}
                        {...props}
                    />
                    {type === 'password' &&
                        <span className={'cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 text-primary'}
                              onClick={() => setOpen(!open)}>
                    {open ? <OpenEyeIcon/> : <CloseEyeIcon/>}
                </span>}
                    {buttonName &&
                        <ButtonLoading type={'button'} loading={buttonLoading}
                                       className={'absolute w-auto left-0 rounded-md top-1/2 -translate-y-1/2'}
                                       onClick={buttonClick}>
                            {buttonName}
                        </ButtonLoading>
                    }
                    {icon && <span className={'absolute right-2 top-1/2 -translate-y-1/2 '}>{icon}</span>}

                </div>
                {message ?
                    <div
                        className={` -bottom-6 text-xs px-1 py-1 
                            ${msgType === 'error' && 'text-error'}
                            `}>
                        {message}
                    </div>
                    : null
                }

            </div>

        )
    }
)
Input.displayName = "Input"

export {Input}
