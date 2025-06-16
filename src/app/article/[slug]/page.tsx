import Image from "next/image";
import Link from "next/link";
import { getArticleData, getRelatedArticles } from "@/constant/data";
// import { client } from "../../lib/sanity";
// import imageUrlBuilder from "@sanity/image-url";
// import { client } from "@/lib/sanity";

// import ArticleCard from "../../../components/news/ArticleCard";

// This would normally come from a CMS or API

// This would normally come from a CMS or API

const ArticlePage = ({ params }: { params: { slug: string } }) => {
  const article = getArticleData(params.slug);
  const relatedArticles = getRelatedArticles();

  // Image URL builder
  // const builder = imageUrlBuilder(client);
  // function urlFor(source: any) {
  //   return builder.image(source);
  // }

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content area */}
          <article className="lg:col-span-8">
            <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded mb-4">
              {article.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                Related Articles
              </h3>
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
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="text-sm text-gray-500">{article.date}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 p-6 mt-8 rounded-lg">
                <h3 className="font-bold text-lg mb-4">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-sm mb-4">
                  Get the latest news delivered to your inbox every morning.
                </p>
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

      {/* <Footer /> */}
    </div>
  );
};

export default ArticlePage;
