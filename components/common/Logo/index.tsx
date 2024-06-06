import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface Props {
    type?: "white" | "color"
}

const LogoLink: React.FC<Props> = ({type}) => {
    return (
        <Link href="/">
            <Image src={(type === "white") ? "/logo/logoTextWhite.svg" : "/logo/logoText.svg"} alt="logo" width={120}
                   height={100}/>
        </Link>
    );
};

export default LogoLink;