import BookItem from '@/components/book-item';
import style from './page.module.css';
import { BookData } from '@/types';
import { Metadata } from 'next';

// NOTE: 페이지 동작 방식 설정
// export const dynamic = 'auto';
// 1. auto : 기본값 - 아무것도 강제하지않음
// 2. force-dynamic : 모든 페이지를 동적으로 처리
// 3. force-static : 모든 페이지를 정적으로 처리
// 4. error : 페이지를 강제로 static 페이지 설정 ( 설정하면 안되는 이유 -> 빌드오류 )

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      cache: 'force-cache',
    },
  );
  if (!response.ok) return <div>오류가 발생했습니다 ...</div>;

  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
}
async function RecommendBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      next: {
        revalidate: 3,
      },
    },
  );
  if (!response.ok) return <div>오류가 발생했습니다 ...</div>;

  const recommendBooks: BookData[] = await response.json();

  return (
    <div>
      {recommendBooks.map((book) => (
        <BookItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: '한입 북스',
  description: '한입 북스에 등록된 도서를 만나보세요.',
  openGraph: {
    title: '한입 북스',
    description: '한입 북스에 등록된 도서를 만나보세요.',
    images: ['/thumbnail.png'],
  },
};

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecommendBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
