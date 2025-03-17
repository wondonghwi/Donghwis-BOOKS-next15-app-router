import { BookData, ReviewData } from '@/types';
import style from './page.module.css';
import { notFound } from 'next/navigation';
import ReviewItem from '@/components/review-item';
import ReviewEditor from '@/components/review-editor';
import Image from 'next/image';

// export const dynamicParams = false;
export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      cache: 'force-cache',
    },
  );

  if (!response.ok) {
    throw new Error(`Book fetch failed : ${response.statusText}`);
  }

  const books: BookData[] = await response.json();

  return books.map((book) => ({ id: book.id.toString() }));
}

async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
    {
      cache: 'force-cache',
    },
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다 ...</div>;
  }

  const book: BookData = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <Image
          src={coverImgUrl}
          alt={`도서 ${title}의 표지 이미지`}
          width={240}
          height={300}
        />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

async function ReviewList({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    {
      next: {
        tags: [`reviews-${bookId}`],
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      <ul>
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            {...review}
          />
        ))}
      </ul>
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className={style.container}>
      <BookDetail bookId={id} />
      <ReviewEditor bookId={id} />
      <ReviewList bookId={id} />
    </div>
  );
}
