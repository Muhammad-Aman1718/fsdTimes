// import React from "react";
// import SideBar from "@/components/layout/SideBar";
// import PostCard from "@/components/news/PostCard";
// import Link from "next/link";

// // =============================
// // Static Data (Home Page Example)
// // =============================
// const featuredPost = {
//   title: "How to Master Next.js Development",
//   summary:
//     "A comprehensive guide to building modern web applications with Next.js, including best practices, tips, and real-world examples.",
//   imageUrl: "/public/assets/images.jpeg",
//   category: "Programming",
//   date: "2024-01-15",
//   readTime: "8 min read",
//   url: "/article/mastering-nextjs",
// };

// const latestPosts = [
//   {
//     title: "The Future of Web Development in 2024",
//     summary:
//       "Exploring upcoming trends, technologies, and innovations that will shape the future of web development.",
//     imageUrl: "/public/assets/images.jpeg",
//     category: "Technology",
//     date: "2024-01-14",
//     readTime: "6 min read",
//     url: "/article/future-web-dev-2024",
//   },
//   {
//     title: "Building Scalable React Applications",
//     summary:
//       "Learn the essential principles and patterns for creating maintainable and scalable React applications.",
//     imageUrl: "/public/assets/images.jpeg",
//     category: "React",
//     date: "2024-01-13",
//     readTime: "10 min read",
//     url: "/article/scalable-react-apps",
//   },
//   {
//     title: "TypeScript Best Practices Guide",
//     summary:
//       "A detailed guide to writing clean, type-safe code with TypeScript in modern web applications.",
//     imageUrl: "/public/assets/images.jpeg",
//     category: "TypeScript",
//     date: "2024-01-12",
//     readTime: "7 min read",
//     url: "/article/typescript-best-practices",
//   },
// ];

// const categories = [
//   { slug: "programming", name: "Programming" },
//   { slug: "technology", name: "Technology" },
//   { slug: "react", name: "React" },
//   { slug: "typescript", name: "TypeScript" },
//   { slug: "javascript", name: "JavaScript" },
//   { slug: "web-development", name: "Web Development" },
// ];

// const popularPosts = [
//   {
//     title: "Understanding React Hooks",
//     date: "2024-01-10",
//     url: "/article/react-hooks",
//   },
//   {
//     title: "CSS Grid vs Flexbox",
//     date: "2024-01-09",
//     url: "/article/css-grid-flexbox",
//   },
//   {
//     title: "JavaScript ES2024 Features",
//     date: "2024-01-08",
//     url: "/article/js-es2024",
//   },
// ];

// const tags = [
//   "Next.js",
//   "React",
//   "JavaScript",
//   "TypeScript",
//   "Web Development",
//   "Frontend",
//   "Backend",
//   "Full Stack",
//   "Programming",
//   "Coding",
// ];

// const HomePage = () => {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <header className="border-b border-gray-200">
//         <div className="max-w-screen-xl mx-auto px-4 py-8">
//           <h1 className="text-5xl font-serif text-center text-gray-900 mb-4">
//             The Faisalabad Times
//           </h1>
//           <div className="text-sm text-gray-600 text-center space-x-4">
//             <span>
//               {new Date().toLocaleDateString("en-US", {
//                 weekday: "long",
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </span>
//             <span>•</span>
//             <span>Daily Technology & Programming News</span>
//           </div>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
//         {/* Main Content */}
//         <div className="lg:col-span-8">
//           {/* Breaking News Banner */}
//           <div className="border-b-2 border-red-600 mb-8 pb-4">
//             <span className="font-serif font-bold text-red-600 mr-2">
//               BREAKING NEWS:
//             </span>
//             <span className="text-gray-900">
//               Latest updates on technology trends and innovations
//             </span>
//           </div>
//           {/* Featured Post */}
//           <section className="mb-12">
//             <h2 className="font-serif text-2xl mb-6 pb-2 border-b">
//               Featured Story
//             </h2>
//             <PostCard {...featuredPost} layout="horizontal"  />
//           </section>

