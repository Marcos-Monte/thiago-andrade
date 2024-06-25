
import styles from './Footer.module.css';

import Logotype from '../Logotype/Logotype';
import Midias from '../Midias/Midias';
import FormNewsletter from '../Newsletter/Newsletter.jsx';

export default function Footer(){
    return(
        <footer className={styles.footer}>

            <div className={`${styles.container} limit`}>

                <div className={styles.containerLinks}>

                {/* <Link href="">
                    <i className={`bi bi-arrow-up-circle ${styles.toTheTop}`}></i>
                </Link> */}
                
                    <Logotype style={styles.image} />

                    <Midias style={styles.boxMidias} />

                </div>

                <FormNewsletter style={styles.formNewsletter}/>

            </div>

            <p className={`${styles.assignature} limit`}>

                Desenvolvido por<a href="https://www.linkedin.com/in/montemarcos/">@Marcos Monte</a>
                
            </p>

            
        </footer>
    )
}