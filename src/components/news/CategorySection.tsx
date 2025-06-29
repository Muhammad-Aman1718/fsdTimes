import React from "react";

interface CategorySectionProps {
  categoryTitle?: string;
  children?: React.ReactNode;
  className?: string;
  layout?: "grid" | "list";
}

const CategorySection = ({
  categoryTitle,
  children,
  className,
  layout,
}: CategorySectionProps) => {
  return (
    <section>
      <div className=" flex justify-between items-center px-2.5 my-6 ">
        <h2 className=" leading-4 text-[18px] font-bold   ">{categoryTitle}</h2>
        <button className=" text-[14px] leading-3 cursor-pointer ">
          read more
        </button>
      </div>
      {/* <div className="flex flex-wrap"> */}
      <div
        className={` ${className} ${layout === "grid" ? "grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))]" : ""}   `}
      >
        {children}
      </div>
    </section>
  );
};

export default CategorySection;
