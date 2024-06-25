import { ButtonNewsletter } from '@/pages/components/Button/Button.jsx';
import styles from '@/pages/components/Newsletter/Newsletter.module.css';

export default function FormNewsletter(){
    return(
        <form className={styles.formNewsletter}>

            <legend className={styles.title}>Boletim Informativo</legend>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="">Nome </label>
                    <input className={styles.input} type="text" />
                </div>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="">Bairro </label>
                    <input className={styles.input} type="text" />
                </div>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="">Whatsapp</label>
                    <input className={styles.input} type="text" />
                </div>

                <ButtonNewsletter style="assign"/>

        </form>
    )
}