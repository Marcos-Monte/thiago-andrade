import Link from 'next/link';

import styles from './Header.module.css';

import Logotype from '@/pages/components/Logotype/Logotype.jsx';
import Logo from '../../../../public/Thiago Andrade - horizontal - branco.png';


export default function Header(){

    return(
        <header className={styles.header}>

            <div className={`${styles.container} limit`}>
                
                <Logotype 
                        style={styles.image}
                        logo={Logo}
                />
                <nav className={`${styles.navigation} limit`}>
                    <Link className={styles.link}href={'/'}>Home</Link>
                    <Link className={styles.link}href={'/manifesto'}>Manifesto</Link>
                </nav>

            </div>

        </header>
    )
}