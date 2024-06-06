import BreadCrumbs from "@/components/ui/breadCrumbs";
import ProfileSectionTitle from '@/components/pages/profile/ProfileSectionTitle';
import BackgroundImage from "@/components/pages/profile/common/BackgroundImage";


const Page = () => {
  const data = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.16" />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.636 18.364A9 9 0 1 0 3 12.004V14"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 12l2 2l2-2m6-4v5h5"
            />
          </g>
        </svg>
      ),
      title: "سابقه فعالیت",
      desc: "داشتن 9 سال سابقه رسمی و حرفه‌ای در ارائه خدمات به شاغلین در سرتاسر کشور",
      color: "#009EF6",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path d="m224 64l-96 32l-96-32l96-32Z" opacity="0.2" />
            <path d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32a8 8 0 0 0-5.4 6.75A5 5 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.9 47.9 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z" />
          </g>
        </svg>
      ),
      title: "فارغ‌التحصیلان",
      desc: "همراهی در فارغ‌التحصیلی بیش از 9 هزار شاغل در تمامی مقاطع دانشگاهی",
      color: "#71EF8D",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32"
              opacity="0.2"
            />
            <path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0" />
          </g>
        </svg>
      ),
      title: "مراکز ثبت‌نام",
      desc: "ایجاد 40 مرکز ثبت نام ویژه دانشگاه­های غیرانتفاعی، علمی کاربردی، سراسری و بین­‌الملل",
      color: "#F29242",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24Z"
              opacity="0.2"
            />
            <path d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-8 160H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h128Z" />
          </g>
        </svg>
      ),
      title: "تألیف کتاب",
      desc: "همکاری با بیش از 1300 متقاضی در تألیف کتاب",
      color: "#009EF6",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="M168 144a40 40 0 1 1-40-40a40 40 0 0 1 40 40M64 56a32 32 0 1 0 32 32a32 32 0 0 0-32-32m128 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32"
              opacity="0.2"
            />
            <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1 0-16a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21M190.92 212a8 8 0 1 1-13.85 8a57 57 0 0 0-98.15 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212M128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8" />
          </g>
        </svg>
      ),
      title: "همراهی در راه‌اندازی طرح‌های:",
      desc:
        "•\tمعادل‌سازی با تأیید وزارت علوم\n" +
        "•\tطرح شتاب و امکان عقد قرارداد مشارکت با دانشگاه\n" +
        "•\tایجاد پایگاه رسمی زبان\n" +
        "•\tطراحی طرح ارتقای مدارک ویژه شاغلین\n",
      color: "#FD325C",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
              opacity="0.2"
            />
            <path d="M88 128a8 8 0 0 1 8-8h24V96a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1-8-8m136-72v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.3 128.3 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z" />
          </g>
        </svg>
      ),
      title: "رفع موانع بیمه",
      desc: "عضویت بیش از 900 متقاضی و رفع موانع بیمه تأمین اجتماعی و تکمیلی درمانی",
      color: "#71EF8D",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="M216 96v96a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96Z"
              opacity="0.2"
            />
            <path d="M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-16 144H48v-88h160Zm16-104H32V64h192zM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8" />
          </g>
        </svg>
      ),
      title: "محصولات",
      desc: "رونمایی از 7 محصول و طرح در طرح شتاب با حمایت مرکز آموزش‌های تخصصی دانشگاه پیام نور",
      color: "#F29242",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="m200 152l-40 40l-64-16l-56-40l32.68-65.37L128 56l55.32 14.63l.28 1.37H144l-45.66 44.29a8 8 0 0 0 1.38 12.42C117.23 139.9 141 139.13 160 120Z"
              opacity="0.2"
            />
            <path d="m254.3 107.91l-25.52-51.06a16 16 0 0 0-21.47-7.15l-24.87 12.43l-52.39-13.86a8.14 8.14 0 0 0-4.1 0L73.56 62.13L48.69 49.7a16 16 0 0 0-21.47 7.15L1.7 107.9a16 16 0 0 0 7.15 21.47l27 13.51l55.49 39.63a8.1 8.1 0 0 0 2.71 1.25l64 16a8 8 0 0 0 7.6-2.1l55.07-55.08l26.42-13.21a16 16 0 0 0 7.15-21.46Zm-54.89 33.37L165 113.72a8 8 0 0 0-10.68.61C136.51 132.27 116.66 130 104 122l43.24-42h31.81l27.21 54.41ZM41.53 64L62 74.22l-25.57 51.05L16 115.06Zm116 119.13l-58.11-14.52l-49.2-35.14l28-56L128 64.28l9.8 2.59l-45 43.68l-.08.09a16 16 0 0 0 2.72 24.81c20.56 13.13 45.37 11 64.91-5L188 152.66Zm62-57.87l-25.52-51L214.47 64L240 115.06Zm-87.75 92.67a8 8 0 0 1-7.75 6.06a8 8 0 0 1-1.95-.24l-41.67-10.42a7.9 7.9 0 0 1-2.71-1.25l-26.35-18.82a8 8 0 0 1 9.3-13l25.11 17.94L126 208.24a8 8 0 0 1 5.82 9.7Z" />
          </g>
        </svg>
      ),
      title: "تمدید قرارداد",
      desc: "همراهی بیش از 3300 متقاضی در تمدید قرارداد و خدمات",
      color: "#FD325C",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 9.79L11.21 2H5v6.21L12.79 16zM7.25 5.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"
            opacity="0.3"
          />
          <path
            fill="currentColor"
            d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z"
          />
          <path
            fill="currentColor"
            d="M11.38 17.41c.39.39.9.59 1.41.59c.51 0 1.02-.2 1.41-.59l6.21-6.21c.78-.78.78-2.05 0-2.83L12.62.58C12.25.21 11.74 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM5 2h6.21L19 9.79L12.79 16L5 8.21z"
          />
          <circle cx="7.25" cy="4.25" r="1.25" fill="currentColor" />
        </svg>
      ),
      title: "تحصیل رایگان",
      desc: "همراهی بیش از 2600 دانشجو و امکان تحصیل رایگان در باشگاه و ایجاد درآمد",
      color: "#009EF6",
    },
  ];

  const RecordCard = ({ className = "", item }:any) => (
    <div
      className={
        className +
        " rounded-[12px] w-full flex flex-col gap-y-1 bg-white p-3 md:p-6 shadow-[0px_4px_20px_-9px_rgba(0,0,0,0.25)]"
      }
    >
      <div className={"flex items-center gap-x-1"}>
        <div className={"relative"}>
          <span
            style={{ backgroundColor: item.color, opacity: 0.2 }}
            className={` w-[35px] h-[35px] flex items-center justify-center rounded-full `}
          ></span>
          <span
            style={{ color: item.color }}
            className={
              "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            }
          >
            {item.icon}
          </span>
        </div>
        <span>{item.title}</span>
      </div>
      <div>{item.desc}</div>
    </div>
  );
  return (
    <>
      <BreadCrumbs
        links={[
          { name: "پروفایل", link: "/profile" },
          { name: "لینک های ورود", link: "/profile" },
          { name: "درباره ما", link: "/profile/Links/about" },
        ]}
      />
      <ProfileSectionTitle title={"درباره ما"} BackBtn />
      <BackgroundImage
        img={"/images/pages/profile/temp/link_about_temp.png"}
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
              stroke="#484848"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59001 18.31 9.35 16.94 9.59"
              stroke="#484848"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.97001 7.16C6.03001 7.15 6.10001 7.15 6.16001 7.16C7.54001 7.11 8.64001 5.98 8.64001 4.58C8.64001 3.15 7.49001 2 6.06001 2C4.63001 2 3.48001 3.16 3.48001 4.58C3.49001 5.98 4.59001 7.11 5.97001 7.16Z"
              stroke="#484848"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59001 5.66 9.35 7.03 9.59"
              stroke="#484848"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.33002 13.45 9.33002 12.05C9.33002 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
              stroke="#484848"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 17.78C7.68 18.72 7.68 20.26 9.09 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.09 17.78Z"
              stroke="#484848"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        title={"درباره ی ما"}
        desc={
          <>
            <span className={"font-bold text-justify leading-[32px]"}>
              همراهان فردای روشن
            </span>{" "}
            مؤسسه‌ای است با 9 سال سابقه فعالیت به‌عنوان رابطی بین علاقه‌مندان به
            تحصیلات دانشگاهی و دانشگاه‌های داخل و خارج از کشور. این مرکز با
            مأموریت ارتقای سطح دانش تخصصی افراد و توسعه توانمندی‌های مهارتی
            جامعه ازطریق ایجاد شبکه ارتباطی با مخاطبان و متقاضیان ارتقای شغلی و
            بهبود کیفیت زندگی حرفه‌ای آغاز به فعالیت کرده است. طراحی خدمات مختلف
            و متنوع از سویی و ارتباط و توسعه همکاری با دانشگاه‌های مطرح کشور از
            سوی دیگر در همین راستا در دستور کار همراهان قرار گرفته است.
            سرویس‌های طراحی‌شده، کاملاً در مسیر قانونی و براساس دستورالعمل‌های
            مشخص وزارت علوم و موردتائید ساختار آموزش عالی کشور تدوین و اجرایی
            می‌شود.
          </>
        }
      />
      <div className={"flex flex-col items-center justify-center my-6"}>
        <h2 className={"font-bold text-[18px] text-[#FFC436]"}>سوابق ما</h2>
        <span>
          موارد زیر بخشی از سابقه همراهان را در تحقق مأموریت خود تا امروز، در یک
          نگاه نشان می‌دهد:{" "}
        </span>
      </div>
      <div className={"flex flex-wrap gap-6 m-6 2xl:px-[100px]"}>
        <div className={"space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 gap-6"}>
          {data.slice(0, 3).map((item, index) => (
            <RecordCard key={index} item={item} />
          ))}
        </div>
        <div className={"space-y-6 sm:space-y-0 sm:grid sm:grid-cols-4 gap-6"}>
          {data.slice(3, 6).map((item, index) => (
            <RecordCard
              key={index}
              item={item}
              className={
                index === 1 ? "col-span-2 whitespace-break-spaces" : ""
              }
            />
          ))}
        </div>

        <div className={"space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 gap-6"}>
          {data.slice(6, 9).map((item, index) => (
            <RecordCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
