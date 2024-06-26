import styles from '@/pages/components/Form/Form.module.css';
import { useState } from 'react';
import Button from '../Button/Button';

function Proposta(){
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [theme, setTheme] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleThemeChange = (event) => {
        setTheme(event.target.value)
    }

    return(
        <fieldset className={styles.group}>

            <legend className={styles.legend}>Deixe sua Proposta</legend>

            <div className={styles.content}>
                <p>Esse espaço é seu, é de todos nós que queremos uma Santos mais desenvolvida, sem esquecer de ninguém. Envie sua proposta para a construção da Cidade Que Queremos.</p>
            </div>
            
            <div className={styles.option}>
                <label className={styles.label} htmlFor="id-titulo">Titulo</label>
                <input 
                    name='title' 
                    id='id-titulo' 
                    type="text" 
                    value={title}
                    placeholder="Digite o titulo da sua proposta" 
                    required
                    onChange={handleTitleChange}
                />
            </div>

            <div className={styles.option}>
                <label className={styles.label} htmlFor="id-tema">Tema</label>
                    <select 
                        name="themes" 
                        id="id-tema" 
                        value={theme} // Defina o valor do select como o estado 'theme'
                        onChange={handleThemeChange} // Adicione um onChange para atualizar 'theme'
                        required
                    >
                        <option value="defaultValue">Escolha o tema aqui --</option>
                        <option value="instituto">Instituto Federal na ZN</option>
                        <option value="instituto">Reforma Trabalhista</option>
                        <option value="instituto">Juventude Santista</option>
                    </select>
                </div>

                <div className={styles.option}>
                    <label className={styles.label} htmlFor="id-proposta">Proposta</label>
                    <textarea 
                        className={styles.textArea} 
                        name="proposta" id="id-proposta" 
                        placeholder="Digite aqui a sua ideia para o plano de governo" 
                        value={text}
                        required
                        onChange={handleTextChange}
                    >
                    </textarea>
                </div>

        </fieldset>
    )
}

export default function Form(){
    return(
        <section className={`${styles.containerForm} limit`}>

            <form className={styles.form} action="" method="post">
                
                <Proposta />

                <Button style='buttonForm' text='Enviar'/>

            </form>
        </section>
    )
}