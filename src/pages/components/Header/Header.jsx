import styles from './Header.module.css';

import Logotype from '@/pages/components/Logotype/Logotype.jsx';
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

                    <button 
                        className={styles.button}
                        onClick={props.botaoHome}
                    >
                        Home
                    </button>

                    <button 
                        className={styles.button}
                        onClick={props.botaoManifesto}
                    >
                        Manifesto
                    </button>
                </nav>

            </div>

        </header>
    )
}