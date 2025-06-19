import React from "react";
import Image from "next/image";
import Link from "next/link";
import Img from "../../../public/assets/images.jpeg";

interface PostCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime?: string;
  url: string;
  layout?: "horizontal" | "vertical";
}

const PostCard = ({
  title,
  summary,
  imageUrl,
  // category,
  date,
  readTime,
  url,
  layout,
}: PostCardProps) => {
  return (
    <article
      className={` px-2.5 group overflow-hidden ${layout === "horizontal" ? "" : "flex flex-col"}`}
    >
      <div
        className={`  ${layout === "horizontal" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex flex-col"}`}
      >
        <div className={layout === "horizontal" ? "" : "w-full"}>
          <Link href={url} className="block">
            <div className="relative aspect-[2/1] w-full overflow-hidden">
              <Image
                src={Img}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="py-4">
            <Link href={url}>
              <h2 className="text-[16px] leading-[23px] mb-3 font-bold  group-hover:text-red-600 transition-colors">
                {/* {title}  */}
                Ishaq Dar “prudently” dismisses Pakistan's financial crisis
              </h2>
            </Link>
            <p className="text-gray-600 leading-[23.8px] mb-3 text-sm md:text-base">
              {/* {summary} */}
              Ishaq Dar, the federal minister for finance and revenue,
              criticised Imran Khan
            </p>
            {/* <div className="flex items-center justify-between mt-2"> */}
            {/* <span className="text-gray-500  text-[10px] ">{date}</span> */}
            <h4 className="text-gray-500 text-[14px] leading-[23.8px] mb-[3px] ">
              {readTime}
            </h4>
            {/* </div> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
