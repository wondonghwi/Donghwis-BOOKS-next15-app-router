import SearchBar from '@/components/searchbar';
import React, { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{new Date().toLocaleString()}</div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
