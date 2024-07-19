import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from "@/pages/components/Footer/Footer.jsx";
import Header from "@/pages/components/Header/Header.jsx";
import { BannerSecondary } from "./components/Banner/Banner";
import Form from "./components/Form/Form";

export default function manifesto() {
  const title = "Manifesto";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Tragetória e ideias do candidato Thiago Andrade"
        />
      </Head>
      <div className={`${styles.body}`}>
        <Header />
        <main className={styles.main}>
          <BannerSecondary
            title={title}
            text="Faça parte! Assine o manifesto:"
          />
          <div className={`${styles.conteudoTeste} limit`}>
            {/* <h1 className={styles.title}>
                        {title}
                    </h1> */}

            <Form />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
