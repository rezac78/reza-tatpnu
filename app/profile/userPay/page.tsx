"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from "@/components/pages/profile/ProfileSectionTitle";
import UserPay from "@/components/pages/profile/UserPay";



const Page = () => {
  const [transactionList, setTransactionList] = useState({
    loading: true,
    data: [],
  });
  const getUserTransactions = async () => {
    await axios
      .get("transactions-user")
      .then((res) => {
        if (res.status) {
          setTransactionList((prevState) => ({
            ...prevState,
            data: res.data.data,
          }));
        }
        // else toast.error(data.message)
      })
      .catch((err) => {
        // if (err?.response?.status === 401) {
        //     signOut({callbackUrl: '/', redirect: false})
        // }
        // for status 404 error is ==>  اطلاعاتی جهت نمایش وجود ندارد
        // else if (err?.response?.status !== 404) toast.error(err.response.data.message)
      });
    setTransactionList((prevState) => ({ ...prevState, loading: false }));
  };
  useEffect(() => {
    getUserTransactions();
  }, []);
  return (
    <>
      <BreadCrumbs
        links={[
          { name: "پروفایل", link: "/profile" },
          { name: "امور مالی", link: "/profile/userPay" },
        ]}
      />
      <ProfileSectionTitle title={"امور مالی"} />
      <UserPay
        title={"تراکنش ها"}
        loading={transactionList.loading}
        transactions={transactionList.data}
      />
    </>
  );
};

export default Page;
