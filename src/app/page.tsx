import React from "react";
import SideBar from "@/components/layout/SideBar";
import PostCard from "@/components/news/PostCard";

// =============================
// Static Data (Home Page Example)
// =============================
const featuredPost = {
  title: "Featured Post",
  summary: "This is the featured post summary.",
  imageUrl: "/public/assets/images.jpeg",
  category: "Tech",
  date: "2024-06-01",
  url: "/article/first-article",
};

const latestPosts = [
  {
    title: "Latest Post 1",
    summary: "Summary of latest post 1.",
    imageUrl: "/public/assets/images.jpeg",
    category: "News",
    date: "2024-06-02",
    url: "/article/second-article",
  },
  {
    title: "Latest Post 2",
    summary: "Summary of latest post 2.",
    imageUrl: "/public/assets/images.jpeg",
    category: "Lifestyle",
    date: "2024-06-03",
    url: "/article/first-article",
  },
];

const categories = [
  { slug: "tech", name: "Tech" },
  { slug: "news", name: "News" },
  { slug: "lifestyle", name: "Lifestyle" },
];

const HomePage = () => {
  return (
    // Main layout: 2 columns (main + sidebar)
    <main className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* ============================= */}
      {/* Main Content Section          */}
      {/* ============================= */}
      <section className="md:col-span-2 space-y-8">
        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-2">Featured</h2>
          <PostCard {...featuredPost} layout="horizontal" />
        </div>
        {/* Latest Posts */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <PostCard key={post.url} {...post} layout="vertical" />
            ))}
          </div>
        </div>
        {/* Categories */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <a href={`/category/${cat.slug}`} className="text-blue-600 hover:underline">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
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

export default HomePage;
