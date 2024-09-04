// import styles from "@/styles/Home.module.css";
import { useState } from "react";

import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Home from "./components/Home/Home.jsx";
import Manifesto from "./components/Manifesto/Manifesto.jsx";

export default function App() {

  const inicio = <Home />;
  const manifesto = <Manifesto />

  const [main, setMain]= useState(inicio);

function handleHome(){
  setMain(inicio)
}

function handleManifesto(){
  setMain(manifesto)
}

  const title = 'Thiago Andrade'

  return (
    <>
      <Head>
        <title>{`${title} | 65123`}</title>
        <meta name="description" content="Feed do Candidato a Vereador da cidade de Santos, Thiago Andrade" />      
      </Head>

      <div className={`body`}>

        <Header 
          botaoHome={handleHome}
          botaoManifesto={handleManifesto}
        />

        <main className={'main'}>

          {main}

        </main>

        <Footer />

      </div>
    </>
  );
}
