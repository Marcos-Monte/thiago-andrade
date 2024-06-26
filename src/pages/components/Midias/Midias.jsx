import styles from '@/pages/components/Midias/Midias.module.css';

const face = 'https://www.facebook.com/thiago.andrade.1806?mibextid=LQQJ4d&rdid=88FyjRy733u6yc7g&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FemPU6rKtp5VBqru9%2F%3Fmibextid%3DLQQJ4d'
const insta = 'https://www.instagram.com/thiagoandrade_013/?igsh=MTVsOWMzeHQ3ajZ4';
const twitter = 'https://twitter.com/thiago_ujs';
const email = 'contato@asantosqueeuquero.com.br';

export default function Midias(){
    return(
        <nav className={styles.boxMidias}>
            <a className={styles.links} target="_blank" href={twitter} >
                <i className="bi bi-twitter"></i>
            </a>
            <a className={styles.links} target="_blank" href={face}>
                <i className="bi bi-facebook"></i>
            </a>
            <a className={styles.links} target="_blank" href={insta}>
                <i className="bi bi-instagram"></i>
            </a>
            <a className={styles.links} target="_blank" href={`mailto:${email}`}>
                <i className="bi bi-envelope"></i>
            </a>
        </nav>     
    )
}