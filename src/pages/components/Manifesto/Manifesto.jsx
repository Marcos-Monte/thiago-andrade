import styles from "@/pages/components/Manifesto/Manifesto.module.css";

import { BannerSecondary } from "../Banner/Banner";
import Form from "../Form/Form";

export default function Manifesto() {
  const title = "Thiago Andrade | Manifesto";

  return (
    
      <section className={styles.container}>

          <BannerSecondary />
          <div className={`${styles.conteudo} limit`}>

            <Form />
          </div>
        
      </section>
  );
}
