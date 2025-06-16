export const getArticleData = (slug: string) => {
  // Mock data - in a real app, fetch from API based on slug
  return {
    title: "Global Leaders Gather for Climate Summit as Temperatures Soar",
    content: `<p>World leaders are meeting in Geneva this week for a critical climate summit as global temperatures reach record highs for the third consecutive month.</p>
    <p>The summit, which brings together representatives from over 190 countries, aims to address the urgent need for more ambitious climate action in light of increasingly severe weather events and rising global temperatures.</p>
    <p>UN Secretary-General António Guterres opened the conference with a stark warning: "We are on a highway to climate hell with our foot still on the accelerator."</p>
    <h2>Key Issues on the Agenda</h2>
    <p>The summit will focus on several critical areas:</p>
    <ul>
      <li>Increasing national commitments to reduce greenhouse gas emissions</li>
      <li>Mobilizing climate finance for developing nations</li>
      <li>Addressing loss and damage from climate impacts</li>
      <li>Accelerating the transition to renewable energy</li>
    </ul>
    <p>Developing nations are expected to push for more financial support from wealthy countries, which have historically contributed the most to carbon emissions.</p>
    <h2>Public Pressure Mounts</h2>
    <p>Outside the conference venue, thousands of climate activists have gathered to demand more urgent action. The demonstrations are part of a global movement that has gained momentum in recent years.</p>
    <p>"The time for incremental steps is long past," said climate activist Sophia Chen. "We need transformative change now."</p>
    <p>As temperatures continue to rise and extreme weather events become more frequent, the pressure on world leaders to deliver meaningful results has never been greater.</p>`,
    imageUrl: "/images/climate-summit.jpg",
    category: "Climate",
    author: "Jane Smith",
    date: "June 10, 2024",
    readTime: "5 min read",
  };
};

export const getRelatedArticles = () => {
  return [
    {
      title: "Ocean Temperatures Hit New Record High in Pacific",
      summary:
        "Scientists report unprecedented ocean temperatures in the Pacific region, raising concerns about marine ecosystems.",
      imageUrl: "/images/ocean-temp.jpg",
      category: "Climate",
      url: "/article/ocean-temperatures",
      date: "June 8, 2024",
    },
    {
      title: "New Study Links Extreme Weather to Climate Change",
      summary:
        "Research provides strongest evidence yet of the connection between human activity and increasing extreme weather events.",
      imageUrl: "/images/extreme-weather.jpg",
      category: "Science",
      url: "/article/extreme-weather-study",
      date: "June 5, 2024",
    },
    {
      title: "Renewable Energy Investments Reach All-Time High",
      summary:
        "Global investments in renewable energy sources surpassed fossil fuels for the first time, marking a significant shift.",
      imageUrl: "/images/renewable-energy.jpg",
      category: "Business",
      url: "/article/renewable-investments",
      date: "June 3, 2024",
    },
  ];
};

export const getCategoryData = (slug: string) => {
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

export const getCategoryArticles = (slug: string) => {
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

export const menuItems = [
  "Politics",
  "F.S.D.",
  "Business",
  "Opinion",
  "Science",
  "Health",
  "Sports",
  "Arts",
  "Books",
  "Style",
  "Food",
  "Travel",
];
