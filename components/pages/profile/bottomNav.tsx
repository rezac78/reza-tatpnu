import {BottomNavigations} from "@/lib/utils";
import Link from "next/link";

const BottomNavigation = () => {
    return (
        <ul className={'h-[68px] bg-white shadow-[0px_0px_9px_rgba(0,0,0,0.25)] fixed md:hidden bottom-0 w-full flex items-center justify-evenly'}>
            {
                BottomNavigations.map((item, index) => (
                    <Link key={index} href={item.link}
                          className={`flex flex-col p-3 items-center ${index === 3 && 'bg-black/10'} hover:bg-black/10 h-full w-full gap-y-1`}>
                        <span>{item.icon}</span>
                        <span className='text-sm'>{item.title}</span>
                    </Link>
                ))
            }
        </ul>
    );
};

export default BottomNavigation;