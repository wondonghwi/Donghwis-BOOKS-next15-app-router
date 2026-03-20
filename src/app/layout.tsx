import './globals.css';
import Link from 'next/link';
import style from './layout.module.css';
import { BookData } from '@/types';

async function Footer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      cache: 'force-cache',
    },
  );
  if (!response.ok) return <footer>@원동휘</footer>;
  const books: BookData[] = await response.json();
  return (
    <>
      <footer>
        <div>제작 @원동휘</div>
        <div>{books.length}개의 책</div>
      </footer>
    </>
  );
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className={style.container}>
          <header>
            <Link href={'/'}>📚 Donghwi&apos;s BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        {modal}
        <div id='modal-root' />
      </body>
    </html>
  );
}
