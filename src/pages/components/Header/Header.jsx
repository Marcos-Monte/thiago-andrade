import Link from 'next/link';
import { useState } from 'react';

import styles from './Header.module.css';

import Logotype from '@/pages/components/Logotype/Logotype.jsx';


export default function Header(){

    const visivel = '';
    const invisivel = 'menuHidden'
    const [visible, setVisible] = useState(false);

    function handleVisible(){
        setVisible(!visible)
    }

    return(
        <header className={styles.header}>

            <div className={`${styles.container} limit`}>
                
                <Logotype 
                        style={styles.image}
                />
                <nav className={`${styles.navigation} limit`}>
                    <Link className={styles.link}href={'/'}>Inicio</Link>
                    <Link className={styles.link}href={'/quemsomos'}>Quem Somos</Link>
                </nav>

                {/* <Menu 
                    funcao={handleVisible}
                />  */}

            </div>

        </header>
    )
}