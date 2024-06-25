import Button from '@/pages/components/Button/Button.jsx';
import styles from '@/pages/components/Newsletter/Newsletter.module.css';

export default function FormNewsletter(){
    return(
        <form className={styles.formNewsletter}>

            <legend className={styles.title}>Boletim Informativo</legend>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="id-name">Nome </label>
                    <input className={styles.input} type="text" name="name" id='id-name' placeholder='Nome Completo'/>
                </div>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="id-bairro">Bairro </label>
                    <input className={styles.input} type="text" name="bairro" id='id-bairro' placeholder='Bairro'/>
                </div>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="id-whats">Whatsapp</label>
                    <input className={styles.input} type="number" name='whats' id='id-whats' placeholder='(XX) XXXXX-XXXX'/>
                </div>

                <Button style="assign" text='Assine Já!'/>

        </form>
    )
}