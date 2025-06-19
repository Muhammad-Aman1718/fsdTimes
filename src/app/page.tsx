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
      {/* <CategorySection categoryTitle="Technology">
          <PostCard
            title="Article Title"
            summary="Article Summary"
            imageUrl="/article-image.jpg"
            category="Category"
            date="2023-01-01"
            readTime="5 min read"
            url="/article"
            // layout="horizontal"
          />
          <span className=" border w-[1px]  "></span>
          <PostCard
            title="Article Title"
            summary="Article Summary"
            imageUrl="/article-image.jpg"
            category="Category"
            date="2023-01-01"
            readTime="5 min read"
            url="/article"
            // layout="horizontal"
          />
          <span className=" border w-[1px]  "></span>
          <PostCard
            title="Article Title"
            summary="Article Summary"
            imageUrl="/article-image.jpg"
            category="Category"
            date="2023-01-01"
            readTime="5 min read"
            url="/article"
          />
          <span className=" border w-[1px]  "></span>
          <PostCard
            title="Article Title"
            summary="Article Summary"
            imageUrl="/article-image.jpg"
            category="Category"
            date="2023-01-01"
            readTime="5 min read"
            url="/article"
          />
          <span className=" border w-[1px]  "></span>
          <PostCard
            title="Article Title"
            summary="Article Summary"
            imageUrl="/article-image.jpg"
            category="Category"
            date="2023-01-01"
            readTime="5 min read"
            url="/article"
          />
          <span className=" border w-[1px]  "></span>
          <PostCard
            title="Article Title"
            summary="Article Summary"
            imageUrl="/article-image.jpg"
            category="Category"
            date="2023-01-01"
            readTime="5 min read"
            url="/article"
          />
          <span className=" border w-[1px]  "></span>
      </CategorySection> */}

      <CategorySection>
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
              <span className="absolute right-0 top-0 h-[150px] w-[1px] bg-black "></span>
            )}
          </div>
        ))}
      </CategorySection>
      <CategorySection>
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
              <span className="absolute right-0 top-0 h-[150px] w-[1px] bg-black "></span>
            )}
          </div>
        ))}
      </CategorySection>
      <CategorySection>
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
              <span className="absolute right-0 top-0 h-[150px] w-[1px] bg-black "></span>
            )}
          </div>
        ))}
      </CategorySection>
      <CategorySection>
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
              <span className="absolute right-0 top-0 h-[150px] w-[1px] bg-black "></span>
            )}
          </div>
        ))}
      </CategorySection>
      <CategorySection>
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
              <span className="absolute right-0 top-0 h-[150px] w-[1px] bg-black "></span>
            )}
          </div>
        ))}
      </CategorySection>
      <CategorySection>
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
              <span className="absolute right-0 top-0 h-[150px] w-[1px] bg-black "></span>
            )}
          </div>
        ))}
      </CategorySection>
    </main>
  );
};

export default Home;
