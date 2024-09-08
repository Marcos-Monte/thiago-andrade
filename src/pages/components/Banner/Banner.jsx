import Image from 'next/image';

import styles from '@/pages/components/Banner/Banner.module.css';

// import BannerAmarelo from '../../../../public/assets/thiago-site-amarelo.png';
// import BannerRosa from '../../../../public/assets/thiago-site-rosa.png';

export default function BannerPrimary(){
    return(
        <section className={` ${styles.primary}`}>

                <Image 
                    className={styles.imagem}
                    src='/assets/thiago-site-rosa.png'
                    alt='Banner da Página Home' 
                    width={0}
                    height={0}
                    layout="responsive"
                />
                
        </section>
    )
}



export function BannerSecondary(){
    return(
        <section className={` ${styles.secondary}`}>

            <Image 
                className={styles.imagem}
                src='/assets/thiago-site-rosa.png'
                alt='Banner da Página Manifesto' 
                width={0}
                height={0}
                layout="responsive"
            />
            
        </section>
    )
}