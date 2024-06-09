import Head from "next/head";

import styles from "@/styles/Home.module.css";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Imagem from '/public/imagemTeste.webp';

export default function proposta() {

    return (
        <>
        <Head>
            <title>Envie sua Proposta</title>
            <meta name="description" content="Envie suas propostas para o candidato Thiago Andrade" />    
        </Head>
        <div className={`${styles.body}`}>

            <Header />

            <main className={styles.main}>

                <Banner 
                    banner={Imagem}
                    text='Propostas'
                />

                <Form />

            </main>

            <Footer />
        </div>
        </>
    );
}