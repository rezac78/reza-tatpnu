'use client'
import React, {useState} from "react";
import {Button} from "@/components/ui/button";

export default function ConfirmModal({id, title, icon, header, body, onClick}: any) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button
                variant="ghost"
                onClick={(e) => {
                    e.stopPropagation()
                    setShowModal(true)
                }}
            >
                {title ? title : ''}
                {icon ? icon : icon}
            </Button>
            {showModal ? (
                <>
                    <div onClick={() => setShowModal(false)}
                         className="flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-[1002] outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl" onClick={(e) => e.stopPropagation()}>
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid ">
                                    <h3>
                                        {header}
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-5 flex-auto my-4 text-blueGray-500 text-lg leading-relaxed">
                                    {body}
                                </div>
                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end gap-x-3 p-5 border-t border-solid ">
                                    <Button
                                        className={'w-fit bg-transparent hover:bg-error/10 text-error border border-error'}

                                        onClick={() => setShowModal(false)}>
                                        بستن
                                    </Button>
                                    <Button
                                        className={'w-fit'}
                                        onClick={() => {
                                            onClick({id})
                                            setShowModal(false)
                                        }}>
                                        تایید
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-[1001] bg-black"></div>
                </>
            ) : null}
        </>
    );
}