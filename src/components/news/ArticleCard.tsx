import Image from 'next/image';
import Link from 'next/link';

type ArticleCardProps = {
  title: string;
  summary?: string;
  imageUrl?: string;
  category: string;
  url: string;
  compact?: boolean;
};

export default function ArticleCard({ 
  title, 
  summary, 
  imageUrl, 
  category, 
  url,
  compact = false
}: ArticleCardProps) {
  return (
    <article className={`${compact ? 'pb-4 mb-4' : 'pb-6 mb-6'} border-b border-gray-200`}>
      <div className="flex flex-col">
        {imageUrl && (
          <Link href={url} className="mb-3">
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src={imageUrl} 
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        )}
        <span className="text-xs font-medium uppercase tracking-wider">{category}</span>
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-serif font-bold mt-2 mb-2`}>
          <Link href={url} className="hover:underline">{title}</Link>
        </h3>
        {summary && <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>}
      </div>
    </article>
  );
}