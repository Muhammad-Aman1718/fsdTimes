import React from "react";
import PostCard from "@/components/news/PostCard";
import CategorySection from "@/components/news/CategorySection";
import Link from "next/link";

// Static blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    summary:
      "Learn the basics of Next.js and how to build modern web applications.",
    imageUrl: "/next.svg",
    category: "Technology",
    date: "June 15, 2024",
    readTime: "5 min read",
    content:
      "<p>Next.js is a React framework that enables server-side rendering and static site generation...</p>",
    comments: [
      {
        id: 1,
        author: "John Doe",
        content: "Great article! Very helpful for beginners.",
        date: "June 16, 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        content:
          "I've been using Next.js for a while and this covers all the basics nicely.",
        date: "June 17, 2024",
      },
    ],
  },
  {
    id: 2,
    title: "The Future of Web Development",
    summary: "Exploring emerging trends and technologies in web development.",
    imageUrl: "/vercel.svg",
    category: "Technology",
    date: "June 10, 2024",
    readTime: "7 min read",
    content:
      "<p>The web development landscape is constantly evolving with new frameworks and tools...</p>",
    comments: [
      {
        id: 1,
        author: "Alex Johnson",
        content: "Interesting perspective on where web dev is heading.",
        date: "June 11, 2024",
      },
    ],
  },
];

// const Home = () => {
//   return (
//     <main className="max-w-screen-xl mx-auto px-4 py-8 space-y-12">
//       {/* Featured Posts */}
//       <section className="space-y-8">
//         <h2 className="text-2xl font-bold">Latest Posts</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//             >
//               <PostCard
//                 title={post.title}
//                 summary={post.summary}
//                 imageUrl={post.imageUrl}
//                 category={post.category}
//                 date={post.date}
//                 readTime={post.readTime}
//                 url={`/article/${post.id}`}
//                 layout="vertical"
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* Comments Section */}
//       <section className="space-y-6">
//         <h2 className="text-2xl font-bold">Recent Comments</h2>
//         <div className="space-y-4">
//           {blogPosts
//             .flatMap((post) => post.comments)
//             .slice(0, 5)
//             .map((comment) => (
//               <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <span className="font-medium">{comment.author}</span>
//                   <span className="text-gray-500 text-sm">{comment.date}</span>
//                 </div>
//                 <p className="text-gray-700">{comment.content}</p>
//               </div>
//             ))}
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="bg-blue-50 p-6 rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Subscribe to our newsletter</h2>
//         <form className="flex flex-col sm:flex-row gap-2">
//           <input
//             type="email"
//             placeholder="Your email address"
//             className="flex-grow px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
//           >
//             Subscribe
//           </button>
//         </form>
//       </section>
//     </main>
//   );
// };
//             <div
//               key={article.url}
//               className="relative hover:bg-gray-50 transition-colors"
//             >
//               <PostCard
//                 title={article.title}
//                 summary={article.summary}
//                 imageUrl={article.imageUrl}
//                 category={article.category}
//                 date={article.date}
//                 readTime={article.readTime}
//                 url={article.url}
//               />
//             </div>
//           ))}
//         </CategorySection>
//       </section>

//       {/* View All Categories Button */}
//       <section className="flex justify-center">
//         <Link
//           href="/category"
//           className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-colors"
//         >
//           View All Categories
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default Home;

// import React from "react";
// import PostCard from "@/components/news/PostCard";
// import CategorySection from "@/components/news/CategorySection";
import { getCategoryArticles, getCategoryData } from "@/constant/data";
// import Link from "next/link";

const featuredCategories = [
  "technology",
  "business",
  "climate",
  "health",
  "sports",
  "politics",
  "entertainment",
  "science",
];

