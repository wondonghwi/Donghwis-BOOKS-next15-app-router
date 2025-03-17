import { Suspense } from 'react';
import BookItem from '@/components/book-item';
import BookListSkeleton from '@/components/skeleton/book-list-skeleton';
import { BookData } from '@/types';

async function SearchResult({ q }: { q: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    {
      cache: 'force-cache',
    },
  );
  if (!response.ok) return <div>오류가 발생했습니다 ...</div>;

  const searchBooks: BookData[] = await response.json();

  return (
    <div>
      {searchBooks.map((book) => {
        return (
          <BookItem
            key={book.id}
            {...book}
          />
        );
      })}
    </div>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return {
    title: `${q} : 한입북스 검색`,
    description: `${q}의 검색 결과입니다.`,
    openGraph: {
      title: `${q} : 한입북스 검색`,
      description: `${q}의 검색 결과입니다.`,
      images: ['/thumbnail.png'],
    },
  };
}

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <Suspense
      key={q}
      fallback={<BookListSkeleton count={3} />}>
      <SearchResult q={q ?? ''} />
    </Suspense>
  );
}
