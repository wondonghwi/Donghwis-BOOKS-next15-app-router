import ClientComponent from '@/app/components/ClientComponent';

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      Search : {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
