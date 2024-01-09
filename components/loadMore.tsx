'use client';
import React, { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';
import { useInView } from 'react-intersection-observer';
import { getArticles } from '@/actions/articles.actions';
import { useSearchParams } from 'next/navigation';

let page = 1;
const LoadMore = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('q') || '';
  const { inView, ref } = useInView();
  const [articles, setArticles] = useState<JSX.Element[]>([]);
  useEffect(() => {
    getArticles({ search, page }).then((data) => {
      setArticles([...articles, ...data]);
      page++;
    });
  }, [inView]);

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {articles}
      </section>
      <section ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <SkeletonLoading />
      </section>
    </>
  );
};

export default LoadMore;

const SkeletonLoading = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full drop-shadow shadow-md p-6">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-4 w-6/12" />
      </div>
      <div className="flex flex-col gap-4 w-full drop-shadow shadow-md p-6">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-4 w-6/12" />
      </div>
    </>
  );
};
