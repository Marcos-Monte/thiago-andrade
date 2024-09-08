import Image from 'next/image';

import styles from './Header.module.css';

// import Logotype from '@/pages/components/Logotype/Logotype.jsx';
import Link from 'next/link';
// import Logo from '../../../../public/assets/Thiago Andrade - horizontal - branco.png';
import Menu from '../Menu/Menu.jsx';


export default function Header(){

    return(
        <header className={styles.header}>

            <Menu />

            <div className={`${styles.container} limit`}>

                <Image 
                    className={styles.image}
                    width={0}
                    height={0}
                    src='/assets/Thiago Andrade - horizontal - branco.png'
                    alt='Logotipo da Campanha na cor branca com o número do vereador 65123'
                    layout='responsive'
                />
                <nav className={`${styles.navigation} limit`}>

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

                </nav>

            </div>

        </header>
    )
}