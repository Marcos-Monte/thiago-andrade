import Head from "next/head";

import styles from "@/styles/Home.module.css";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Imagem from '/public/umasosantos2.png';

export default function proposta() {

    const title = 'Propostas';

    return (
        <>
        <Head>
            <title>{`Envie suas ${title}`}</title>
            <meta name="description" content="Envie suas propostas para o candidato Thiago Andrade" />    
        </Head>
        <div className={`${styles.body}`}>

            <Header />

            <main className={styles.main}>

                <Banner 
                    banner={Imagem}
                    text={title}
                    style='containerBanner'
                />

                <Form />

            </main>

            <Footer />
        </div>
        </>
    );
}