'use client'

import toast from "react-hot-toast";
import {useAuthContext} from "@/context/auth/hooks";
import {Button} from "@/components/ui/button";

const Logout = ({openLogout, setOpenLogout}: any) => {
    const {logout}:any = useAuthContext()
    // const session = useSession();

    const handleLogoutUser = async () => {
        await logout()

        setOpenLogout(false)
        toast.success('خروج با موفقیت انجام شد')
    }
    const handleCancel = () => setOpenLogout(false)
    return (openLogout ? (
                <div onClick={() => setOpenLogout(false)}
                     className={`z-[100000] fixed h-[100vh] w-screen top-0 left-0 right-0 bottom-0 bg-black/20 flex `}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={'bg-white w-full sm:w-[500px] m-auto pb-3 rounded-[4px] flex flex-col gap-y-6 '}>
                        <div className={'border-b p-6 text-[20px] font-bold'}>
                            خروج از حساب
                        </div>
                        <span className={'px-6'}>آیا میخواهید از حساب کاربری خود خارج شوید؟</span>
                        <div className={'flex justify-end gap-x-3 px-6 h-[50px]'}>
                            <Button
                                onClick={handleLogoutUser}
                                className={'w-[100px] '}>تایید
                            </Button>
                            <Button
                                onClick={handleCancel}
                                className={'w-[100px] bg-transparent hover:bg-error/10 text-error border border-error'}>لغو
                            </Button>
                        </div>
                    </div>

                </div>
            )
            : null
    );
};

export default Logout;