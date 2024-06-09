import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';

export default function agenda() {

    return (
        <>
        <Head>
            <title>Agenda</title>
            <meta name="description" content="Agenda de compromissos do candidato Thiago Andrade" />    
        </Head>
        <div className={`${styles.body}`}>
            <Header />
            <main className={styles.main}>
                Agenda
            </main>
            <Footer />
        </div>
        </>
    );
}