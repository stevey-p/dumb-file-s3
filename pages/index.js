import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSwr from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {

  const { data = [], error } = useSwr(`/api/s3-grabber`, fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Web App With S3???</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Kyle.app!</a>
        </h1>

        <p>pretend this is web content</p>

        <p>you have files btw</p>

        <ul>
          {data.map(file => <li>{file.name}</li>)}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
