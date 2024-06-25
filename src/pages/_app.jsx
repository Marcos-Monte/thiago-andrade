import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Página do Candidato a Vereador da Cidade de Santos, Thiago Andrade do PCdoB" />
        <link rel="icon" href="/ico.webp" />  
      </Head>
      <Component {...pageProps} />
    </>
  );
}
