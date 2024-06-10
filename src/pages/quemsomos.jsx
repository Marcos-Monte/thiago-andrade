import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from '@/pages/components/Footer/Footer.jsx';
import Header from '@/pages/components/Header/Header.jsx';
import Banner from "./components/Banner/Banner";
import Imagem from '/public/imagemTeste.webp';

export default function quemSomos() {

    return (
        <>
        <Head>
            <title>Quem Somos</title>
            <meta name="description" content="Tragetória e ideias do candidato Thiago Andrade" />    
        </Head>
        <div className={`${styles.body}`}>
            <Header />
            <main className={styles.main}>
                <Banner 
                    banner={Imagem}
                    text='Quem Somos'
                    style='containerBanner'
                />
                <div className={`${styles.conteudoTeste} limit`}>
                    <h2>Titulo Teste</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis numquam rerum delectus quos molestiae debitis eligendi magni voluptatibus, enim, optio hic porro iusto dolorem quisquam similique aperiam nesciunt quibusdam!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolorem dolore ex beatae aut natus libero vel fuga, nam eveniet. Sint nesciunt repudiandae provident aut debitis magni possimus nobis harum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga sapiente debitis aut eum iusto eos accusamus alias nesciunt vitae porro itaque sed doloribus, dolorem ullam incidunt perspiciatis ut atque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis numquam rerum delectus quos molestiae debitis eligendi magni voluptatibus, enim, optio hic porro iusto dolorem quisquam similique aperiam nesciunt quibusdam!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolorem dolore ex beatae aut natus libero vel fuga, nam eveniet. Sint nesciunt repudiandae provident aut debitis magni possimus nobis harum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga sapiente debitis aut eum iusto eos accusamus alias nesciunt vitae porro itaque sed doloribus, dolorem ullam incidunt perspiciatis ut atque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis numquam rerum delectus quos molestiae debitis eligendi magni voluptatibus, enim, optio hic porro iusto dolorem quisquam similique aperiam nesciunt quibusdam!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolorem dolore ex beatae aut natus libero vel fuga, nam eveniet. Sint nesciunt repudiandae provident aut debitis magni possimus nobis harum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga sapiente debitis aut eum iusto eos accusamus alias nesciunt vitae porro itaque sed doloribus, dolorem ullam incidunt perspiciatis ut atque!
                    </p>
                </div>     
            </main>
            <Footer />
        </div>
        </>
    );
}