import React from "react";
import { getArticleData, getRelatedArticles } from "@/constant/data";
import SideBar from "@/components/layout/SideBar";
import PostCard from "@/components/news/PostCard";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: { slug: string };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const article = getArticleData(params.slug);
  if (!article) return notFound();
  const related = getRelatedArticles();

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Article Content */}
      <article className="md:col-span-2 bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 object-cover rounded mb-6"
          />
        )}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Sidebar: Related Posts */}
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
                // small
              />
            ))}
          </div>
        </SideBar>
      </aside>
    </main>
  );
};

export default ArticlePage;
