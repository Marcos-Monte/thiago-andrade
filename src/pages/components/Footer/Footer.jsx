import styles from "./Footer.module.css";

import Logo from "../../../../public/logoWhite.png";
import Logotype from "../Logotype/Logotype";
import Midias from "../Midias/Midias";
import FormNewsletter from "../Newsletter/Newsletter.jsx";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} limit`}>
        <div className={styles.containerLinks}>
          <Logotype style={styles.image} logo={Logo} />

          <Midias style={styles.boxMidias} />
        </div>

        <FormNewsletter style={styles.formNewsletter} />
      </div>

      <p className={`${styles.assignature} limit`}>
        Desenvolvido por
        <a href="https://portifolio-jet-eight-67.vercel.app/">@Marcos Monte</a>
      </p>
    </footer>
  );
}
