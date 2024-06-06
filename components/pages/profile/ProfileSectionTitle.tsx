"use client"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const ProfileSectionTitle = ({title, BackBtn = false}:any) => {
    const router = useRouter()
    return (
        <div className={'flex items-center  gap-x-3 h-10 my-6'}>
            <div className={'w-1 h-3/4 bg-primary'}></div>
            <span className={'text-2xl sm:text-3xl font-bold'}>
                {title}
            </span>
            {BackBtn && <Button onClick={() => router.back()}
                                variant="destructive"
                                className={'w-fit mr-auto flex gap-x-1 items-center justify-center'}>
                بازگشت
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 9L3.83 9L9.42 14.59L8 16L-1.46226e-06 8L8 1.39876e-06L9.41 1.41L3.83 7L16 7L16 9Z"
                          />
                </svg>
            </Button>}
        </div>
    );
};

export default ProfileSectionTitle;