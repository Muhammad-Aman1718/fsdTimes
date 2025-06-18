import React from "react";

interface CategorySectionProps {
  categoryTitle?: string;
  children?: React.ReactNode;
}

const CategorySection = ({ categoryTitle, children }: CategorySectionProps) => {
  return (
    <section>
      <div>
        <h2 className=" leading-4 text-[18px] font-bold   ">
          Category News {categoryTitle}
        </h2>
        <button className=" text-[14px] leading-3 ">read more</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;
