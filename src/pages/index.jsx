import Header from '@/pages/components/Header/Header.jsx';
import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thiago Andrade</title>
        <meta name="description" content="Feed do Candidato a Vereador da cidade de Santos, Thiago Andrade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico.webp" />
        
      </Head>
      <div className={`${styles.body}`}>
        <Header />
        <main className={styles.main}></main>
        <footer></footer>
      </div>
    </>
  );
}
