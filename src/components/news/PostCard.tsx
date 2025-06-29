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
//   // category,
//   date,
//   readTime,
//   url,
//   layout,
// }: PostCardProps) => {
//   return (
//     <article
//       className={`border px-2.5 group overflow-hidden ${layout === "horizontal" ? "" : "flex flex-col"}`}
//     >
//       <div
//         className={`  ${layout === "horizontal" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex flex-col"}`}
//       >
//         <div className={layout === "horizontal" ? "" : "w-full"}>
//           <Link href={url} className="">
//             {/* <div className="relative aspect-[2/1] w-full overflow-hidden"> */}
//             <Image
//               src={Img}
//               alt={title}
//               width={500}
//               height={300}
//               // fill
//               // className="object-cover group-hover:scale-105 transition-transform duration-500"
//               className=""
//             />
//             {/* </div> */}
//           </Link>
//         </div>
//         <div className="flex flex-col">
//           <div className="py-4">
//             <Link href={url}>
//               <h2 className="text-[16px] leading-[23px] mb-3 font-bold  group-hover:text-red-600 transition-colors">
//                 {/* {title}  */}
//                 Ishaq Dar “prudently” dismisses Pakistan's financial crisis
//               </h2>
//             </Link>
//             <p className="text-gray-600 leading-[23.8px] mb-3 text-sm md:text-base">
//               {/* {summary} */}
//               Ishaq Dar, the federal minister for finance and revenue,
//               criticised Imran Khan
//             </p>
//             <h4 className="text-gray-500 text-[14px] leading-[23.8px] mb-[3px] ">
//               {readTime}
//             </h4>
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
  category,
  date,
  readTime,
  url,
  layout = "vertical",
}: PostCardProps) => {
  return (
    <article
      className={`
        border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group
        ${layout === "horizontal" 
          ? "bg-white" 
          : "bg-white flex flex-col h-full"
        }
      `}
    >
      <div
        className={`
          ${layout === "horizontal" 
            ? "flex flex-col sm:flex-row" 
            : "flex flex-col h-full"
          }
        `}
      >
        {/* Image Section */}
        <div 
          className={`
            ${layout === "horizontal" 
              ? "w-full sm:w-1/2 lg:w-2/5 flex-shrink-0" 
              : "w-full"
            }
          `}
        >
          <Link href={url} className="block">
            <div 
              className={`
                relative overflow-hidden
                ${layout === "horizontal" 
                  ? "aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-[16/10] h-full" 
                  : "aspect-[16/10] sm:aspect-[3/2]"
                }
              `}
            >
              <Image
                src={ Img}
                alt={title}
                fill
                sizes={layout === "horizontal" 
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        </div>

        {/* Content Section */}
        <div 
          className={`
            ${layout === "horizontal" 
              ? "w-full sm:w-1/2 lg:w-3/5 flex flex-col justify-between p-4 sm:p-6" 
              : "flex-1 p-4 sm:p-5 flex flex-col"
            }
          `}
        >
          {/* Category and Date */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {category}
            </span>
            <span className="text-xs text-gray-500">
              {date}
            </span>
          </div>

          {/* Title */}
          <Link href={url} className="block mb-3">
            <h2 
              className={`
                font-bold group-hover:text-red-600 transition-colors duration-200 line-clamp-3
                ${layout === "horizontal" 
                  ? "text-lg sm:text-xl lg:text-2xl leading-tight" 
                  : "text-base sm:text-lg leading-tight"
                }
              `}
            >
              {title || "Ishaq Dar 'prudently' dismisses Pakistan's financial crisis"}
            </h2>
          </Link>

          {/* Summary */}
          <p 
            className={`
              text-gray-600 mb-4 line-clamp-3 flex-1
              ${layout === "horizontal" 
                ? "text-sm sm:text-base leading-relaxed" 
                : "text-sm leading-relaxed"
              }
            `}
          >
            {summary || "Ishaq Dar, the federal minister for finance and revenue, criticised Imran Khan"}
          </p>

          {/* Read Time */}
          <div className="flex items-center justify-between mt-auto">
            {readTime && (
              <span className="text-xs text-gray-500 font-medium">
                {readTime}
              </span>
            )}
            <Link 
              href={url}
              className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors ml-auto"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;