import Image from "next/image";
import Link from "next/link";
import Logo from '/public/logo.webp';

export default function Logotype(props){
    return(
        <Link href="https://asantosqueeuquero.com.br/">
                    <Image className={props.style} src={Logo} alt='Logo Tipo'/>
            </Link>
    )
}