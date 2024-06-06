import React from 'react';

const SubSectionTitle:React.FC<any> = ({title,className=''}) => {
    return (
            <span className={'pr-6 pt-6 text-[20px] font-bold '+ className }>{title}</span>
    );
};

export default SubSectionTitle;