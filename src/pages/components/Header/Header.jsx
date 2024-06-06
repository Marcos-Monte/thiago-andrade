import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

import Logo from '../../../../public/logo.webp';
import styles from './Header.module.css';

import Button, { Menu } from '@/pages/components/Button/Button.jsx';

const face = 'https://www.facebook.com/thiago.andrade.1806?mibextid=LQQJ4d&rdid=88FyjRy733u6yc7g&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FemPU6rKtp5VBqru9%2F%3Fmibextid%3DLQQJ4d'
const insta = 'https://www.instagram.com/thiagoandrade_013/?igsh=MTVsOWMzeHQ3ajZ4';
const twitter = 'https://twitter.com/thiago_ujs'

export default function Header(){

    const visivel = '';
    const invisivel = 'menuHidden'
    const [visible, setVisible] = useState(false);

    function handleVisible(){
        setVisible(!visible)
    }

    return(
        <header className={styles.header}>

            {/* Container limitador */}
            <div className={`${styles.container} limit`}>

                {/* Box com ancora para Email */}
                <div className={styles.boxMail}>
                    <i className="bi bi-envelope"></i>
                    <a href="mailto:contato@santosqueeuquero.com.br">
                        contato@asantosqueeuquero.com.br
                    </a>
                </div>

                {/* LogoImagem com ancora para pagina da Telma */}
                <Link href="https://asantosqueeuquero.com.br/">
                    <Image className={styles.image} src={Logo} alt='Logo Tipo'/>
                </Link>
                
                {/* Box com Link de navegação para redes sociais */}
                <nav className={styles.boxMidias}>
                    <a href={twitter}>
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href={face}>
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href={insta}>
                        <i className="bi bi-instagram"></i>
                    </a>
                </nav>                                          

                {/* Botão para enviar proposta (Oculto -> Visivel apenas para resoluções entre 550px e 749px ) */}
                <Link href={'/enviesuaproposta'}>
                    <Button 
                        text='envie sua proposta'
                        style= 'button2'
                    />
                </Link>

                <Menu 
                    funcao={handleVisible}
                />        
                
            </div>

            {/* Menu que fica visivel em resoluçãos acima de 550px */}
            <div className={`${styles.container} ${styles[visible ? visivel : invisivel]}`}>

                <nav className={`${styles.navigation} limit`}>
                    <Link className={styles.link}href={'/'}>Inicio</Link>
                    <Link className={styles.link}href={'/quemsomos'}>Quem Somos</Link>
                    <Link className={styles.link}href={'/agenda'}>Agenda</Link>
                    <Link className={styles.link}href={'/noticias'}>Notícias</Link>
                    <Link className={styles.link}href={'/comoparticipar'}>Como Participar</Link>
                    <Link href={'/enviesuaproposta'}>
                        <Button 
                            text='envie sua proposta'
                        />
                    </Link>
                </nav>

            </div>

        </header>
    )
}