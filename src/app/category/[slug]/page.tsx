import React from "react";
import { getCategoryData, getCategoryArticles } from "@/constant/data";
import PostCard from "@/components/news/PostCard";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: { slug: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const category = getCategoryData(params.slug);
  const articles = getCategoryArticles(params.slug);
  if (!category || !articles) return notFound();

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
        <p className="text-gray-600 text-lg">{category.description}</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <PostCard
            key={article.url}
            title={article.title}
            summary={article.summary}
            imageUrl={article.imageUrl}
            category={article.category}
            date={article.date}
            readTime={article.readTime}
            url={article.url}
          />
        ))}
      </section>
    </main>
  );
};

export default CategoryPage;