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
    <main className=" max-w-screen-xl mx-auto px-2.5 py-8">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <CategorySection categoryTitle="Latest News" layout="list">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="relative">
              <PostCard
                title={`Article Title ${i + 1}`}
                summary="Article Summary"
                imageUrl="/article-image.jpg"
                category="Category"
                date="2023-01-01"
                readTime="5 min read"
                url="/article"
                layout="horizontal"
              />
              {/* {i !== 5 && (
                <span className="absolute right-0 top-0 h-full w-[1px] bg-black "></span>
              )} */}
            </div>
          ))}
        </CategorySection>
        <CategorySection categoryTitle="Tech News" layout="list">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="relative">
              <PostCard
                title={`Article Title ${i + 1}`}
                summary="Article Summary"
                imageUrl="/article-image.jpg"
                category="Category"
                date="2023-01-01"
                readTime="5 min read"
                url="/article"
                layout="horizontal"
              />
              {/* {i !== 5 && (
                <span className="absolute right-0 top-0 h-full w-[1px] bg-black "></span>
              )} */}
            </div>
          ))}
        </CategorySection>
      </div>
      <CategorySection categoryTitle="Popular Articles" layout="grid">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="relative">
            <PostCard
              title={`Article Title ${i + 1}`}
              summary="Article Summary"
              imageUrl="/article-image.jpg"
              category="Category"
              date="2023-01-01"
              readTime="5 min read"
              url="/article"
              // layout="horizontal"
            />
            {i !== 5 && (
              <span className="absolute right-0 top-0 h-full w-[1px] bg-black "></span>
            )}
          </div>
        ))}
      </CategorySection>
      <div className="grid grid-cols-2">
        <CategorySection categoryTitle="" layout="grid">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="relative">
              <PostCard
                title={`Article Title ${i + 1}`}
                summary="Article Summary"
                imageUrl="/article-image.jpg"
                category="Category"
                date="2023-01-01"
                readTime="5 min read"
                url="/article"
              />
              {i !== 2 && (
                <span className="absolute right-0 top-0 h-full w-[1px] bg-black "></span>
              )}
            </div>
          ))}
        </CategorySection>
        <CategorySection layout="grid">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="relative">
              <PostCard
                title={`Article Title ${i + 1}`}
                summary="Article Summary"
                imageUrl="/article-image.jpg"
                category="Category"
                date="2023-01-01"
                readTime="5 min read"
                url="/article"
              />
              {i !== 2 && (
                <span className="absolute right-0 top-0 h-full w-[1px] bg-black "></span>
              )}
            </div>
          ))}
        </CategorySection>
      </div>
      <CategorySection layout="grid">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="relative">
            <PostCard
              title={`Article Title ${i + 1}`}
              summary="Article Summary"
              imageUrl="/article-image.jpg"
              category="Category"
              date="2023-01-01"
              readTime="5 min read"
              url="/article"
            />
            {i !== 5 && (
              <span className="absolute right-0 top-0 h-full w-[1px] bg-black "></span>
            )}
          </div>
        ))}
      </CategorySection>
      <div className="grid grid-cols-2">
        <CategorySection layout="grid">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="relative">
              <PostCard
                title={`Article Title ${i + 1}`}
                summary="Article Summary"
                imageUrl="/article-image.jpg"
                category="Category"
                date="2023-01-01"
                readTime="5 min read"
                url="/article"
              />
              {i !== 2 && (
                <span className="absolute right-0 top-0 h-full w-[1px] bg-black "></span>
              )}
            </div>
          ))}
        </CategorySection>
        <CategorySection layout="grid">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="relative">
              <PostCard
                title={`Article Title ${i + 1}`}
                summary="Article Summary"
                imageUrl="/article-image.jpg"
                category="Category"
                date="2023-01-01"
                readTime="5 min read"
                url="/article"
              />
              {i !== 2 && (
                <span className="absolute right-0 top-0 h-full w-[1px] bg-black "></span>
              )}
            </div>
          ))}
        </CategorySection>
      </div>
    </main>
  );
};

export default Home;
