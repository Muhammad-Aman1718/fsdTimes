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

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Clock, Calendar, ArrowRight } from "lucide-react";
// import Img from "../../../public/assets/images.jpeg";

// interface PostCardProps {
//   title: string;
//   summary: string;
//   imageUrl: string;
//   category: string;
//   date: string;
//   readTime?: string;
//   url: string;
//   layout?: "horizontal" | "vertical" | "minimal";
//   size?: "small" | "medium" | "large";
// }

// const PostCard = ({
//   title,
//   summary,
//   imageUrl,
//   category,
//   date,
//   readTime,
//   url,
//   layout = "vertical",
//   size = "medium",
// }: PostCardProps) => {
//   const getSizeClasses = () => {
//     switch (size) {
//       case "small":
//         return "text-sm";
//       case "large":
//         return "text-lg";
//       default:
//         return "text-base";
//     }
//   };

//   if (layout === "minimal") {
//     return (
//       <article className="group border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
//         <Link href={url} className="block">
//           <div className="space-y-2">
//             <div className="flex items-center justify-between text-xs text-gray-500">
//               <span>{category}</span>
//               <span>{date}</span>
//             </div>
//             <h3 className="font-serif text-lg text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
//               {title}
//             </h3>
//             <p className="text-sm text-gray-600 line-clamp-2">{summary}</p>
//           </div>
//         </Link>
//       </article>
//     );
//   }

//   return (
//     <article className="group border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
//       <div
//         className={`${layout === "horizontal" ? "md:grid md:grid-cols-5 gap-6" : "space-y-4"}`}
//       >
//         {/* Image Section */}
//         <div
//           className={`${layout === "horizontal" ? "col-span-2" : ""} relative aspect-video`}
//         >
//           <Link href={url}>
//             <Image
//               src={Img}
//               alt={title}
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//           </Link>
//         </div>

//         {/* Content Section */}
//         <div className={`${layout === "horizontal" ? "col-span-3" : ""} space-y-3">
//           <div className="flex items-center space-x-3 text-xs text-gray-500 uppercase tracking-wider">
//             <span>{category}</span>
//             <span>•</span>
//             <span>{date}</span>
//             {readTime && (
//               <>
//                 <span>•</span>
//                 <span>{readTime}</span>
//               </>
//             )}
//           </div>

//           <Link href={url} className="block">
//             <h2 className={`font-serif ${layout === "horizontal" ? "text-2xl" : "text-xl"} leading-tight text-gray-900 group-hover:text-gray-600 transition-colors duration-200 mb-3`}>
//               {title}
//             </h2>
//           </Link>

//           <p className="text-gray-600 leading-relaxed line-clamp-3">{summary}</p>
//         </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default PostCard;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Clock, Calendar } from "lucide-react";

// interface PostCardProps {
//   title: string;
//   summary: string;
//   imageUrl: string;
//   category: string;
//   date: string;
//   readTime?: string;
//   url: string;
//   layout?: "horizontal" | "vertical" | "featured";
//   priority?: boolean;
// }

// const PostCard = ({
//   title,
//   summary,
//   imageUrl,
//   category,
//   date,
//   readTime,
//   url,
//   layout = "vertical",
//   priority = false,
// }: PostCardProps) => {
//   // Featured article layout (main story)
//   if (layout === "featured") {
//     return (
//       <article className="border-b-2 border-red-600 pb-6 mb-8">
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="relative aspect-[4/3]">
//             <Image
//               src={imageUrl || "/assets/images.jpeg"}
//               alt={title}
//               fill
//               className="object-cover"
//               priority={priority}
//             />
//           </div>
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase">
//                 {category}
//               </span>
//               <span className="text-gray-500 text-sm">{date}</span>
//             </div>
//             <Link href={url}>
//               <h1 className="text-3xl font-bold text-gray-900 hover:text-red-600 transition-colors leading-tight">
//                 {title}
//               </h1>
//             </Link>
//             <p className="text-gray-700 leading-relaxed text-lg">{summary}</p>
//             {readTime && (
//               <div className="flex items-center text-gray-500 text-sm">
//                 <Clock className="w-4 h-4 mr-1" />
//                 {readTime}
//               </div>
//             )}
//           </div>
//         </div>
//       </article>
//     );
//   }

//   // Horizontal layout for main articles
//   if (layout === "horizontal") {
//     return (
//       <article className="border-b border-gray-200 pb-4 mb-6">
//         <div className="grid md:grid-cols-3 gap-4">
//           <div className="relative aspect-[4/3]">
//             <Image
//               src={imageUrl || "/assets/images.jpeg"}
//               alt={title}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="md:col-span-2 space-y-3">
//             <div className="flex items-center space-x-2">
//               <span className="text-red-600 font-semibold text-sm uppercase">
//                 {category}
//               </span>
//               <span className="text-gray-400">•</span>
//               <span className="text-gray-500 text-sm">{date}</span>
//             </div>
//             <Link href={url}>
//               <h2 className="text-xl font-bold text-gray-900 hover:text-red-600 transition-colors leading-tight">
//                 {title}
//               </h2>
//             </Link>
//             <p className="text-gray-600 leading-relaxed">{summary}</p>
//             {readTime && (
//               <div className="flex items-center text-gray-500 text-sm">
//                 <Clock className="w-4 h-4 mr-1" />
//                 {readTime}
//               </div>
//             )}
//           </div>
//         </div>
//       </article>
//     );
//   }

//   // Vertical layout for sidebar and grid
//   return (
//     <article className="border-b border-gray-200 pb-4 mb-4">
//       <div className="space-y-3">
//         <div className="relative aspect-[4/3]">
//           <Image
//             src={imageUrl || "/assets/images.jpeg"}
//             alt={title}
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <span className="text-red-600 font-semibold text-xs uppercase">
//               {category}
//             </span>
//             <span className="text-gray-400">•</span>
//             <span className="text-gray-500 text-xs">{date}</span>
//           </div>
//           <Link href={url}>
//             <h3 className="font-bold text-gray-900 hover:text-red-600 transition-colors leading-tight">
//               {title}
//             </h3>
//           </Link>
//           <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//             {summary}
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default PostCard;

// File: components/PostCard.tsx

import React from "react";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps extends Post {
  layout?: "horizontal" | "vertical";
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  summary,
  imageUrl,
  category,
  date,
  slug,
  readTime,
  layout = "vertical",
}) => {
  return (
    <Link href={`/article/${slug}`}>
      <div
        className={`border rounded overflow-hidden shadow hover:shadow-md transition duration-200 bg-white ${layout === "horizontal" ? "flex gap-4" : "flex flex-col"}`}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className={`object-cover ${layout === "horizontal" ? "w-1/3" : "w-full h-48"}`}
        />
        <div className="p-4">
          <p className="text-sm text-gray-500">
            {category} • {date} {readTime && `• ${readTime}`}
          </p>
          <h3 className="text-lg font-semibold mt-1">{title}</h3>
          <p className="text-gray-600 mt-1 text-sm">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
