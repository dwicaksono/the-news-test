import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { MotionCard } from './motion-card';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
interface IArticleCard {
  headline: string;
  odd: boolean;
  web_url: string;
  multimedia: {
    url: string;
    height: number;
    width: number;
  };
  pub_date: string;
  author: string;
  index: number;
}
const ArticleCard: FC<IArticleCard> = ({
  headline,
  odd,
  multimedia,
  web_url,
  author,
  pub_date,
  index,
}) => {
  const imageUrl = multimedia?.url
    ? `${process.env.WEB_URL}/${multimedia.url}`
    : 'https://placehold.co/600x400/png';

  return (
    <Link href={web_url} target="_blank">
      <MotionCard
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * 0.1,
          ease: 'easeInOut',
          duration: 0.2,
        }}
        viewport={{ amount: 0 }}
        className="flex flex-col relative cursor-pointer group drop-shadow shadow-md"
      >
        <div
          className={`w-full md:w-1/2 flex justify-end absolute z-10 bg-slate-950/70 p-4 text-slate-50 max-h-48 text-wrap ${
            odd ? 'left-0' : 'right-0 text-right'
          }`}
        >
          <h3 className="font-bold text-4xl line-clamp-4">{headline}</h3>
        </div>
        <div
          className={`flex  grayscale group-hover:grayscale-0 ${
            odd ? 'justify-end' : 'justify-start'
          }`}
        >
          <div className="w-8/12 relative h-[300px]">
            <Image
              src={imageUrl}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="article-pictures"
              quality={80}
            />
          </div>
        </div>

        <div className="p-4">
          <p className="text-slate-900/50 group-hover:text-slate-700 capitalize dark:text-slate-50/70">
            {author || 'Unknown'}
          </p>
          <p className="text-slate-900/50 group-hover:text-slate-700 text-xs dark:text-slate-50/70">
            {formatDate(new Date(pub_date))}
          </p>
        </div>
      </MotionCard>
    </Link>
  );
};

export default ArticleCard;
