import "@/styles/globals.css";
import Head from "next/head";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  const descricao = 'Thiago Andrade, candidato a vereador em Santos-SP, apresenta seu compromisso com a defesa da democracia, justiça social e igualdade de oportunidades. Com foco em educação de qualidade, saúde acessível e empregos dignos, Thiago luta por uma cidade mais justa para todos os santistas. Conheça suas propostas e faça parte da mudança para um futuro melhor'

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={descricao} />
        <link rel="icon" href="./assets/favicon.ico" />  
      </Head>
      <Component {...pageProps} />
      <ToastContainer style={{ zIndex: 9999 }} />
    </>
  );
}
