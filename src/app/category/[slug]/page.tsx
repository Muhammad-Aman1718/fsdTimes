import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { getCategoryArticles, getCategoryData } from "@/constant/data";

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
