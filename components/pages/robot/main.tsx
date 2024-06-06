'use client'
import React, {useState} from 'react';
import RobotRightSection from "@/components/pages/robot/RobotRightSection";
import RobotLeftSection from "@/components/pages/robot/AIPromptChat";

const RobotMainSection = () => {
    const [isOpen, setIsOpen] = useState(true);
    const openModal = () => setIsOpen(!isOpen);
    return (
        <div className={` w-full flex items-center justify-center lg:px-2  z-10`}>
            <div className={'relative flex flex-col  lg:flex-row gap-x-3 sm:mt-16 '}>
                <RobotRightSection handleModal={openModal} ModalOpen={isOpen}/>
                <RobotLeftSection isOpen={isOpen}/>
            </div>
        </div>
    );
};

export default RobotMainSection;