"use client";

import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from "@/components/pages/profile/ProfileSectionTitle";


const Page = () => {
  return (
    <>
      <BreadCrumbs
        links={[
          { name: "پروفایل", link: "/profile" },
          { name: "آخرین اخبار", link: "/profile/news" },
        ]}
      />
      <ProfileSectionTitle title={"آخرین اخبار"} BackBtn={true} />
      {/*<BlogPage type="profileNews" />*/}
    </>
  );
};

export default Page;
