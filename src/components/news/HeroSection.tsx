import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  mainArticle: {
    title: string;
    summary: string;
    imageUrl: string;
    category: string;
    url: string;
    date: string;
  };
  secondaryArticles: {
    title: string;
    imageUrl: string;
    category: string;
    url: string;
    date: string;
  }[];
};

const HeroSection = ({ mainArticle, secondaryArticles }: HeroSectionProps) => {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main featured article */}
        <div className="lg:col-span-2">
          <article className="relative h-[500px] overflow-hidden rounded-lg">
            <Link href={mainArticle.url}>
              <div className="relative h-full w-full">
                <Image
                  src={mainArticle.imageUrl}
                  alt={mainArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded mb-2">
                      {mainArticle.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {mainArticle.title}
                    </h2>
                    <p className="text-sm md:text-base mb-2 text-gray-200">
                      {mainArticle.summary}
                    </p>
                    <div className="flex items-center text-sm">
                      <span>{mainArticle.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>

        {/* Secondary featured articles */}
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-4 h-full">
            {secondaryArticles.map((article, index) => (
              <article
                key={index}
                className="relative h-[240px] overflow-hidden rounded-lg"
              >
                <Link href={article.url}>
                  <div className="relative h-full w-full">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded mb-2">
                          {article.category}
                        </span>
                        <h3 className="text-lg font-bold">{article.title}</h3>
                        <div className="flex items-center text-xs mt-2">
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
