import Button from '@/pages/components/Button/Button.jsx';
import styles from '@/pages/components/Newsletter/Newsletter.module.css';
import { useState } from 'react';


export default function FormNewsletter(){

    const [name, setName] = useState('')
    const [whats, setWhats] = useState('')

    const handleWhatsChange = (e) => {
        const celular = document.getElementById('id-whats');
        celular.addEventListener('input', () => {
            // Remover caracteres não numéricos usando expressão regular /\D/g e limitar a 11 dígitos
            let formatted = celular.value.replace(/\D/g, "").substring(0, 11);
            // Enviar para o campo o numero formatado
            setWhats(formatted)
            console.log(whats)
            
        })
    }

    const handleNomeChange = (e) => {
        const value = e.target.value;
        console.log("Input Value: ", value); // Verificar o valor do input
        const filteredValue = value.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não permitidos
        setName(filteredValue);
        console.log("Nome State: ", name); // Verificar o estado
    };

    return(

        <form className={styles.formNewsletter} action='' method='post'>

            <legend className={styles.title}>Boletim Informativo</legend>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="id-name">Nome </label>
                    <input 
                        className={styles.input} 
                        type="text" 
                        name="name" 
                        id='id-name' 
                        value={name}
                        placeholder='Nome Completo'
                        onChange={handleNomeChange}
                    />
                </div>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="id-bairro">Bairro </label>
                    <input className={styles.input} type="text" name="bairro" id='id-bairro' placeholder='Bairro'/>
                </div>

                <div className={styles.info}>
                    <label 
                        className={styles.label} 
                        htmlFor="id-whats"
                    >
                            Whatsapp

                    </label>
                    <input 
                        className={styles.input} 
                        type="tel" 
                        name='whats' 
                        id='id-whats'
                        value={whats}
                        placeholder='(XX) XXXXX-XXXX'
                        onChange={handleWhatsChange}
                    />
                </div>

                <Button style="assign" text='Assine Já!'/>

        </form>
    )
}