import styles from './Button.module.css';

export default function Button(props){

    const style = props.style

    return(
        <button className={`${styles.button} ${styles[style]}`}>
            <p>{props.text}</p>
        </button>
    )
}

export function Menu(props){
    return(
        <div className={styles.menu} onClick={props.funcao}>
            <i className={`bi bi-list ${styles.menuIcon}`}></i>
        </div>
    )
}

export function ButtonForm(props){
    return(
        <button  className={`${styles.button} ${styles[props.style]}`}type="submit">Enviar</button>
    )
}