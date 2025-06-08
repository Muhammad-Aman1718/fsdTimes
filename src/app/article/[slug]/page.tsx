import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ArticleCard from '../../../components/news/ArticleCard';

// This would normally come from a CMS or API
const getArticleData = (slug: string) => {
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
    readTime: "5 min read"
  };
};

// This would normally come from a CMS or API
const getRelatedArticles = () => {
  // Mock data - in a real app, fetch from API
  return [
    {
      title: "Ocean Temperatures Hit New Record High in Pacific",
      summary: "Scientists report unprecedented ocean temperatures in the Pacific region, raising concerns about marine ecosystems.",
      imageUrl: "/images/ocean-temp.jpg",
      category: "Climate",
      url: "/article/ocean-temperatures",
      date: "June 8, 2024"
    },
    {
      title: "New Study Links Extreme Weather to Climate Change",
      summary: "Research provides strongest evidence yet of the connection between human activity and increasing extreme weather events.",
      imageUrl: "/images/extreme-weather.jpg",
      category: "Science",
      url: "/article/extreme-weather-study",
      date: "June 5, 2024"
    },
    {
      title: "Renewable Energy Investments Reach All-Time High",
      summary: "Global investments in renewable energy sources surpassed fossil fuels for the first time, marking a significant shift.",
      imageUrl: "/images/renewable-energy.jpg",
      category: "Business",
      url: "/article/renewable-investments",
      date: "June 3, 2024"
    }
  ];
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug);
  const relatedArticles = getRelatedArticles();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content area */}
          <article className="lg:col-span-8">
            <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded mb-4">
              {article.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <span>By {article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
            
            <div className="relative aspect-[16/9] w-full mb-6 rounded-lg overflow-hidden">
              <Image 
                src={article.imageUrl} 
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div 
              className="prose max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">Related Articles</h3>
              <div className="space-y-6">
                {relatedArticles.map((article, index) => (
                  <div key={index} className="group">
                    <Link href={article.url}>
                      <div className="relative aspect-[4/3] w-full mb-3 overflow-hidden rounded-lg">
                        <Image 
                          src={article.imageUrl} 
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                            {article.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                      <Link href={article.url}>{article.title}</Link>
                    </h4>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{article.summary}</p>
                    <div className="text-sm text-gray-500">{article.date}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-100 p-6 mt-8 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Subscribe to our Newsletter</h3>
                <p className="text-sm mb-4">Get the latest news delivered to your inbox every morning.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 text-white py-2 font-medium rounded hover:bg-red-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}