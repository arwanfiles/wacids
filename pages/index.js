import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wacids - Waqf Center for Indonesian Development and Studies</title>
      </Head>

      <main className={styles.main}>
        <img src="/wacids.png" alt="Wacids Logo" />
      </main>
    </div>
  )
}
