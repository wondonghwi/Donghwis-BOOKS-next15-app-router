import React from 'react';
import ClientComponent from '@/app/components/ClientComponent';
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      book page입니다. {id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
