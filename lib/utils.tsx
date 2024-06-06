import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {
    DashboardIcon,
    InfoIcon,
    DocumentIcon,
    CoursesIcon,
    PayIcon,
    HelpIcon,
    BackupIcon,
    ContactIcon,
    ExitIcon
} from "@/public/icon/profile/menu";
import {AccountIcon, HomeIcon} from "@/public/icon/profile/BottomNavigations";
import {
    BaleIcon,
    TelegramIcon,
    WhatsAppIcon,
    InstagramIcon,
    ShareIcon
} from "@/public/icon/socialIcon";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function validatePhoneNumber(input_str: string) {
    return new RegExp("^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$").test(input_str)
}

export function validateEmail(input_str: string) {
    return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(input_str)
}


export const LoginTitles = [
    'ورود/ثبت نام در تات',
    'کد ارسال شده را وارد کنید',
    'رمزعبور خود را وارد کنید',
    'فراموشی رمز عبور',
    'کد تایید را وارد کنید',
]
export const LoginErrors = [
    {name: 'phone_number', value: 'ابتدا کد تایید را وارد کنید'},
    {name: 'password', value: 'ابتدا رمز عبور جدید را وارد کنید'},
    {name: 'name', value: ''},
    {name: 'code', value: 'ابتدا کد تایید را وارد کنید'},
    {name: 'existCode', value: 'ابتدا کد تایید را وارد کنید'},
    {name: 'resetCode', value: 'ابتدا کد تایید را وارد کنید'},
    {name: 'newPassword', value: 'ابتدا رمز عبور جدید را وارد کنید'}
]

// **********************************************************************************************************************************
// **********************************************************************************************************************************

export const banner_images = [
    '/images/banners/president-banner.jpg',
    '/images/banners/banner.avif',
    '/images/banners/banner1.avif'

]
export const banner_images_res = [
    '/images/banners/president-banner-responsive.jpg',
    '/images/banners/banner-responsive.avif',
    '/images/banners/banner-responsive1.avif',
]

export const gradeList = [
    {name: 'سیکل', value: '1'},
    {name: 'دیپلم', value: '2'},
    {name: 'دانشجو کاردانی', value: '3'},
    {name: 'فارغ التحصیل کاردانی', value: '4'},
    {name: 'دانشجو کارشناسی ناپیوسته', value: '5'},
    {name: 'دانشجو کارشناسی پیوسته', value: '6'},
    {name: 'فارغ التحصیل کارشناسی', value: '7'},
    {name: 'دانشجو کارشناسی ارشد', value: '8'},
    {name: 'فارغ التحصیل کارشناسی ارشد', value: '9'},
    {name: 'دانشجو دکتری', value: '10'},
    {name: 'فارغ التحصیل دکتری', value: '11'},
    {name: 'سایر', value: '12'},
]
export const currentGradeList = [
    {name: 'دیپلم', value: '1'},
    {name: 'کاردانی', value: '2'},
    {name: 'کارشناسی', value: '3'},
    {name: 'کارشناسی ارشد', value: '4'},
    {name: 'دکتری', value: '5'},

]

export function separateNumber(Number: any) {
    if (Number === 0) return Number
    Number += '';
    Number = Number.replace(',', '');
    let x = Number.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
}

export const convertProductFunction = (cartApiRes: any) => {
    let products = []
    for (let i = 0; i < cartApiRes.length; i++) {
        if (cartApiRes[i].product.title) {
            // console.log(cartApiRes[i].product)
            let certificate = []
            for (let j = 0; j < cartApiRes.length; j++) {
                if (cartApiRes[j].product.certificate_name) {
                    if (cartApiRes[i].product.id === cartApiRes[j].product.product_id) {
                        // console.log(cartApiRes[j].product)
                        certificate.push(cartApiRes[j])
                    }
                }
            }
            // console.log(certificate)
            products.push({...cartApiRes[i], certificate: certificate})
        }
    }
    return products
}

const basePath = '/profile'
export const profileTab = [
    {
        name: 'داشبورد',
        icon: <DashboardIcon/>,
        link: basePath
    },
    {
        name: 'مشخصات کاربری',
        icon: <InfoIcon/>,
        link: basePath + '/userInfo'
    },
    {
        name: 'بارگزاری اسناد و مدارک',
        icon: <DocumentIcon/>,
        link: basePath + '/userDoc'
    },

    {
        name: 'دوره های من',
        icon: <CoursesIcon/>,
        link: basePath + '/userCourses'
    },
    {
        name: 'امور مالی',
        icon: <PayIcon/>,
        link: basePath + '/userPay'
    },
    {
        name: 'سوالات متداول',
        icon: <HelpIcon/>,
        link: basePath + '/userHelp'
    },
    {
        name: 'تیکت و پشتیبانی',
        icon: <BackupIcon/>,
        link: basePath + '/userTicket'
    },
    {
        name: 'ارتباط با ما',
        icon: <ContactIcon/>,
        link: basePath + '/Links/contact'
    },

    {
        name: 'خروج',
        icon: <ExitIcon/>,
        link: ''
    }
]
export const BottomNavigations = [
    {
        title: 'خانه',
        icon: <HomeIcon/>,
        link: '/'
    },
    // {
    //     title: 'دوره ها',
    //     icon: <CartIcon width={'1.5em'} height={'1.5em'}/>,
    //     link: '/cart'
    // },
    {
        title: 'پروفایل',
        icon: <AccountIcon/>,
        link: '/profile'
    },
]
export const SocialIconsList = [
    <BaleIcon key={1}/>,
    <TelegramIcon key={2}/>,
    <WhatsAppIcon key={3}/>,
    <InstagramIcon key={4}/>,
    <ShareIcon key={5}/>,
]
