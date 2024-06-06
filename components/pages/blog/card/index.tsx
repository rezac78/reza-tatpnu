import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface Props {
    blog: any,
    type?: 'normal' | 'table-big' | 'table-small',
    className?: string
}

const BlogCard: React.FC<Props> = ({blog, type = 'normal', className = ""}) => {
    const {
        id,
        title,
        alt,
        slug,
        meta_title,
        meta_description,
        short_description,
        image,
        study_time,
        is_active,
        created_at,
        updated_at,
        blog_category_title,
        blog_category_slug,
        blog_category_icon,
        blog_category_id,
    } = blog;

    const date = new Date(created_at).toLocaleDateString("fa-IR");
    const storedDate = new Date(created_at);
    const todayDate = new Date();
    // @ts-ignore
    const differenceInMilliseconds = Math.abs(todayDate - storedDate);
    const daysDifference = Math.floor(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    return (<>
            {type === 'table-big' &&
                <Link href={`/blog/${slug}`}
                      className={className + " max-w-[270px] max-h-[336px] grid grid-rows-10 bg-white border shadow-sm rounded-sm overflow-hidden"}>
                    <div className="row-span-6">
                        <Image className="w-full h-full rounded-t-sm  object-cover object-top"
                               width={270}
                               height={156}
                               src={image}
                               alt={alt ? alt : 'blog'}/>
                    </div>
                    <div className="row-span-2 p-3 space-y-3">
                        <div className="flex items-center  gap-x-1 ">
                            <span className={'w-2 h-2 rounded-full bg-primary text-transparent'}>1</span>
                            <span className="font-bold line-clamp-2 text-primary">{blog_category_title}</span>
                            <span className={'w-0.5 h-full bg-black/20 text-transparent rounded-full'}>1</span>
                            <span className={'font-digit'}>{date}</span>
                        </div>
                        <span className=" font-bold text-gray-800 line-clamp-2">{title}</span>
                        <p className="mt-2 line-clamp-3 text-xs">{short_description}</p>
                    </div>
                    <div className="row-span-2 mt-auto text-sm pb-1 px-3">
                         <span>{`${
                             daysDifference === 0 ? "امروز" : `${daysDifference} روز قبل`
                         }  / زمان مطالعه: ${study_time} دقیقه`}</span>
                    </div>
                </Link>
            }

            {type === 'normal' &&
                <Link href={`/blog/${slug}`}
                      className={className + " max-w-[270px] max-h-[336px] grid grid-rows-10 bg-white border shadow-sm rounded-sm overflow-hidden"}>
                    <div className="row-span-4 ">
                        <Image className="w-full h-full rounded-t-sm  object-cover object-top"
                               width={270}
                               height={156}
                               src={image}
                               alt={alt ? alt : 'blog'}/>
                    </div>
                    <div className="row-span-4 p-3 space-y-3">
                        <div className="flex items-center  gap-x-1 ">
                            <span className={'w-2 h-2 rounded-full bg-primary text-transparent'}>1</span>
                            <span className="font-bold line-clamp-2 text-primary">{blog_category_title}</span>
                            <span className={'w-0.5 h-full bg-black/20 text-transparent rounded-full'}>1</span>
                            <span className={'font-digit'}>{date}</span>
                        </div>
                        <span className=" font-bold text-gray-800 line-clamp-2">{title}</span>

                        <p className="mt-2 line-clamp-3 text-xs">{short_description}</p>
                    </div>
                    <div className="row-span-2 mt-auto text-sm pb-1 px-3">
                      <span>{`${
                          daysDifference === 0 ? "امروز" : `${daysDifference} روز قبل`
                      }  / زمان مطالعه: ${study_time} دقیقه`}</span>
                    </div>
                </Link>}
        </>
    );
};

export default BlogCard;