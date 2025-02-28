'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const { push } = useRouter();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={search}
        onChange={onChangeSearch}
      />
      <button>검색</button>
    </form>
  );
}
