import styles from './Header.module.css';

import Logotype from '@/pages/components/Logotype/Logotype.jsx';
import Link from 'next/link';
import Logo from '../../../../public/assets/Thiago Andrade - horizontal - branco.png';


export default function Header(props){

    return(
        <header className={styles.header}>

            <div className={`${styles.container} limit`}>
                
                <Logotype 
                        style={styles.image}
                        logo={Logo}
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