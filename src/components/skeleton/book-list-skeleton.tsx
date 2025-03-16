import React from 'react';
import BookItemSkeleton from './book-item-skeleton';

export default function BookListSkeleton({ count }: { count: number }) {
  return new Array(count)
    .fill(null)
    .map((_, idx) => <BookItemSkeleton key={idx} />);
}
