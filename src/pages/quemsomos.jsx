import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';

export default function quemSomos() {

    return (
        <>
        <Head>
            <title>Quem Somos</title>
            <meta name="description" content="Tragetória e ideias do candidato Thiago Andrade" />
            {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
            <link rel="icon" href="/ico.webp" />      
        </Head>
        <div className={`${styles.body}`}>
            <Header />
            <main className={styles.main}>
                Quem Somos
            </main>
            <Footer />
        </div>
        </>
    );
}