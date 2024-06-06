'use client'
import React from 'react';

interface Props {
    handleModal: any
    ModalOpen: any
}

const RobotRightSection: React.FC<Props> = ({handleModal, ModalOpen}) => {
    return (
        <div
            // ${ModalOpen ? ' md:translate-x-20 hidden sm:block ' : 'md:translate-y-20'}
            className={`my-auto`}>
            {/*<div className={`sm:hidden w-full`}>*/}
            {/*    <div className="relative bg-[#E0E0E0] text-right flex justify-between px-4 sm:px-5">*/}
            {/*        <div className="z-20 py-5">*/}
            {/*            <h2 className="text-black text-normal md:text-base lg:text-lg my-0 lg:my-1">سلام، من هوشی نور*/}
            {/*                هستم.</h2>*/}
            {/*            <p className="text-gray-500 text-sm sm:text-normal">در قسمت پایین دستیار شخصی شما برای ارائه*/}
            {/*                پیشنهادات قرار دارد.</p>*/}
            {/*        </div>*/}
            {/*        <div className="-mt-2">*/}
            {/*            <Image src="/images/robot/robot-image.png" width={'150'}*/}
            {/*                   height={'150'} alt="robot"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={`px-4 md:px-0 `}>
                <div>
                    <div>
                        <h1 className="text-[32px] font-semibold italic leading-[50px] text-[#E6B945] ">هوشی
                            نور</h1>
                    </div>
                    <div className={``}>
                        <p className="mb-4 pr-5 sm:pr-0 text-[20px] italic font-semibold leading-[36px] lg:leading-[50px]">
                            بهترین و موثر ترین پیشنهادات توسعه فردی با مشاوره&nbsp;
                            <span className="text-highlight text-[#005E85]">هوش مصنوعی</span>
                        </p>
                    </div>
                    <div className={` mb-8`}>
                        <p className="pr-5 sm:pr-0 text-normal font-normal leading-[20px] lg:leading-[36px] ">
                            لطفا برای دریافت نتیجه ربات هوشی‌نور در رابطه با دوره مناسب شما، اطلاعات مورد نیاز ربات را وارد کنید.
                        </p>
                    </div>
                </div>
                {/*{!ModalOpen &&*/}
                {/*<div*/}
                {/*    className={`flex justify-center sm:justify-end ${!ModalOpen && 'mb-32'} sm:mt-10 lg:w-[550px] m-auto z-10`}>*/}
                {/*    <Button onClick={handleModal} className='w-fit px-9'>*/}
                {/*        {ModalOpen ? 'پایان' : 'شروع'}*/}
                {/*    </Button>*/}
                {/*</div>*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default RobotRightSection;