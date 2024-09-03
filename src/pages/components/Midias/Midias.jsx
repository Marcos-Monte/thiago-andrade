import styles from '@/pages/components/Midias/Midias.module.css';

const face = 'https://www.facebook.com/ThiagoAndradeUmaSoSantos'
const insta = 'https://www.instagram.com/thiagoandrade65123/';
const whatsapp = 'https://api.whatsapp.com/send?phone=5513991929424&text=Ol%C3%A1!%0AQuero%20mais%20informa%C3%A7%C3%B5es.%20';
const tiktok = 'https://www.tiktok.com/@thiagoandrade65123';

export default function Midias(){
    return(
        <nav className={styles.boxMidias}>
            <a className={styles.links} target="_blank" href={whatsapp} >
                <i className="bi bi-whatsapp"></i>
            </a>
            <a className={styles.links} target="_blank" href={insta}>
                <i className="bi bi-instagram"></i>
            </a>
            <a className={styles.links} target="_blank" href={face}>
                <i className="bi bi-facebook"></i>
            </a>
            <a className={styles.links} target="_blank" href={tiktok}>
                <i className="bi bi-tiktok"></i>
            </a>
        </nav>     
    )
}