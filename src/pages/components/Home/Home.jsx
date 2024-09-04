import styles from '@/pages/components/Home/Home.module.css';

import BannerPrimary from "@/pages/components/Banner/Banner";

export default function Home(){
    return(

        <section className={styles.container}>

            <BannerPrimary />  

            <div className={`${styles.conteudo} limit`}>

                <p className={styles.texto}>Sou <strong className={styles.span}>Thiago Andrade</strong> e quero ser o seu vereador em Santos.</p>

                <p className={styles.texto}>Neste momento decisivo para nossa cidade, apresento minha candidatura com um compromisso: defender a democracia e promover a justiça social. </p>
                <p className={styles.texto}>Desde muito jovem, batalho para que todos os santistas tenham sua cidadania garantida e respeitada. Acredito que a política é uma ferramenta para fazer a vida mais justa e não para ter benefícios pessoais. </p>

                <p className={styles.texto}>Quero que Santos seja uma cidade de paz, com educação e saúde de qualidade, emprego com salário digno e oportunidades para todas e todos.</p>

            </div> 

            <p className={styles.title}>Vamos juntos construir uma cidade melhor?</p>

        </section>
    )
}