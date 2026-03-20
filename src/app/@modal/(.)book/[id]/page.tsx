import BookPage, { BookPageProps } from '@/app/book/[id]/page';
import Modal from '@/components/modal';

export default function Page(props: BookPageProps) {
  return (
    <Modal>
      <BookPage {...props} />
    </Modal>
  );
}
