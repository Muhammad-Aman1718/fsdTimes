// import React from "react";

// interface CategorySectionProps {
//   categoryTitle?: string;
//   children?: React.ReactNode;
//   className?: string;
//   layout?: "grid" | "list";
// }

// const CategorySection = ({
//   categoryTitle,
//   children,
//   className,
//   layout,
// }: CategorySectionProps) => {
//   return (
//     <section className="bg-white rounded-lg">
//       {categoryTitle && (
//         <div className="flex justify-between items-center px-4 py-6 border-b border-gray-100">
//           <h2 className="text-xl font-bold text-gray-900">{categoryTitle}</h2>
//           <button className="text-sm text-gray-600 hover:text-red-600 transition-colors">
//             View All
//           </button>
//         </div>
//       )}
//       <div
//         className={`
//           ${className || ""}
//           ${
//             layout === "grid"
//               ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//               : "flex flex-col divide-y divide-gray-100"
//           }
//           p-4
//         `}
//       >
//         {children}
//       </div>
//     </section>
//   );
// };

// export default CategorySection;

import React from "react";

interface CategorySectionProps {
  categoryTitle: string;
  children: React.ReactNode;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categoryTitle,
  children,
}) => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center px-2.5 mb-4">
        <h2 className="text-xl font-bold">{categoryTitle}</h2>
        <button className="text-sm text-blue-600 hover:underline">
          Read more
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;
