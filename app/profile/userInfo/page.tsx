import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from "@/components/pages/profile/ProfileSectionTitle";
import UserInfo from "@/components/pages/profile/UserInfo";

const Page = async () => {
  return (
    <>
      <BreadCrumbs
        links={[
          { name: "پروفایل", link: "/profile" },
          { name: "مشخصات کاربری", link: "/profile/userInfo" },
        ]}
      />
      <ProfileSectionTitle title={"مشخصات کاربری"} />
      <UserInfo />
    </>
  );
};

export default Page;
