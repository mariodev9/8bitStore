import Head from "next/head";
import Image from "next/image";
import Logo from "../components/Icons/Logo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Logo height={100} width={100} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mariodev.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By mariodev
        </a>
      </footer>
    </div>
  );
}
