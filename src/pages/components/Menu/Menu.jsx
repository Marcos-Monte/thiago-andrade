import Link from 'next/link';

import styles from "./Menu.module.css";

import { useState } from 'react';
import Logo from '../../../../public/assets/Thiago Andrade - horizontal - branco.png';
import Logotype from "../Logotype/Logotype";

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
                <Logotype 
                    style={styles.image}
                    logo={Logo}
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