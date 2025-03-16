'use server';
import { revalidateTag } from 'next/cache';

export async function createReviewAction(_: any, formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!bookId || !content || !author) {
    return {
      status: false,
      error: '리뷰내용과 작성자를 입력해주세요.',
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: 'POST',
        body: JSON.stringify({ bookId, content, author }),
      },
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // 태그기준, 데이터 캐시 재검증
    revalidateTag(`reviews-${bookId}`);
    return {
      status: true,
      error: '',
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      error: '리뷰 작성에 실패했습니다.',
    };
  }
}
