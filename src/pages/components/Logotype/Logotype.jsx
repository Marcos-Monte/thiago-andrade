import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logoWhite.png";

export default function Logotype(props){
    return(
        <Link href="/">
            <Image className={props.style} src={Logo} alt='Logo Tipo' priority></Image>
        </Link>
    )
}