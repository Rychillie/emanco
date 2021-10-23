import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ÉMANCO CLUB</title>
        <meta name="description" content="Comunidade de amante de lasanhas e motos mancas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao <a href="https://emanco.clug">Émanco Club!</a>
        </h1>
        <h2 className={styles.title}>Atenção estamos em construção!</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://rychillie.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Rychillie
        </a>
      </footer>
    </div>
  )
}

export default Home
