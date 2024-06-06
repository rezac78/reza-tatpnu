'use client'

import React, {useState} from 'react';

const FAQExpand: React.FC<any> = ({data, className = 'bg-white', haveIcon = true, border = false}) => {
    const [expandedIndex, setExpandedIndex] = useState<any>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className={'flex flex-col gap-y-5 '}>
            {data.map((item: any, index: number) => (
                <div key={index} className={` ${expandedIndex === index ? className : 'bg-white'}`}>
                    <button className={`w-full text-right flex items-center gap-x-3 px-5 py-4 ${border && 'border-b'}`}
                            onClick={() => toggleExpand(index)}>
                        {haveIcon &&
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="#FFA230"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23" cy="23" r="23" fillOpacity="0.07"/>
                                <path
                                    d="M28.22 20.75H19.96C19.4 20.75 18.84 20.56 18.4 20.2L16.21 18.45C15.61 17.97 15.27 17.26 15.27 16.5C15.27 15.74 15.61 15.02 16.21 14.55L18.4 12.8C18.84 12.45 19.4 12.25 19.96 12.25H28.22C29.6 12.25 30.72 13.37 30.72 14.75V18.25C30.72 19.63 29.6 20.75 28.22 20.75ZM19.96 13.75C19.73 13.75 19.51 13.83 19.34 13.97L17.15 15.72C16.91 15.91 16.77 16.2 16.77 16.5C16.77 16.8 16.91 17.09 17.15 17.28L19.34 19.03C19.52 19.17 19.74 19.25 19.96 19.25H28.22C28.77 19.25 29.22 18.8 29.22 18.25V14.75C29.22 14.2 28.77 13.75 28.22 13.75H19.96Z"
                                />
                                <path
                                    d="M26.0598 30.75H17.7998C16.4198 30.75 15.2998 29.63 15.2998 28.25V24.75C15.2998 23.37 16.4198 22.25 17.7998 22.25H26.0598C26.6298 22.25 27.1798 22.44 27.6198 22.8L29.8098 24.55C30.4098 25.03 30.7498 25.74 30.7498 26.5C30.7498 27.26 30.4098 27.98 29.8098 28.45L27.6198 30.2C27.1798 30.56 26.6298 30.75 26.0598 30.75ZM17.7998 23.75C17.2498 23.75 16.7998 24.2 16.7998 24.75V28.25C16.7998 28.8 17.2498 29.25 17.7998 29.25H26.0598C26.2898 29.25 26.5098 29.17 26.6798 29.03L28.8698 27.28C29.1098 27.09 29.2498 26.8 29.2498 26.5C29.2498 26.2 29.1098 25.91 28.8698 25.72L26.6798 23.97C26.4998 23.83 26.2798 23.75 26.0598 23.75H17.7998Z"
                                />
                                <path
                                    d="M23 23.75C22.59 23.75 22.25 23.41 22.25 23V20C22.25 19.59 22.59 19.25 23 19.25C23.41 19.25 23.75 19.59 23.75 20V23C23.75 23.41 23.41 23.75 23 23.75Z"
                                />
                                <path
                                    d="M23 33.75C22.59 33.75 22.25 33.41 22.25 33V30C22.25 29.59 22.59 29.25 23 29.25C23.41 29.25 23.75 29.59 23.75 30V33C23.75 33.41 23.41 33.75 23 33.75Z"
                                />
                                <path
                                    d="M26 33.75H20C19.59 33.75 19.25 33.41 19.25 33C19.25 32.59 19.59 32.25 20 32.25H26C26.41 32.25 26.75 32.59 26.75 33C26.75 33.41 26.41 33.75 26 33.75Z"
                                />
                            </svg>
                        }

                        <span className={''}>{item.question}</span>
                        <div className={`mr-auto transition-all ${expandedIndex === index ? 'rotate-45' : ''}`}>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="#FFA230"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="17" fillOpacity="0.07"/>
                                <path
                                    d="M16.384 17.984H13.312V16.752H16.384V13.616H17.664V16.752H20.752V17.984H17.664V21.168H16.384V17.984Z"
                                />
                            </svg>
                        </div>

                    </button>
                    {/*{expandedIndex === index && (*/}
                    <div
                        className={`${expandedIndex === index ? ' overflow-auto max-h-auto opacity-1 ' : ' overflow-hidden max-h-0 opacity-0 '} w-full text-right  px-5 transition-all`}>
                        <p className={'leading-7 text-justify py-4'}>{item.answer}</p>
                    </div>
                    {/*)}*/}
                </div>
            ))}
        </div>
    );
};

export default FAQExpand;
