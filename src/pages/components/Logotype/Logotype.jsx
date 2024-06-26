import Image from "next/image";
import Link from "next/link";


export default function Logotype(props){

    const imagem = props.logo;

    return(
        <Link href="/">
            <Image className={props.style} src={imagem} alt='Logotipo' fetchpriority="high" />
        </Link>
    )
}