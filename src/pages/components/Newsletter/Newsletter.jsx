import handleSubmit from '@/pages/api/submitForm';
import Button from '@/pages/components/Button/Button.jsx';
import styles from '@/pages/components/Newsletter/Newsletter.module.css';
import { useState } from 'react';

import { endpointNewsletter } from '@/pages/api/submitForm';

export default function FormNewsletter(){

    const [name, setName] = useState('')
    const [whats, setWhats] = useState('')
    const [bairro, setBairro] = useState('');
    
    const handleNomeChange = (e) => {
        const value = e.target.value;
        // console.log("Input Value: ", value); // Verificar o valor do input
        const filteredValue = value.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não permitidos
        setName(filteredValue);
        // console.log("Nome State: ", name); // Verificar o estado
    };

    const handleBairroChange = (event) => {
        setBairro(event.target.value)
    }

    const handleWhatsChange = (e) => {
        const value = e.target.value;
        // Remover todos os caracteres não numéricos
        const onlyNums = value.replace(/[^\d]/g, '');

        // Aplicar a máscara se tiver até 11 dígitos
        if (onlyNums.length <= 11) {
            const formattedValue = onlyNums.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            setWhats(formattedValue);
        }
        // Se tiver mais de 11 dígitos, não atualiza o estado (ignora entrada adicional)
    };

    const handleFormSubmit = async (event) => {
        await handleSubmit(event); // Chama a função handleSubmit
        setBairro(''); // Limpa o estado
        setName(''); // Limpa o estado
        setWhats(''); // Limpa o estado
    };

    return(

        <form className={styles.formNewsletter} action={endpointNewsletter} method='post' id='formularioNewsletter' onSubmit={handleFormSubmit}>

            <legend className={styles.title}>Boletim Informativo</legend>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="id-name">Nome </label>
                    <input 
                        className={styles.input} 
                        type="text" 
                        name="data[name]" 
                        id='id-name' 
                        value={name}
                        placeholder='Nome Completo'
                        onChange={handleNomeChange}
                        required
                    />

                </div>

                <div className={styles.info}>

                    <label className={styles.label} htmlFor="id-bairro">Bairro </label>

                    <select 
                        className={`${styles.input}`}
                        name="data[bairro]" 
                        id="id-bairro"
                        value={bairro}
                        onChange={handleBairroChange}
                        required
                    >
                        <option >Qual o seu bairro --</option>
                        <option value="Saboó">Saboó</option>
                        <option value="Caneleira">Caneleira</option>
                        <option value="Marapé">Marapé</option>
                        <option value="Nova Cintra">Nova Cintra</option>
                        <option value="Valongo">Valongo</option>
                        <option value="Embaré">Embaré</option>
                        <option value="Aparecida">Aparecida</option>
                        <option value="Areia Branca">Areia Branca</option>
                        <option value="Boqueirão">Boqueirão</option>
                        <option value="Gonzaga">Gonzaga</option>
                        <option value="Ilhéu Alto">Ilhéu Alto</option>
                        <option value="Jabaquara">Jabaquara</option>
                        <option value="São Jorge">São Jorge</option>
                        <option value="Vila Belmiro">Vila Belmiro</option>
                        <option value="Vila Progresso">Vila Progresso</option>
                        <option value="Jose Menino">Jose Menino</option>
                        <option value="Pompéia">Pompéia</option>
                        <option value="Ponta da Praia">Ponta da Praia</option>
                        <option value="Campo Grande">Campo Grande</option>
                        <option value="Centro">Centro</option>
                        <option value="Encruzilhada">Encruzilhada</option>
                        <option value="Estuário">Estuário</option>
                        <option value="Macuco">Macuco</option>
                        <option value="Paquetá">Paquetá</option>
                        <option value="Alemoa">Alemoa</option>
                        <option value="Vila Mathias">Vila Mathias</option>
                        <option value="Vila Nova">Vila Nova</option>
                        <option value="Vila Rica">Vila Rica</option>
                        <option value="Monte Serrat">Monte Serrat</option>
                        <option value="Chivo de Paula">Chivo de Paula</option>
                        <option value="Nova Cintra">Nova Cintra</option>
                        <option value="Pacheco">Pacheco</option>
                        <option value="Penha">Penha</option>
                        <option value="Santa Maria">Santa Maria</option>
                        <option value="Santa Teresinha">Santa Teresinha</option>
                        <option value="São Bento">São Bento</option>
                        <option value="Bom Retiro">Bom Retiro</option>
                        <option value="Jardim Castelo">Jardim Castelo</option>
                        <option value="Piratininga">Piratininga</option>
                        <option value="São Manoel">São Manoel</option>
                    </select>
                    
                </div>

                <div className={styles.info}>
                    <label className={styles.label} htmlFor="id-whats">Whatsapp</label>
                    
                    <input
                        className={`${styles.input}`}
                        type="tel"
                        id="whats"
                        name="data[whats]"
                        value={whats}
                        onChange={handleWhatsChange}
                        maxLength="15"
                        placeholder="(XX) XXXXX-XXXX"
                        required
                    />
                </div>

                <Button style="assign" text='Assine Já!'/>

        </form>
    )
}