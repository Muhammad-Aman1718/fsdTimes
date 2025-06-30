import React from "react";
import Link from "next/link";
import { getCategoryData } from "@/constant/data";

const categorySlugs = [
  "technology",
  "business",
  "health",
  "climate",
  "trending",
  // Add more slugs if you add more categories in data.ts
];

const CategoriesPage = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Categories</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categorySlugs.map((slug) => {
          const category = getCategoryData(slug);
          return (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-100 hover:border-red-600"
            >
              <h2 className="text-xl font-semibold mb-2 text-red-600">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default CategoriesPage; 