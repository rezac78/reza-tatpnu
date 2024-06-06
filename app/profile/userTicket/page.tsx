import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from "@/components/pages/profile/ProfileSectionTitle";
import UserTicket from "@/components/pages/profile/UserTicket";

const Page = () => {
  return (
    <>
      <BreadCrumbs
        links={[
          { name: "پروفایل", link: "/profile" },
          { name: "تیکت و پشتیبانی", link: "/profile/userTicket" },
        ]}
      />
      <ProfileSectionTitle title={"تیکت و پشتیبانی"} />
      <UserTicket />
    </>
  );
};

export default Page;
