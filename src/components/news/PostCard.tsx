// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Img from "../../../public/assets/images.jpeg";

// interface PostCardProps {
//   title: string;
//   summary: string;
//   imageUrl: string;
//   category: string;
//   date: string;
//   readTime?: string;
//   url: string;
//   layout?: "horizontal" | "vertical";
// }

// const PostCard = ({
//   title,
//   summary,
//   imageUrl,
//   category,
//   date,
//   readTime,
//   url,
//   layout,
// }: PostCardProps) => {
//   return (
//     <article className={`group overflow-hidden ${layout === "horizontal" ? "" : "h-full"}`}>
//       <div
//         className={`h-full ${layout === "horizontal"
//           ? "md:grid md:grid-cols-2 md:gap-6"
//           : "flex flex-col space-y-4"}`}
//       >
//         <div className={`${layout === "horizontal" ? "" : "w-full"}`}>
//           <Link href={url} className="block">
//             <div className="relative aspect-video w-full overflow-hidden rounded-lg">
//               <Image
//                 src={Img}
//                 alt={title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//           </Link>
//         </div>

//         <div className="flex flex-col justify-between p-2">
//           <div className="space-y-3">
//             <div className="flex items-center space-x-2">
//               <span className="text-xs font-medium text-red-600">{category}</span>
//               <span className="text-xs text-gray-500">{date}</span>
//             </div>

//             <Link href={url} className="block group-hover:text-red-600 transition-colors">
//               <h2 className="text-lg font-bold leading-snug">
//                 {title}
//               </h2>
//             </Link>

//             <p className="text-gray-600 text-sm line-clamp-2">
//               {summary}
//             </p>
//           </div>

//           <div className="flex items-center space-x-4 mt-4">
//             <span className="text-xs text-gray-500">{readTime}</span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default PostCard;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import Img from "../../../public/assets/images.jpeg";

interface PostCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime?: string;
  url: string;
  layout?: "horizontal" | "vertical" | "minimal";
  size?: "small" | "medium" | "large";
}

const PostCard = ({
  title,
  summary,
  imageUrl,
  category,
  date,
  readTime,
  url,
  layout = "vertical",
  size = "medium",
}: PostCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      technology: "bg-blue-100 text-blue-800",
      business: "bg-green-100 text-green-800",
      climate: "bg-emerald-100 text-emerald-800",
      health: "bg-red-100 text-red-800",
      sports: "bg-orange-100 text-orange-800",
      politics: "bg-purple-100 text-purple-800",
      entertainment: "bg-pink-100 text-pink-800",
      science: "bg-indigo-100 text-indigo-800",
    };
    return colors[category.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-lg";
      default:
        return "text-base";
    }
  };

  if (layout === "minimal") {
    return (
      <article className="group">
        <Link href={url} className="block">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
              >
                {category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readTime}
              </span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={`group h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${getSizeClasses()}`}
    >
      <div
        className={`h-full ${layout === "horizontal" ? "flex" : "flex flex-col"}`}
      >
        {/* Image Section */}
        <div
          className={`relative overflow-hidden ${
            layout === "horizontal"
              ? "w-1/2 min-h-[200px]"
              : "w-full aspect-video"
          }`}
        >
          <Link href={url}>
            <Image
              src={Img}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getCategoryColor(category)} shadow-sm`}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`flex flex-col justify-between p-4 ${layout === "horizontal" ? "w-1/2" : "flex-1"}`}
        >
          <div className="space-y-3">
            {/* Meta Info */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
              {readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {readTime}
                </span>
              )}
            </div>

            {/* Title */}
            <Link href={url} className="block">
              <h2
                className={`font-bold leading-snug group-hover:text-red-600 transition-colors duration-200 line-clamp-2 ${
                  layout === "horizontal" ? "text-lg" : "text-xl"
                }`}
              >
                {title}
              </h2>
            </Link>

            {/* Summary */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {summary}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <Link
              href={url}
              className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors duration-200"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Reading Progress Indicator */}
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-200 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
