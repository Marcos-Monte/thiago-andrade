import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Home from "./components/Home/Home.jsx";

export default function App() {

  const title = 'Thiago Andrade'

    const descricao = 'Thiago Andrade, candidato a vereador em Santos-SP, apresenta seu compromisso com a defesa da democracia, justiça social e igualdade de oportunidades. Com foco em educação de qualidade, saúde acessível e empregos dignos, Thiago luta por uma cidade mais justa para todos os santistas. Conheça suas propostas e faça parte da mudança para um futuro melhor'

  return (
    <>
      <Head>
        <title>{`${title} | 65123`}</title>
        <meta name="description" content={descricao} />      
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
