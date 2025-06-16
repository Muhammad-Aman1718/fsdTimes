import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-serif font-bold border-b border-black inline-block mb-6">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
