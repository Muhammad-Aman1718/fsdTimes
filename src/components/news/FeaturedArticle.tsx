import Image from "next/image";
import Link from "next/link";

type FeaturedArticleProps = {
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  url: string;
};

const FeaturedArticle = ({
  title,
  summary,
  imageUrl,
  category,
  url,
}: FeaturedArticleProps) => {
  return (
    <article className="border-b border-gray-200 pb-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link href={url}>
            <div className="relative aspect-[4/3] w-full">
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            </div>
          </Link>
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-wider">
            {category}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2 mb-3">
            <Link href={url} className="hover:underline">
              {title}
            </Link>
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;
