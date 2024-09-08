import Image from 'next/image';
import Link from 'next/link';

import styles from "./Menu.module.css";

import { useState } from 'react';

export default function Menu() {

    const [visibility, setVisibility] = useState('hidden');

    function changeVisibility(){
        if(visibility === 'hidden'){
            setVisibility('visible')
            console.log(visibility)
        } else {
            setVisibility('hidden')
            console.log(visibility)
        }
    }

    return (
        <div className={`${styles.containerMenu}`}>

            <div className={styles.boxMenu}>
                <Image 
                    className={styles.image}
                    width={0}
                    height={0}
                    src='/assets/Thiago Andrade - horizontal - branco.png'
                    alt='Logotipo da Campanha na cor branca com o número do vereador 65123'
                    layout='responsive'
                />

                <button 
                    className={`${styles.menu}`} 
                    onClick={changeVisibility}
                >
                    <i className="bi bi-menu-button"></i>
                </button>
            </div>
            

            <div className={`${styles.retractMenu} ${styles[visibility]}`}>
                
                <Link 
                    href={'/'}
                    className={styles.button}
                >
                    Home
                </Link>

                <Link 
                    href={'/manifesto'}
                    className={styles.button}
                >
                    Manifesto
                </Link>
            </div>
        </div>
    );
}