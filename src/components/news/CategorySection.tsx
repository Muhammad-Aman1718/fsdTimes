import React from "react";

interface CategorySectionProps {
  categoryTitle?: string;
  children?: React.ReactNode;
}

const CategorySection = ({ categoryTitle, children }: CategorySectionProps) => {
  return (
    <section>
      <div className=" flex justify-between items-center px-2.5 ">
        <h2 className=" leading-4 text-[18px] font-bold   ">
          Category News {categoryTitle}
        </h2>
        <button className=" text-[14px] leading-3 cursor-pointer ">
          read more
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;
