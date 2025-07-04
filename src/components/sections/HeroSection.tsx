// File: components/sections/HeroSection.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/index";
import PostCard from "@/components/news/PostCard";

interface HeroSectionProps {
  featured: Post;
  secondary: Post[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ featured, secondary }) => {
  return (
    <section className="grid lg:grid-cols-2 gap-6 mb-12">
      {/* Featured */}
      <Link
        href={`/article/${featured.slug}`}
        className="relative group block rounded-lg overflow-hidden"
      >
        <Image
          src={featured.imageUrl}
          alt={featured.title}
          width={800}
          height={500}
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-4 left-4 text-white max-w-[80%]">
          <span className="text-xs uppercase tracking-wider text-red-400">
            {featured.category}
          </span>
          <h1 className="text-2xl font-bold leading-snug mt-1">
            {featured.title}
          </h1>
        </div>
      </Link>

      {/* Secondary list */}
      <div className="grid sm:grid-cols-2 gap-4">
        {secondary.map((post) => (
          <PostCard key={post.slug} {...post} layout="vertical" />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