const Home = async () => {
  // Get articles for featured categories
  const featuredSections = featuredCategories.map((slug) => ({
    ...getCategoryData(slug),
    articles: getCategoryArticles(slug).slice(0, 4),
    slug,
  }));

  const trendingArticles = getCategoryArticles("trending").slice(0, 10);
  const latestArticles = getCategoryArticles("latest").slice(0, 8);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Magazine Style Hero Section */}
        <section className="mb-12">
          <div className="grid grid-cols-12 gap-6 h-[600px]">
            {/* Main Featured Article - Large */}
            <div className="col-span-12 lg:col-span-8 bg-white rounded-xl shadow-lg overflow-hidden">
              {trendingArticles[0] && (
                <PostCard
                  title={trendingArticles[0].title}
                  summary={trendingArticles[0].summary}
                  imageUrl={trendingArticles[0].imageUrl}
                  category={trendingArticles[0].category}
                  date={trendingArticles[0].date}
                  readTime={trendingArticles[0].readTime}
                  url={trendingArticles[0].url}
                  layout="vertical"
                />
              )}
            </div>

            {/* Side Stories */}
            <div className="col-span-12 lg:col-span-4 space-y-4">
              {trendingArticles.slice(1, 4).map((article, index) => (
                <div
                  key={article.url}
                  className="bg-white rounded-xl shadow-md h-[186px] overflow-hidden"
                >
                  <PostCard
                    title={article.title}
                    summary={article.summary}
                    imageUrl={article.imageUrl}
                    category={article.category}
                    date={article.date}
                    readTime={article.readTime}
                    url={article.url}
                    layout="horizontal"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry Style Latest Articles */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Latest Stories</h2>
            <Link
              href="/latest"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Featured article - spans 2 columns */}
            <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
              {latestArticles[0] && (
                <PostCard
                  title={latestArticles[0].title}
                  summary={latestArticles[0].summary}
                  imageUrl={latestArticles[0].imageUrl}
                  category={latestArticles[0].category}
                  date={latestArticles[0].date}
                  readTime={latestArticles[0].readTime}
                  url={latestArticles[0].url}
                  layout="vertical"
                />
              )}
            </div>

            {/* Regular articles */}
            {latestArticles.slice(1, 7).map((article, index) => (
              <div
                key={article.url}
                className={`bg-white rounded-xl shadow-md overflow-hidden ${
                  index === 1 ? "lg:row-span-2" : ""
                }`}
              >
                <PostCard
                  title={article.title}
                  summary={article.summary}
                  imageUrl={article.imageUrl}
                  category={article.category}
                  date={article.date}
                  readTime={article.readTime}
                  url={article.url}
                  layout="vertical"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Category Tabs Style */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Browse Categories
            </h2>

            {/* Category Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b">
              {featuredCategories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                    index === 0
                      ? "bg-red-600 text-white"
                      : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  {getCategoryData(category).title}
                </button>
              ))}
            </div>

            {/* Category Content - Show first category by default */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSections[0].articles.map((article) => (
                <div
                  key={article.url}
                  className="hover:bg-gray-50 p-3 rounded-lg transition-colors"
                >
                  <PostCard
                    title={article.title}
                    summary={article.summary}
                    imageUrl={article.imageUrl}
                    category={article.category}
                    date={article.date}
                    readTime={article.readTime}
                    url={article.url}
                    layout="vertical"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newspaper Style Section */}
        <section className="mb-12">
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">🔥 Trending Now</h2>
              <p className="text-gray-300">Most popular stories this week</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main trending story */}
              <div className="lg:col-span-2">
                {trendingArticles[4] && (
                  <div className="bg-white rounded-xl overflow-hidden">
                    <PostCard
                      title={trendingArticles[4].title}
                      summary={trendingArticles[4].summary}
                      imageUrl={trendingArticles[4].imageUrl}
                      category={trendingArticles[4].category}
                      date={trendingArticles[4].date}
                      readTime={trendingArticles[4].readTime}
                      url={trendingArticles[4].url}
                      layout="vertical"
                    />
                  </div>
                )}
              </div>

              {/* Trending list */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold border-b border-gray-700 pb-2">
                  Top Stories
                </h3>
                {trendingArticles.slice(5, 9).map((article, index) => (
                  <div
                    key={article.url}
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="text-2xl font-bold text-red-400 w-8">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <Link href={article.url}>
                        <h4 className="text-white font-medium hover:text-red-400 transition-colors line-clamp-2 text-sm">
                          {article.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1 text-xs text-gray-400">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pinterest Style Categories */}
        {/* Interactive Category Explorer */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Discover Stories by Interest
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive deep into topics that matter to you. Each category is curated
              with the most engaging and insightful content.
            </p>
          </div>

          {/* Interactive Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredSections.slice(1, 8).map((category, index) => {
              const categoryIcons = {
                technology: "💻",
                business: "📈",
                climate: "🌍",
                health: "🏥",
                sports: "⚽",
                politics: "🏛️",
                entertainment: "🎬",
                science: "🔬",
              };

              const gradients = [
                "from-blue-500 to-purple-600",
                "from-green-500 to-teal-600",
                "from-orange-500 to-red-600",
                "from-purple-500 to-pink-600",
                "from-teal-500 to-blue-600",
                "from-red-500 to-orange-600",
                "from-indigo-500 to-purple-600",
                "from-emerald-500 to-blue-600",
              ];

              return (
                <div
                  key={category.slug}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Category Header with Gradient */}
                  <div
                    className={`bg-gradient-to-br ${gradients[index % gradients.length]} p-6 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">
                          {categoryIcons[category.slug] || "📰"}
                        </span>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-sm font-medium">
                            {category.articles.length} stories
                          </span>
                        </div>
                      </div>
                      <h3 className="font-bold text-xl capitalize mb-2">
                        {category.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        Latest updates and insights
                      </p>
                    </div>
                  </div>

                  {/* Articles Preview */}
                  <div className="p-5">
                    <div className="space-y-4 mb-5">
                      {category.articles
                        .slice(0, 2)
                        .map((article, articleIndex) => (
                          <div
                            key={article.url}
                            className="border-l-4 border-gray-200 pl-4 hover:border-red-500 transition-colors duration-200"
                          >
                            <PostCard
                              title={article.title}
                              summary={article.summary}
                              imageUrl={article.imageUrl}
                              category={article.category}
                              date={article.date}
                              readTime={article.readTime}
                              url={article.url}
                              layout="minimal"
                              size="small"
                            />
                          </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Updated daily
                        </span>
                        <span>📊 Trending</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/category/${category.slug}`}
                      className="group/btn block w-full"
                    >
                      <div className="bg-gray-50 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 rounded-xl p-4 text-center transition-all duration-300 group-hover/btn:text-white">
                        <div className="flex items-center justify-center gap-2">
                          <span className="font-semibold">
                            Explore {category.title}
                          </span>
                          <svg
                            className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                        <div className="text-sm mt-1 opacity-75">
                          {category.articles.length} articles waiting
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-lg p-6">
              <div className="text-4xl">🎯</div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800">
                  Can't find what you're looking for?
                </h3>
                <p className="text-gray-600 text-sm">
                  Browse all categories or use our smart search
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/categories"
                  className="px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  All Categories
                </Link>
                <Link
                  href="/search"
                  className="px-6 py-3 border-2 border-gray-200 text-gray-600 font-medium rounded-xl hover:border-red-600 hover:text-red-600 transition-colors duration-200"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Stay Updated with Latest News
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of readers who get the freshest stories delivered to
            their inbox every day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/categories"
              className="px-6 py-2 bg-white text-red-600 font-medium rounded-lg shadow hover:shadow-md transition-shadow"
            >
              All Categories
            </Link>
            <Link
              href="/about"
              className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              About Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
