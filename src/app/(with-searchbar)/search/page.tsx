import BookItem from '@/components/book-item';
import books from '@/mock/books.json';

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      {books.map((book) => {
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
