import React from "react";
import Image, { StaticImageData } from "next/image";
import Img from "../../../public/assets/images.jpeg";

interface PostCardProps {
  title: string;
  image: StaticImageData;
}

const PostCard = ({ title, image }: PostCardProps) => {
  return (
    <article className="border-b border-gray-200 pb-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <a href="/article/example" className="block">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={Img}
                alt="Example Post"
                className="object-cover w-[192px] h-[115px] "
              />
            </div>
          </a>
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-wider">
            Category
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2 mb-3">
            <a href="/article/example" className="hover:underline">
              Example Post Title
            </a>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This is a brief summary of the post content.
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
