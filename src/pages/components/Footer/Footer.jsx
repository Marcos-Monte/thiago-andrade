import styles from './Footer.module.css';

import Logotype from '../Logotype/Logotype';
import Midias from '../Midias/Midias';
import Supporters from '../Supporters/Supporters';

export default function Footer(){
    return(
        <footer className={styles.footer}>

            <div className={`${styles.container} limit`}>

                <div className={styles.containerLinks}>

                    <Logotype style={styles.image} />

                    <Midias style={styles.boxMidias} />

                </div>

                <Supporters style={styles.containerApoio}/>

            </div>

            <p className={`${styles.assignature} limit`}>

                Desenvolvido por<a href="https://www.linkedin.com/in/montemarcos/">@Marcos Monte</a>
                
            </p>
        </footer>
    )
}