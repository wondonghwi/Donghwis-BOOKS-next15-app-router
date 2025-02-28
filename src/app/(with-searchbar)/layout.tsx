import SearchBar from '@/components/searchbar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
