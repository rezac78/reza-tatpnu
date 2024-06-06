import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from "@/components/pages/profile/ProfileSectionTitle";
import UserCourses from "@/components/pages/profile/UserCourses";

const Page = () => {
    return (
        <>
            <BreadCrumbs
                links={[
                    {name: "پروفایل", link: "/profile"},
                    {name: "دوره های من", link: "/profile/userCourses"},
                ]}
            />
            <ProfileSectionTitle title={"دوره های من"}/>
            <UserCourses/>
        </>
    );
};

export default Page;
