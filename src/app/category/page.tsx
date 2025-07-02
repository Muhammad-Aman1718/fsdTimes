import React from "react";
import SideBar from "@/components/layout/SideBar";

// =============================
// Static Data (Categories Example)
// =============================
const categories = [
  { slug: "tech", name: "Tech" },
  { slug: "news", name: "News" },
  { slug: "lifestyle", name: "Lifestyle" },
];

const CategoryListPage = () => {
  return (
    // Main layout: 2 columns (categories + sidebar)
    <main className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* ============================= */}
      {/* Categories List Section       */}
      {/* ============================= */}
      <section className="md:col-span-2 bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">All Categories</h1>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <a href={`/category/${cat.slug}`} className="text-blue-600 hover:underline">
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ============================= */}
      {/* Sidebar: Static Content       */}
      {/* ============================= */}
      <aside className="md:col-span-1">
        <SideBar title="Sidebar">
          <div className="text-sm text-gray-500">Yahan aap kuch bhi static ya useful info rakh sakte hain.</div>
        </SideBar>
      </aside>
    </main>
  );
};

export default CategoryListPage; 