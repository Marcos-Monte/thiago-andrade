import styles from '@/pages/components/Form/Form.module.css';
import { ButtonForm } from '../Button/Button';

function Proposta(){
    return(
        <fieldset className={styles.group}>

            <legend className={styles.legend}>Dados da sua proposta</legend>
            
            <div className={styles.option}>
                <label className={styles.label} htmlFor="id-titulo">Titulo</label>
                <input name='title' id='id-titulo' type="text" placeholder="Digite o titulo da sua proposta" required/>
            </div>

            <div className={styles.option}>
            <label className={styles.label} htmlFor="id-tema">Tema</label>
                <select name="themes" id="id-tema" required>
                    <option selected value="">Escolha o tema aqui --</option>
                    <option value="instituto">Instituto Federal na ZN</option>
                    <option value="instituto">Reforma Trabalhista</option>
                    <option value="instituto">Juventude Santista</option>
                </select>
            </div>

            <div className={styles.option}>
                <label className={styles.label} htmlFor="id-proposta">Proposta</label>
                <textarea className={styles.textArea} name="proposta" id="id-proposta" placeholder="Digite aqui a sua ideia para o plano de governo" required></textarea>
            </div>

        </fieldset>
    )
}

function Data(){
    return(
        <fieldset className={styles.group}>

            <legend className={styles.legend}>Dados pessoais</legend>

            <div className={styles.option}>
                <label className={styles.label} htmlFor="id-name">Nome</label>
                <input name='name' id='id-name' type="text" placeholder="Digite seu nome completo aqui" required/>
            </div>

            <div className={styles.option}>
                <label className={styles.label} htmlFor="id-email">E-mail</label>
                <input name='email' id='id-email' type="email" placeholder="exemplo@exemplo.com" required/>
            </div>

            <div className={styles.subGroup}>
                
                <div className={styles.option}>
                    <label className={styles.label} htmlFor="id-tel">Telefone</label>
                    <input name='phone' id='id-tel' type="tel"placeholder="(xx)xxxxx-xxxx" required/>
                </div>
                
                <div className={styles.option}>
                    <label className={styles.label} htmlFor="id-cep">CEP</label>
                    <input name='cep' id='id-cep' type="tel"placeholder="000000-000" />
                </div>

            </div>

        </fieldset>
    )
}

export default function Form(){
    return(
        <section className={`${styles.containerForm} limit`}>

            <div className={styles.content}>
                <h3>Envie sua proposta para nossa cidade</h3>
                <p>Esse espaço é seu, é de todos nós que queremos uma Santos mais desenvolvida, sem esquecer de ninguém. Envie sua proposta para a construção da Cidade Que Queremos.</p>
            </div>

            <form className={styles.form} action="" method="post">

                <Data />
                
                <Proposta />

                <ButtonForm style='buttonForm' />

            </form>
        </section>
    )
}