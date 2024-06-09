import styles from '@/pages/components/Form/Form.module.css';
import { ButtonForm } from '../Button/Button';

function Proposta(){
    return(
        <fieldset className={styles.group}>

                            <legend className={styles.legend}>Dados da sua proposta</legend>
                            
                            <div className={styles.option}>
                                <label htmlFor="id-titulo">Titulo</label>
                                <input name='title' id='id-titulo' type="text" placeholder="Digite o titulo da sua proposta"/>
                            </div>

                            <div className={styles.option}>
                            <label htmlFor="id-tema">Tema</label>
                                <select name="themes" id="id-tema" required>
                                    <option selected value="">Escolha o tema aqui --</option>
                                    <option value="instituto">Instituto Federal na ZN</option>
                                    <option value="instituto">Instituto Federal na ZN</option>
                                    <option value="instituto">Instituto Federal na ZN</option>
                                    <option value="instituto">Instituto Federal na ZN</option>
                                    <option value="instituto">Instituto Federal na ZN</option>
                                </select>
                            </div>

                            <div className={styles.option}>
                                <label htmlFor="id-proposta">Proposta</label>
                                <textarea className={styles.textArea} name="proposta" id="id-proposta" placeholder="Digite aqui a sua ideia para o plano de governo"></textarea>
                            </div>

                        </fieldset>
    )
}

function Data(){
    return(
        <fieldset className={styles.group}>

                            <legend className={styles.legend}>Dados pessoais</legend>

                            <div className={styles.option}>
                                <label htmlFor="id-name">Nome</label>
                                <input name='name' id='id-name' type="text" placeholder="Digite seu nome completo aqui"/>
                            </div>

                            <div className={styles.option}>
                                <label htmlFor="id-email">E-mail</label>
                                <input name='email' id='id-email' type="email" placeholder="exemplo@exemplo.com"/>
                            </div>

                            <div className={styles.subGroup}>
                                
                                <div className={styles.option}>
                                    <label htmlFor="id-tel">Telefone</label>
                                    <input name='phone' id='id-tel' type="tel"placeholder="(xx)xxxxx-xxxx" />
                                </div>
                                
                                <div className={styles.option}>
                                    <label htmlFor="id-cep">CEP</label>
                                    <input name='cep' id='id-cep' type="tel"placeholder="000000-000" />
                                </div>

                            </div>

                        </fieldset>
    )
}

export default function Form(){
    return(
        <section className={`${styles.containerForm} limit`}>

                    <form className={styles.form} action="" method="post">

                        <Proposta />

                        <Data />

                        {/* <button  className={styles.buttonForm}type="submit">Enviar</button> */}

                        <ButtonForm style='buttonForm' />

                    </form>
                </section>
    )
}