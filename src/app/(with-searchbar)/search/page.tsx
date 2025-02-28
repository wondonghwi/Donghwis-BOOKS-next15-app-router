import BookItem from '@/components/book-item';
import books from '@/mock/books.json';
import { BookData } from '@/types';

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
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
