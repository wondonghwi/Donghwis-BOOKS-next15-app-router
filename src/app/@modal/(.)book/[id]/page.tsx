import BookPage from '@/app/book/[id]/page';
import Modal from '@/components/modal';

type BookPageProps = Parameters<typeof BookPage>[0];

export default function Page(props: BookPageProps) {
  return (
    <Modal>
      <BookPage {...props} />
    </Modal>
  );
}
