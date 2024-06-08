import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';

export default function proposta() {

    return (
        <>
        <Head>
            <title>Envie sua Proposta</title>
            <meta name="description" content="Envie suas propostas para o candidato Thiago Andrade" />
            {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
            <link rel="icon" href="/ico.webp" />      
        </Head>
        <div className={`${styles.body}`}>
            <Header />
            <main className={styles.main}>
                Envie sua Proposta
            </main>
            <Footer />
        </div>
        </>
    );
}