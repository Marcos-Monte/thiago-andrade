import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';

export default function noticias() {

    return (
        <>
        <Head>
            <title>Notícias</title>
            <meta name="description" content="Principais notícias do candidato Thiago Andrade" />     
        </Head>
        <div className={`${styles.body}`}>
            <Header />
            <main className={styles.main}>
                Noticias
            </main>
            <Footer />
        </div>
        </>
    );
}