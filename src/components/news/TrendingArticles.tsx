import Image from 'next/image';
import Link from 'next/link';

type TrendingArticle = {
  title: string;
  imageUrl: string;
  category: string;
  url: string;
  date: string;
  readTime: string;
};

type TrendingArticlesProps = {
  articles: TrendingArticle[];
};

export default function TrendingArticles({ articles }: TrendingArticlesProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Trending</h2>
        <Link href="/category/trending" className="text-red-600 font-medium hover:underline">
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h3 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
              <Link href={article.url}>{article.title}</Link>
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}