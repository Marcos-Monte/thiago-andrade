import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Banner from "./components/Banner/Banner";
import Imagem from '/public/imagemTeste.webp';

export default function quemSomos() {

    return (
        <>
        <Head>
            <title>Quem Somos</title>
            <meta name="description" content="Tragetória e ideias do candidato Thiago Andrade" />    
        </Head>
        <div className={`${styles.body}`}>
            <Header />
            <main className={styles.main}>
                <Banner 
                    banner={Imagem}
                    text='Quem Somos'
                    style='containerBanner'
                />
            </main>
            <Footer />
        </div>
        </>
    );
}