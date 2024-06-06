import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from '@/components/pages/profile/ProfileSectionTitle';

const Page = () => {
  return (
    <>
      <BreadCrumbs
        links={[
          { name: "پروفایل", link: "/profile" },
          { name: "ارتباط با ما", link: "/profile/contact" },
        ]}
      />
      <ProfileSectionTitle title={"ارتباط با ما"} />
      {/*<ContactProfile />*/}
    </>
  );
};

export default Page;