//           {/* Latest Posts */}
//           <section>
//             <h2 className="font-serif text-2xl mb-6 pb-2 border-b">
//               Latest News
//             </h2>
//             <div className="space-y-8">
//               {latestPosts.map((post) => (
//                 <PostCard
//                   key={post.url}
//                   {...post}
//                   layout="horizontal"
//                   // size="medium"
//                 />
//               ))}
//             </div>
//           </section>

//           {/* Comments Section */}
//           <section className="mt-12">
//             <h2 className="font-serif text-2xl mb-6 pb-2 border-b">
//               Reader Opinions
//             </h2>
//             <div className="space-y-6">
//               {/* Sample Comments */}
//               <div className="border-l-2 border-gray-200 pl-4">
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2 text-sm text-gray-500">
//                     <span className="font-medium">John Doe</span>
//                     <span>•</span>
//                     <span>2 days ago</span>
//                   </div>
//                   <p className="text-gray-800 leading-relaxed">
//                     Great article about Next.js! The examples were very helpful.
//                   </p>
//                 </div>
//               </div>
//               <div className="border-l-2 border-gray-200 pl-4">
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2 text-sm text-gray-500">
//                     <span className="font-medium">Sarah Smith</span>
//                     <span>•</span>
//                     <span>3 days ago</span>
//                   </div>
//                   <p className="text-gray-800 leading-relaxed">
//                     The TypeScript guide was exactly what I needed. Looking forward to more content like this!
//                   </p>
//                 </div>
//               </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Sidebar */}
//         <aside className="lg:col-span-4 space-y-12">
//           {/* About Blog */}
//           <div>
//             <h3 className="font-serif text-xl mb-4 pb-2 border-b">About Us</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Welcome to The Faisalabad Times, your premier source for technology news, programming insights, and digital innovation coverage.
//             </p>
//           </div>

