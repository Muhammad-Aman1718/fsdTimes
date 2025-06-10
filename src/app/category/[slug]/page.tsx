import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

// This would normally come from a CMS or API
const getCategoryData = (slug: string) => {
  // Mock data - in a real app, fetch from API based on slug
  const categories: Record<string, { title: string; description: string }> = {
    technology: {
      title: "Technology",
      description:
        "Latest news and updates from the world of technology, gadgets, and digital innovation.",
    },
    business: {
      title: "Business",
      description:
        "Business news, market trends, economic updates, and corporate developments.",
    },
    health: {
      title: "Health",
      description:
        "Health news, medical research, wellness tips, and healthcare developments.",
    },
    climate: {
      title: "Climate",
      description:
        "Climate change news, environmental updates, and sustainability initiatives.",
    },
    trending: {
      title: "Trending",
      description:
        "Most popular and trending stories from across all categories.",
    },
  };

  return (
    categories[slug] || {
      title: "Category",
      description: "Latest news and updates.",
    }
  );
};

// This would normally come from a CMS or API
const getCategoryArticles = (slug: string) => {
  // Mock data - in a real app, fetch from API based on slug
  const articles = [
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
      title: "Housing Market Cools as Interest Rates Continue to Rise",
      summary:
        "The housing market is showing signs of cooling as mortgage rates reach their highest levels in over a decade.",
      imageUrl: "/images/housing-market.jpg",
      category: "Business",
      url: "/article/housing-market",
      date: "June 7, 2024",
      readTime: "3 min read",
    },
    {
      title: "Global Leaders Gather for Climate Summit as Temperatures Soar",
      summary:
        "World leaders are meeting in Geneva this week for a critical climate summit as global temperatures reach record highs for the third consecutive month.",
      imageUrl: "/images/climate-summit.jpg",
      category: "Climate",
      url: "/article/climate-summit",
      date: "June 10, 2024",
      readTime: "5 min read",
    },
    {
      title: "Ocean Temperatures Hit New Record High in Pacific",
      summary:
        "Scientists report unprecedented ocean temperatures in the Pacific region, raising concerns about marine ecosystems.",
      imageUrl: "/images/ocean-temp.jpg",
      category: "Climate",
      url: "/article/ocean-temperatures",
      date: "June 8, 2024",
      readTime: "4 min read",
    },
    {
      title: "New Study Links Extreme Weather to Climate Change",
      summary:
        "Research provides strongest evidence yet of the connection between human activity and increasing extreme weather events.",
      imageUrl: "/images/extreme-weather.jpg",
      category: "Science",
      url: "/article/extreme-weather-study",
      date: "June 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Renewable Energy Investments Reach All-Time High",
      summary:
        "Global investments in renewable energy sources surpassed fossil fuels for the first time, marking a significant shift.",
      imageUrl: "/images/renewable-energy.jpg",
      category: "Business",
      url: "/article/renewable-investments",
      date: "June 3, 2024",
      readTime: "4 min read",
    },
    {
      title: "Broadway Revival: Classic Shows Return with Modern Twists",
      summary:
        "Several classic Broadway shows are being revived with contemporary interpretations that speak to today's audiences.",
      imageUrl: "/images/broadway.jpg",
      category: "Arts",
      url: "/article/broadway-revival",
      date: "June 6, 2024",
      readTime: "3 min read",
    },
    {
      title: "Film Festival Highlights Emerging Global Talent",
      summary:
        "This year's International Film Festival showcased remarkable works from first-time directors across the globe.",
      imageUrl: "/images/film-festival.jpg",
      category: "Movies",
      url: "/article/film-festival",
      date: "June 4, 2024",
      readTime: "4 min read",
    },
  ];

  // Filter articles based on category (for demo purposes)
  if (slug !== "trending") {
    return articles.filter(
      (article) => article.category.toLowerCase() === slug.toLowerCase()
    );
  }

  // Return all articles for 'trending' category
  return articles;
};

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const category = getCategoryData(params.slug);
  const articles = getCategoryArticles(params.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {category.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="group">
              <Link href={article.url}>
                <div className="relative aspect-[4/3] w-full mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
              </Link>
              <h3 className="font-bold text-xl mb-2 group-hover:text-red-600 transition-colors">
                <Link href={article.url}>{article.title}</Link>
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {article.summary}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-gray-600">
              Check back later for updates in this category.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
export default CategoryPage;
