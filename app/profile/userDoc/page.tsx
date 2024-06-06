import ProfileSectionTitle from "@/components/pages/profile/ProfileSectionTitle";
import UserDocument from "@/components/pages/profile/UserDoc";
import BreadCrumbs from "@/components/ui/breadCrumbs";


const Page = () => {
    return (
        <>
            <BreadCrumbs
                links={[
                    {name: "پروفایل", link: "/profile"},
                    {name: "بارگزاری اسناد و مدارک", link: "/profile/userDoc"},
                ]}
            />
            <ProfileSectionTitle title={"بارگزاری اسناد و مدارک"}/>
            <UserDocument/>
        </>
    );
};

export default Page;
