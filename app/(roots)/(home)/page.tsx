import { getArticles } from '@/actions/articles.actions';
import LoadMore from '@/components/loadMore';

interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

const HomePage = async ({ searchParams }: SearchParamsProps) => {
  const results = await getArticles({ search: searchParams.q, page: 0 });
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {results}
      </section>
      <LoadMore />
    </>
  );
};

export default HomePage;
