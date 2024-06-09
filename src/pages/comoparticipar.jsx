import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Banner from "./components/Banner/Banner";
import Imagem from '/public/imagemTeste.webp';

export default function comoParticipar() {

  return (
    <>
      <Head>
        <title>Como Participar</title>
        <meta name="description" content="Informações de como a população pode participar do mandato do candidato Thiago Andrade" />    
      </Head>
      <div className={`${styles.body}`}>
        <Header />
        <main className={styles.main}>
          <Banner 
            banner={Imagem}
            text='Como Participar'
          />
          
        </main>
        <Footer />
      </div>
    </>
  );
}