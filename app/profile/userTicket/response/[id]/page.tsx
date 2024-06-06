"use client";

import React from "react";
import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from '@/components/pages/profile/ProfileSectionTitle';
import Ticketing from "@/components/pages/profile/UserTicket/Ticketing";

const Page = ({params: {id}}: any) => {
    return (
        <>
            <BreadCrumbs
                links={[
                    {name: "پروفایل", link: "/profile"},
                    {name: "تیکت و پشتیبانی", link: "/profile/userTicket"},
                    {name: "پاسخ تیکت", link: ""},
                ]}
            />
            <ProfileSectionTitle title={"پاسخ تیکت"} BackBtn/>
            <Ticketing ticketId={id} />
        </>
    );
};

export default Page;
