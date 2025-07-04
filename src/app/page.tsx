import React from "react";
import PostCard from "@/components/news/PostCard";
import CategorySection from "@/components/sections/CategorySection";
import { Post } from "@/types";
import HeroSection from "@/components/sections/HeroSection";

const posts: Post[] = [
  {
    title: "Pakistan's Tech Boom",
    summary: "The rise of technology startups in Pakistan...",
    imageUrl: "/images/tech.jpg",
    category: "Technology",
    date: "2025-07-04",
    slug: "pakistan-tech-boom",
    readTime: "4 min read",
  },
  {
    title: "Green Energy Progress",
    summary: "How solar is transforming rural areas...",
    imageUrl: "/images/green.jpg",
    category: "Environment",
    date: "2025-07-03",
    slug: "green-energy-progress",
    readTime: "5 min read",
  },
  {
    title: "AI Revolution in Pakistan",
    summary: "Universities are adopting AI curriculums...",
    imageUrl: "/images/ai.jpg",
    category: "AI",
    date: "2025-07-02",
    slug: "ai-revolution-pakistan",
    readTime: "3 min read",
  },
  {
    title: "Startup Funding Hits Record High",
    summary: "Local startups raise unprecedented seed rounds...",
    imageUrl: "/images/startup.jpg",
    category: "Startups",
    date: "2025-07-01",
    slug: "startup-funding-record",
    readTime: "4 min read",
  },
];

export default function Home() {
  const [featured, ...secondary] = posts;

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <HeroSection featured={featured} secondary={secondary.slice(0, 2)} />

      {/* Category Sections */}
      <CategorySection categoryTitle="Technology">
        {posts
          .filter((p) => p.category === "Technology")
          .map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
      </CategorySection>

      <CategorySection categoryTitle="Environment">
        {posts
          .filter((p) => p.category === "Environment")
          .map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
      </CategorySection>
    </main>
  );
}
