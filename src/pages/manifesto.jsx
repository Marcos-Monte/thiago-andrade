import Head from "next/head";

import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Manifesto from "./components/Manifesto/Manifesto.jsx";

export default function manifest(){

    const title = 'Thiago Andrade'

    return(
        <>
            <Head>
                <title>{`${title} | 65123`}</title>
                <meta name="description" content="Feed do Candidato a Vereador da cidade de Santos, Thiago Andrade" />  
            </Head>

            <div className={`body`}>

                <Header />

                <main className={'main'}>

                    <Manifesto />

                </main>

                <Footer />

            </div>
        </>
    )
}