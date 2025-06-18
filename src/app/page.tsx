import React from "react";
import PostCard from "@/components/news/PostCard";
import CategorySection from "@/components/news/CategorySection";

// // Types
// type Article = {
//   title: string;
//   summary: string;
//   imageUrl: string;
//   category: string;
//   date: string;
//   readTime?: string;
//   url: string;
// };

const Home = () => {
  return (
    <main className=" max-w-screen-xl  mx-auto px-4 py-8">
      <PostCard
        title="Article Title"
        summary="Article Summary"
        imageUrl="/article-image.jpg"
        category="Category"
        date="2023-01-01"
        readTime="5 min read"
        url="/article"
        layout="horizontal"
      />

      <CategorySection categoryTitle="Technology">
        <PostCard
          title="Article Title"
          summary="Article Summary"
          imageUrl="/article-image.jpg"
          category="Category"
          date="2023-01-01"
          readTime="5 min read"
          url="/article"
          layout="horizontal"
        />
        <PostCard
          title="Article Title"
          summary="Article Summary"
          imageUrl="/article-image.jpg"
          category="Category"
          date="2023-01-01"
          readTime="5 min read"
          url="/article"
          layout="horizontal"
        />
        <PostCard
          title="Article Title"
          summary="Article Summary"
          imageUrl="/article-image.jpg"
          category="Category"
          date="2023-01-01"
          readTime="5 min read"
          url="/article"
        />
        <PostCard
          title="Article Title"
          summary="Article Summary"
          imageUrl="/article-image.jpg"
          category="Category"
          date="2023-01-01"
          readTime="5 min read"
          url="/article"
        />
      </CategorySection>

      {/* <section className="mb-12">
        <h2 className="text-3xl font-serif font-bold mb-6 pb-2 border-b-2 border-red-600">
          Featured News
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <PostCard key={article.url} {...article} layout="horizontal" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-serif font-bold mb-6 pb-2 border-b-2 border-red-600">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((article) => (
            <PostCard key={article.url} {...article} layout="vertical" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-serif font-bold mb-6 pb-2 border-b-2 border-red-600">
          Politics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {politicsNews.map((article) => (
            <PostCard key={article.url} {...article} layout="horizontal" />
          ))}
        </div>
      </section> */}
    </main>
  );
};

export default Home;
