import styles from './page.module.css';
import ClientComponent from '../components/ClientComponent';
import ServerComponent from '../components/ServerComponent';
export default function Home() {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
