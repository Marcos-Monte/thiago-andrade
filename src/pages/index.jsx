import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Banner from "./components/Banner/Banner";
import Imagem from '/public/imagemTeste.webp';

export default function Home() {

  return (
    <>
      <Head>
        <title>Thiago Andrade</title>
        <meta name="description" content="Feed do Candidato a Vereador da cidade de Santos, Thiago Andrade" />      
      </Head>
      <div className={`${styles.body}`}>
        <Header />
        <main className={styles.main}>
          <Banner 
            banner={Imagem}
            text='Inicio'
            style={'bannerCover'}
          />        
        </main>
        <Footer />
      </div>
    </>
  );
}
