import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Home from "./components/Home/Home.jsx";

export default function App() {

  const title = 'Thiago Andrade'

  return (
    <>
      <Head>
        <title>{`${title} | 65123`}</title>
        <meta name="description" content="Feed do Candidato a Vereador da cidade de Santos, Thiago Andrade" />      
      </Head>

      <div className={`body`}>

        <Header />

        <main className={'main'}>

          <Home />

        </main>

        <Footer />

      </div>
    </>
  );
}
