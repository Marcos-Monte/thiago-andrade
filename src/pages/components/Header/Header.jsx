import Link from "next/link";
import { useState } from 'react';

import styles from './Header.module.css';

import Button, { Menu } from '@/pages/components/Button/Button.jsx';
import Logotype from '@/pages/components/Logotype/Logotype.jsx';
import Midias from '../Midias/Midias.jsx';

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

                {/* LogoImagem com ancora para pagina da Telma */}
                <Logotype 
                    style={styles.image}
                />
                
                {/* Box com Link de navegação para redes sociais */}    
                <Midias 
                    style={styles.boxMidias}
                />

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