//           {/* Popular Posts */}
//           <div>
//             <h3 className="font-serif text-xl mb-4 pb-2 border-b">Most Read</h3>
//             <div className="space-y-4">
//               {popularPosts.map((post, index) => (
//                 <Link
//                   key={post.url}
//                   href={post.url}
//                   className="group flex items-start gap-3"
//                 >
//                   <span className="font-serif text-2xl text-gray-300">{index + 1}</span>
//                   <div>
//                     <h4 className="text-gray-900 group-hover:text-gray-600 transition-colors leading-snug">
//                       {post.title}
//                     </h4>
//                     <span className="text-sm text-gray-500">{post.date}</span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="font-serif text-xl mb-4 pb-2 border-b">News Categories</h3>
//             <div className="space-y-2">
//               {categories.map((category) => (
//                 <Link
//                   key={category.slug}
//                   href={`/category/${category.slug}`}
//                   className="block text-gray-800 hover:text-gray-600 transition-colors py-1"
//                 >
//                   {category.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Tags */}
//           <div>
//             <h3 className="font-serif text-xl mb-4 pb-2 border-b">Topics</h3>
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag) => (
//                 <Link
//                   key={tag}
//                   href={`/tag/${tag.toLowerCase()}`}
//                   className="text-gray-600 hover:text-gray-900 transition-colors"
//                 >
//                   #{tag}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </aside>

//       </div>
//     </main>
//   );
// };

// export default HomePage;

import React from "react";
import SideBar from "@/components/layout/SideBar";
import PostCard from "@/components/news/PostCard";

// =============================
// Static Data (Home Page Example)
// =============================
const featuredPost = {
  title: "How to Master Next.js Development",
  summary:
    "A comprehensive guide to building modern web applications with Next.js, including best practices, tips, and real-world examples.",
  imageUrl: "/public/assets/images.jpeg",
  category: "Programming",
  date: "2024-01-15",
  readTime: "8 min read",
  url: "/article/mastering-nextjs",
};

const latestPosts = [
  {
    title: "The Future of Web Development in 2024",
    summary:
      "Exploring upcoming trends, technologies, and innovations that will shape the future of web development.",
    imageUrl: "/public/assets/images.jpeg",
    category: "Technology",
    date: "2024-01-14",
    readTime: "6 min read",
    url: "/article/future-web-dev-2024",
  },
  {
    title: "Building Scalable React Applications",
    summary:
      "Learn the essential principles and patterns for creating maintainable and scalable React applications.",
    imageUrl: "/public/assets/images.jpeg",
    category: "React",
    date: "2024-01-13",
    readTime: "10 min read",
    url: "/article/scalable-react-apps",
  },
  {
    title: "TypeScript Best Practices Guide",
    summary:
      "A detailed guide to writing clean, type-safe code with TypeScript in modern web applications.",
    imageUrl: "/public/assets/images.jpeg",
    category: "TypeScript",
    date: "2024-01-12",
    readTime: "7 min read",
    url: "/article/typescript-best-practices",
  },
];

const categories = [
  { slug: "programming", name: "Programming" },
  { slug: "technology", name: "Technology" },
  { slug: "react", name: "React" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "web-development", name: "Web Development" },
];

const popularPosts = [
  {
    title: "Understanding React Hooks",
    date: "2024-01-10",
    url: "/article/react-hooks",
  },
  {
    title: "CSS Grid vs Flexbox",
    date: "2024-01-09",
    url: "/article/css-grid-flexbox",
  },
  {
    title: "JavaScript ES2024 Features",
    date: "2024-01-08",
    url: "/article/js-es2024",
  },
];

const tags = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Web Development",
  "Frontend",
  "Backend",
  "Full Stack",
  "Programming",
  "Coding",
];

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <h1 className="text-5xl font-serif text-center text-gray-900 mb-4">
            The Faisalabad Times
          </h1>
          <div className="text-sm text-gray-600 text-center space-x-4">
            <span>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>•</span>
            <span>Daily Technology & Programming News</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {/* Breaking News Banner */}
          <div className="border-b-2 border-red-600 mb-8 pb-4">
            <span className="font-serif font-bold text-red-600 mr-2">
              BREAKING NEWS:
            </span>
            <span className="text-gray-900">
              Latest updates on technology trends and innovations
            </span>
          </div>
          {/* Featured Post */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl mb-6 pb-2 border-b">
              Featured Story
            </h2>
            <PostCard {...featuredPost} layout="horizontal" size="large" />
          </section>

          {/* Latest Posts */}
          <section>
            <h2 className="font-serif text-2xl mb-6 pb-2 border-b">
              Latest News
            </h2>
            <div className="space-y-8">
              {latestPosts.map((post) => (
                <PostCard
                  key={post.url}
                  {...post}
                  layout="horizontal"
                  size="medium"
                />
              ))}
            </div>
          </section>

          {/* Comments Section */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl mb-6 pb-2 border-b">
              Reader Opinions
            </h2>
            <div className="space-y-6">
              {/* Sample Comments */}
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="font-medium">John Doe</span>
                    <span>•</span>
                    <span>2 days ago</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    Great article about Next.js! The examples were very helpful.
                  </p>
                </div>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="font-medium">Sarah Smith</span>
                    <span>•</span>
                    <span>3 days ago</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    The TypeScript guide was exactly what I needed. Looking forward to more content like this!
                  </p>
                </div>
              </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* About Blog */}
          <div>
            <h3 className="font-serif text-xl mb-4 pb-2 border-b">About Us</h3>
            <p className="text-gray-600 leading-relaxed">
              Welcome to The Faisalabad Times, your premier source for technology news, programming insights, and digital innovation coverage.
            </p>
          </div>

          {/* Popular Posts */}
          <div>
            <h3 className="font-serif text-xl mb-4 pb-2 border-b">Most Read</h3>
            <div className="space-y-4">
              {popularPosts.map((post, index) => (
                <Link
                  key={post.url}
                  href={post.url}
                  className="group flex items-start gap-3"
                >
                  <span className="font-serif text-2xl text-gray-300">{index + 1}</span>
                  <div>
                    <h4 className="text-gray-900 group-hover:text-gray-600 transition-colors leading-snug">
                      {post.title}
                    </h4>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </Link>
              ))}
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

          {/* Categories */}
          <div>
            <h3 className="font-serif text-xl mb-4 pb-2 border-b">News Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="block text-gray-800 hover:text-gray-600 transition-colors py-1"
                >
                  {category.name}
                </Link>
              ))}
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
