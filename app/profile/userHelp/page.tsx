import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from "@/components/pages/profile/ProfileSectionTitle";
import axios from "@/lib/axios";
import UserFaq from "@/components/pages/profile/UserFaq";

const getFAQList = async () => {
  try {
    const response = await axios.post(`faq-categories/search?page=1`, {
      title: "",
    });
    return response.data;
  } catch (error) {
    // console.log(error);
  }
};

const Page = async () => {
  // const faqCat = await getCommonFaqCats();
  const FAQList = await getFAQList();
  return (
    <>
      <BreadCrumbs
        links={[
          { name: "پروفایل", link: "/profile" },
          { name: "سوالات متداول", link: "/profile/userHelp" },
        ]}
      />
      <ProfileSectionTitle title={"سوالات متداول"} />
       <UserFaq FAQList={FAQList} />
    </>
  );
};

export default Page;
