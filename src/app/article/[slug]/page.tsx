import React from "react";
import SideBar from "@/components/layout/SideBar";
import PostCard from "@/components/news/PostCard";
import { notFound } from "next/navigation";

// =============================
// Static Data (Articles Example)
// =============================
// Yahan par hum static articles ka array bana rahe hain
const articles = [
  {
    slug: "first-article",
    title: "First Article Title",
    author: "John Doe",
    date: "2024-06-01",
    readTime: "5 min read",
    imageUrl: "/public/assets/images.jpeg",
    content: `<p>This is the <strong>content</strong> of the first article. Blogging layout demo.</p>`,
  },
  {
    slug: "second-article",
    title: "Second Article Title",
    author: "Jane Smith",
    date: "2024-06-02",
    readTime: "3 min read",
    imageUrl: "/public/assets/images.jpeg",
    content: `<p>This is the <strong>content</strong> of the second article. Blogging layout demo.</p>`,
  },
];

// Related posts ke liye bhi static data
const related = [
  {
    title: "Related Post 1",
    summary: "Summary of related post 1.",
    imageUrl: "/public/assets/images.jpeg",
    category: "Tech",
    date: "2024-06-03",
    url: "/article/first-article",
  },
  {
    title: "Related Post 2",
    summary: "Summary of related post 2.",
    imageUrl: "/public/assets/images.jpeg",
    category: "News",
    date: "2024-06-04",
    url: "/article/second-article",
  },
];

// =============================
// Article Page Component
// =============================
interface ArticlePageProps {
  params: { slug: string };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  // Yahan hum slug ke basis par article dhoondh rahe hain
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    // Main layout: 3 columns (2 for article, 1 for sidebar)
    <main className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* ============================= */}
      {/* Article Content Section       */}
      {/* ============================= */}
      <article className="md:col-span-2 bg-white rounded-lg shadow p-6">
        {/* Article Title */}
        <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
        {/* Author, Date, Read Time */}
        <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        {/* Article Image */}
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 object-cover rounded mb-6"
          />
        )}
        {/* Article Content (HTML) */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* ============================= */}
      {/* Sidebar: Related Posts        */}
      {/* ============================= */}
      <aside className="md:col-span-1">
        <SideBar title="Related Posts">
          <div className="space-y-4">
            {related.map((post) => (
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
        </SideBar>
      </aside>
    </main>
  );
};

export default ArticlePage;
