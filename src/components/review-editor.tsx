'use client';

import { createReviewAction } from '@/actions/create-review.action';
import style from './review-editor.module.css';
import { useActionState, useEffect } from 'react';

export default function ReviewEditor({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form
        className={style.form_container}
        action={formAction}>
        <input
          hidden
          name='bookId'
          value={bookId}
          readOnly
        />
        <textarea
          disabled={isPending}
          name='content'
          placeholder='리뷰내용'
          required
        />
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            required
            type='text'
            name='author'
            placeholder='작성자'
          />
          <button
            disabled={isPending}
            type='submit'>
            {isPending ? '...' : '작성하기'}
          </button>
        </div>
      </form>
    </section>
  );
}
