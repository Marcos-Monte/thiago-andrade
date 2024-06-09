import styles from '@/pages/components/Banner/Banner.module.css';

import Image from 'next/image';

export default function Banner(props){
    return(
        <section className={styles.containerBanner}>

            <Image className={`${styles.banner}`}src={props.banner} alt="Imagem teste" priority />

            <h2>{props.text}</h2>
            
        </section>
    )
}