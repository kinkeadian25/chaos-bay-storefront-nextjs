import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chaos Bay Store </title>
        <meta name="description" content="Support a thriving, community-driven local brewery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Chaos Bay
          </p>
        </div>
        <div className={styles.products}> {/*TODO: Add products here*/}
        
        </div>
      </main>
    </div>
  )
}
