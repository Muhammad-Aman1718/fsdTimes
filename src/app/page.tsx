import React from "react";
import HeroSection from "../components/news/HeroSection";
import TrendingArticles from "../components/news/TrendingArticles";
import CategorySection from "../components/news/CategorySection";
import PostCard from "@/components/news/PostCard";

export default function Home() {
  // Mock data - in a real app, this would come from an API or CMS
  const heroData = {
    mainArticle: {
      title: "Global Leaders Gather for Climate Summit as Temperatures Soar",
      summary:
        "World leaders are meeting in Geneva this week for a critical climate summit as global temperatures reach record highs for the third consecutive month.",
      imageUrl: "/images/climate-summit.jpg",
      category: "Climate",
      url: "/article/climate-summit",
      date: "June 10, 2024",
    },
    secondaryArticles: [
      {
        title: "Tech Giants Face New Regulations in European Union",
        imageUrl: "/images/tech-regulations.jpg",
        category: "Technology",
        url: "/article/tech-regulations",
        date: "June 9, 2024",
      },
      {
        title:
          "Medical Breakthrough: New Treatment Shows Promise for Alzheimer's",
        imageUrl: "/images/medical-research.jpg",
        category: "Health",
        url: "/article/alzheimers-treatment",
        date: "June 8, 2024",
      },
    ],
  };

  const trendingArticles = [
    {
      title: "Housing Market Cools as Interest Rates Continue to Rise",
      imageUrl: "/images/housing-market.jpg",
      category: "Business",
      url: "/article/housing-market",
      date: "June 7, 2024",
      readTime: "3 min read",
    },
    {
      title: "Broadway Revival: Classic Shows Return with Modern Twists",
      imageUrl: "/images/broadway.jpg",
      category: "Arts",
      url: "/article/broadway-revival",
      date: "June 6, 2024",
      readTime: "3 min read",
    },
    {
      title: "New Study Links Extreme Weather to Climate Change",
      imageUrl: "/images/extreme-weather.jpg",
      category: "Science",
      url: "/article/extreme-weather-study",
      date: "June 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Film Festival Highlights Emerging Global Talent",
      imageUrl: "/images/film-festival.jpg",
      category: "Movies",
      url: "/article/film-festival",
      date: "June 4, 2024",
      readTime: "4 min read",
    },
  ];

  const technologyArticles = [
    {
      title: "Tech Giants Face New Regulations in European Union",
      summary:
        "The EU has introduced sweeping new regulations aimed at curbing the power of major technology companies.",
      imageUrl: "/images/tech-regulations.jpg",
      category: "Technology",
      url: "/article/tech-regulations",
      date: "June 9, 2024",
      readTime: "4 min read",
    },
    {
      title: "AI Assistants Becoming More Human-Like in Latest Update",
      summary:
        "New advancements in AI technology are making virtual assistants more conversational and intuitive than ever before.",
      imageUrl: "/images/ai-assistants.jpg",
      category: "Technology",
      url: "/article/ai-assistants",
      date: "June 7, 2024",
      readTime: "5 min read",
    },
    {
      title: "Quantum Computing Breakthrough Could Revolutionize Data Security",
      summary:
        "Scientists have achieved a significant milestone in quantum computing that may transform how we approach encryption.",
      imageUrl: "/images/quantum-computing.jpg",
      category: "Technology",
      url: "/article/quantum-computing",
      date: "June 5, 2024",
      readTime: "7 min read",
    },
  ];

  const healthArticles = [
    {
      title:
        "Medical Breakthrough: New Treatment Shows Promise for Alzheimer's",
      summary:
        "Researchers have developed a new treatment that shows significant promise in slowing the progression of Alzheimer's disease.",
      imageUrl: "/images/medical-research.jpg",
      category: "Health",
      url: "/article/alzheimers-treatment",
      date: "June 8, 2024",
      readTime: "5 min read",
    },
    {
      title: "Study Reveals Benefits of Intermittent Fasting for Longevity",
      summary:
        "New research suggests that intermittent fasting may have significant benefits for extending lifespan and improving health.",
      imageUrl: "/images/intermittent-fasting.jpg",
      category: "Health",
      url: "/article/intermittent-fasting",
      date: "June 6, 2024",
      readTime: "4 min read",
    },
    {
      title: "Mental Health Awareness Growing Among Young Adults",
      summary:
        "A new survey shows that younger generations are increasingly prioritizing mental health and seeking support when needed.",
      imageUrl: "/images/mental-health.jpg",
      category: "Health",
      url: "/article/mental-health-awareness",
      date: "June 3, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <HeroSection
          mainArticle={heroData.mainArticle}
          secondaryArticles={heroData.secondaryArticles}
        />

        <PostCard />

        {/* Trending Section */}
        {/* <TrendingArticles articles={trendingArticles} /> */}

    

        {/* Technology Section */}
        {/* <CategorySection
          title="Technology"
          categorySlug="technology"
          articles={technologyArticles}
        />

      // Health Section 
        <CategorySection
          title="Health"
          categorySlug="health"
          articles={healthArticles}
        /> */}

        {/* Newsletter Section */}
        {/* <section className="mb-12 bg-gray-100 rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest news and updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-3 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 font-medium rounded hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
