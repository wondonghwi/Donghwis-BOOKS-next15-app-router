'use client';

import React from 'react';

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('클라이언트 컴포넌트 실행');

  return <div>{children}</div>;
}
