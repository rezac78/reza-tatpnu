"use client"

import axios from "@/lib/axios";
import {useEffect, useState} from "react";
import {convertProductFunction} from "@/lib/utils";
import {SpinnerLoading} from "@/components/common/Loading";
import {CoursesIcon} from "@/public/icon/profile/menu";
import ProductCard from "@/components/common/ProductCard";
import ProfileProductCard from "@/components/pages/profile/UserCourses/ProfileProductCard";


const UserCourses = () => {
    const [courses, setCourses] = useState({loading: true, data: []})
    const getUserCourses = async () => {
        try {
            const res = await axios.get('products/user/pay')
            if (res.data.status) {
                const courseList = convertProductFunction(res.data.data)
                setCourses((prevState: any) => ({...prevState, data: courseList}))
            }
        } catch (e) {
            // console.log(e)
        }
        setCourses(prevState => ({...prevState, loading: false}))

    }
    useEffect(() => {
        if (courses.loading) getUserCourses()
    }, [courses.loading]);


    return (
        <div className={'flex flex-wrap gap-6 w-full  pt-6'}>
            {/*bg-white shadow-[0_1px_4px_#0a164629]*/}
            {courses.loading ? <SpinnerLoading className="mx-auto"/> :
                courses.data.length !== 0 ? courses.data.map((item, index) => (
                        <ProfileProductCard key={index} product={item}/>
                    ))
                    :
                    <div
                        className={'mx-auto my-12 flex flex-col gap-y-6 items-center text-2xl sm:text-3xl pb-20'}>
                        <CoursesIcon width={'2em'} height={'2em'}/>
                        <span>دوره ای یافت نشد!</span>
                    </div>
            }
        </div>
    );
};

export default UserCourses;