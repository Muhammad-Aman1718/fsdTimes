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
      className={`border w-[200px] group overflow-hidden ${layout === "horizontal" ? "" : "flex flex-col"}`}
    >
      <div
        className={` border ${layout === "horizontal" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex flex-col"}`}
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
          <div className="p-4">
            <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
              {/* <Link
                href={`/category/${category.toLowerCase()}`}
                className="font-medium uppercase tracking-wider text-red-600 hover:text-red-700"
              >
                {category}
              </Link> */}
              {/* <span>•</span>
              <span>{date}</span>
              {readTime && (
                <>
                  <span>•</span>
                  <span>{readTime}</span>
                </>
              )} */}
            </div>
            <Link href={url}>
              <h2 className="text-xl md:text-2xl font-serif font-bold mb-3 line-clamp-3 group-hover:text-red-600 transition-colors">
                {/* {title}  */}
                prime minister of pakistan
              </h2>
            </Link>
            <p className="text-gray-600 leading-relaxed line-clamp-3 text-sm md:text-base">
              {/* {summary} */}
              fdjsalkjfdlksajflsafdsafdsa
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
