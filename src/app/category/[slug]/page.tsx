import React from "react";
import SideBar from "@/components/layout/SideBar";
import PostCard from "@/components/news/PostCard";

// =============================
// Static Data (Categories & Posts Example)
// =============================
// Yahan par hum static categories aur posts ka array bana rahe hain
const categoryPosts = [
  {
    slug: "tech",
    name: "Tech",
    posts: [
      {
        title: "Tech Post 1",
        summary: "Summary of tech post 1.",
        imageUrl: "/public/assets/images.jpeg",
        category: "Tech",
        date: "2024-06-05",
        url: "/article/first-article",
      },
      {
        title: "Tech Post 2",
        summary: "Summary of tech post 2.",
        imageUrl: "/public/assets/images.jpeg",
        category: "Tech",
        date: "2024-06-06",
        url: "/article/second-article",
      },
    ],
  },
  {
    slug: "news",
    name: "News",
    posts: [
      {
        title: "News Post 1",
        summary: "Summary of news post 1.",
        imageUrl: "/public/assets/images.jpeg",
        category: "News",
        date: "2024-06-07",
        url: "/article/first-article",
      },
    ],
  },
];

interface CategoryPageProps {
  params: { slug: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  // Yahan hum slug ke basis par category dhoondh rahe hain
  const category = categoryPosts.find((c) => c.slug === params.slug);
  if (!category) return <div>Category not found</div>;

  return (
    // Main layout: 2 columns (posts + sidebar)
    <main className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* ============================= */}
      {/* Category Posts Section        */}
      {/* ============================= */}
      <section className="md:col-span-2 bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">{category.name} Posts</h1>
        <div className="space-y-4">
          {category.posts.map((post) => (
            <PostCard
              key={post.url}
              title={post.title}
              summary={post.summary}
              imageUrl={post.imageUrl}
              category={post.category}
              date={post.date}
              url={post.url}
              layout="vertical"
            />
          ))}
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

export default CategoryPage;