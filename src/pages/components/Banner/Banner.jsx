import Logotype from '../Logotype/Logotype';

import styles from '@/pages/components/Banner/Banner.module.css';

export default function BannerPrimary(props){
    return(
        <section className={` ${styles.primary}`}>

                <Logotype 
                        style={styles.image}
                />

            <div className={styles.primaryContent}>
                <h2 className={styles.primaryTitle}>
                    ”diálogo, trabalho, coragem”
                </h2>
                <span className={styles.text}>
                    {props.text}
                </span>
            </div>
            
            
        </section>
    )
}



export function BannerSecondary(props){
    return(
        <section className={` ${styles.secondary}`}>

                <Logotype 
                        style={styles.image}
                />

            <div className={styles.secondaryContent}>
                <h2 className={styles.secondaryTitle}>
                    ”diálogo, trabalho, coragem”
                </h2>
                <span className={styles.text}>
                    {props.text}
                </span>
            </div>
            
        </section>
    )
}