import { BookData, ReviewData } from '@/types';
import style from './page.module.css';
import { notFound } from 'next/navigation';
import ReviewItem from '@/components/review-item';
import ReviewEditor from '@/components/review-editor';
import Image from 'next/image';
import { cache } from 'react';

export const revalidate = 300;

const BOOK_DETAIL_REVALIDATE_SECONDS = 300;

const getBook = cache(async (bookId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
    {
      next: {
        revalidate: BOOK_DETAIL_REVALIDATE_SECONDS,
      },
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Book fetch failed: ${response.statusText}`);
  }

  return (await response.json()) as BookData;
});

const getBookReviews = cache(async (bookId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    {
      next: {
        revalidate: BOOK_DETAIL_REVALIDATE_SECONDS,
        tags: [`reviews-${bookId}`],
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed: ${response.statusText}`);
  }

  return (await response.json()) as ReviewData[];
});

async function BookDetail({ bookId }: { bookId: string }) {
  const book = await getBook(bookId);

  if (!book) {
    notFound();
  }

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
  try {
    const reviews = await getBookReviews(bookId);

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
  } catch {
    return <div>리뷰를 불러오지 못했습니다 ...</div>;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  try {
    const book = await getBook(id);

    if (!book) {
      return {
        title: "Donghwi's Books",
        description: '도서를 찾을 수 없습니다.',
      };
    }

    return {
      title: `${book.title} : Donghwi's Books`,
      description: `${book.description}`,
      openGraph: {
        title: `${book.title} : Donghwi's Books`,
        description: `${book.description}`,
        images: [book.coverImgUrl],
      },
    };
  } catch {
    return {
      title: "Donghwi's Books",
      description: '도서 정보를 불러오지 못했습니다.',
    };
  }
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
