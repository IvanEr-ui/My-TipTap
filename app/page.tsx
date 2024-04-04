import styles from "./page.module.css";
import Tiptap from '../components/Tiptap'

export default function Home() {
    return (
      <main className={styles.main}>
          <Tiptap />
      </main>
    )
}