import Image from "next/image";
import styles from "./Footer.module.css";

// import Logo from "../../../../public/assets/Thiago Andrade - vertical - branco.png";
// import Logotype from "../Logotype/Logotype";
import Midias from "../Midias/Midias";
import FormNewsletter from "../Newsletter/Newsletter.jsx";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={`${styles.container} limit`}>
        
        <div className={styles.containerLinks}>
          {/* <Logotype style={styles.image} logo={Logo} /> */}

          <Image 
            className={styles.image}
            src="/assets/Thiago Andrade - vertical - branco.png"
            alt="Logo Thiago Andrade"
            width={0}
            height={0}
            layout="responsive"
          />

          <Midias style={styles.boxMidias} />
        </div>

        <FormNewsletter style={styles.formNewsletter} />
      </div>

      <div className={`${styles.assignature} limit`}>
        
        <p>ELEICAO 2024 THIAGO SOUZA DE ANDRADE VEREADOR | CNPJ 56.405.311/0001-95</p>

        <p className={styles.linkDev}> Desenvolvido por
          <a href="https://portifolio-jet-eight-67.vercel.app/">@Marcos-Monte</a>
        </p>

      </div>

    </footer>
  );
}
