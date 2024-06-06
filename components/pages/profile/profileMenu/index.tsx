'use client'
import MobileProfileMenu from "./mobile";
import DesktopProfileMenu from "./desktop";

const ProfileMenu = ({setOpenLogout}:any) => {
    return (
        <>
            <MobileProfileMenu setOpenLogout={setOpenLogout}/>
            <DesktopProfileMenu setOpenLogout={setOpenLogout}/>
        </>
    );
};

export default ProfileMenu;