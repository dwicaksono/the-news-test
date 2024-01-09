'use server';

import ArticleCard from '@/components/article-card';
import NoData from '@/components/nodata';

interface IArticles {
  search?: string;
  page: number;
}
export interface IArticleResponse {
  byline: { original: string };
  pub_date: string;
  _id: string;
  headline: { main: string };
  multimedia: any[];
  web_url: string;
}

export async function getArticles(params: IArticles) {
  const { page, search } = params;
  const res = await fetch(
    `${process.env.API_ARTICLES}&q=${search}&page=${page}`
  );
  const articles = await res.json();

  if (!articles.response) {
    return <NoData />;
  }

  const data = articles.response.docs;
  return data.map((item: IArticleResponse, index: number) => (
    <ArticleCard
      author={item.byline.original}
      pub_date={item.pub_date}
      key={item._id}
      headline={item.headline.main}
      odd={index % 2 !== 0}
      multimedia={item.multimedia[2]}
      web_url={item.web_url}
      index={index}
    />
  ));
}
export async function getTopStories() {
  const res = await fetch(`${process.env.API_TOP_STORIES}`);
  const stories = await res.json();
  if (stories.results) {
    return { data: stories.results, meta: stories.meta };
  }

  return { data: [], meta: null };
}

export async function runningText() {
  const { data } = await getTopStories();
  const runningText = data?.map((item: { title: string }) => item.title);
  return runningText;
}
