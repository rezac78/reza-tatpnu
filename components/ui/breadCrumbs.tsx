import Link from "next/link";
import React from "react";

interface Props {
    links: { link: string, name: string }[]
}

const BreadCrumbs: React.FC<Props> = ({links}) => {
    return links.length === 0 ? null : (
        <ul
            className={
                "bg-gray-500/10 flex items-center mb-3 pr-3"
            }
        >
            <Link href={"/"}>
                <li className={"h-9 flex items-center justify-center"} key={-1}>
                    <HomeIcon/>
                    <ArrowLeft/>
                </li>
            </Link>
            {links.map((item, index) => (
                <Link href={item.link} key={index}>
                    <li className={"h-9 flex items-center justify-center  hover:underline"}>
                        <span>{item.name}</span>
                        {index !== links.length - 1 && (
                            <ArrowLeft/>
                        )}
                    </li>
                </Link>
            ))}
        </ul>
    );
};

const ArrowLeft = () => (
    <svg className={'mx-1'} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <path fill="currentColor"
              d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/>
    </svg>
)
const HomeIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.765 2.12963L2.7225 5.27963C2.0475 5.80463 1.5 6.92213 1.5 7.76963V13.3271C1.5 15.0671 2.9175 16.4921 4.6575 16.4921H13.3425C15.0825 16.4921 16.5 15.0671 16.5 13.3346V7.87463C16.5 6.96713 15.8925 5.80463 15.15 5.28713L10.515 2.03963C9.465 1.30463 7.7775 1.34213 6.765 2.12963Z"
            stroke="#6E6E6E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9 13.4922V11.2422"
            stroke="#6E6E6E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default BreadCrumbs;
