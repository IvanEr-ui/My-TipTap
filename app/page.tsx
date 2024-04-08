import styles from "./page.module.css";
import Tiptap from '../components/Tiptap'

export default function Home() {

    return (
      <main className={styles.main}>
          <div className={styles.title}><h1>TipTap Editor</h1></div>
          <Tiptap  />
      </main>
    )
}