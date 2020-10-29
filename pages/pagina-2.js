import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Next.js para prototipos y más</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/devteam504_logo.png"
          alt="Comunidad DevTeam504"
          width={300}
          height={300}
        />
        <h1 className={styles.title}>Página 2</h1>

        <p className={styles.description}>
          Estamos editando la página
          <code className={styles.code}>pages/pagina-2.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Página 1 &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
