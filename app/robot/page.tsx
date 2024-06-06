import React from "react";
import RobotPageLayout from "@/components/pages/robot/layout";
export const metadata = {
  title: "هوش نور | موسسه تات",
  description:
    "مجموعه ای کامل از خدمات و آموزش های آنلاین و غیر حضوری دانشگاه پیام نور ",
  icons: {
    icon: "/favicon.ico",
  },
};
const RobotPage = async () => {
  return <RobotPageLayout />;
};

export default RobotPage;
