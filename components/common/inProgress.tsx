"use client"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const InProgress = () => {
    const router = useRouter()

    return (
        <>

            <div className={'flex flex-col items-center justify-center gap-y-6'}>
                <iframe className={'w-full h-[50vh]'}
                        src="https://lottie.host/embed/99f5caf6-ad67-4590-adad-a72f8fa13fe2/NXwQ91nCr5.json"></iframe>
                <h2 className={'text-3xl text-center'}>این قسمت از وب‌سایت در حال توسعه و به‌روزرسانی است. از صبر و
                    شکیبایی شما
                    سپاسگزاریم.</h2>
                <Button variant="destructive" onClick={() => router.back()}
                        className={'w-20'}>
                    بازگشت
                </Button>
            </div>
        </>
    );
};

export default InProgress;