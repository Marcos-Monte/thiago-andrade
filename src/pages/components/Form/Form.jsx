import styles from "@/pages/components/Form/Form.module.css";
import { useState } from "react";
import Button from "../Button/Button";
import TextoManifesto from "../Texto/TextoManifesto";

import handleSubmit, { endpointProposta } from "@/pages/api/submitForm.js";

export default function Form() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // const [theme, setTheme] = useState("");
  const [name, setName] = useState('')
    const [whats, setWhats] = useState('')
    const [sobrenome, setSobrenome] = useState('');
    const [bairro, setBairro] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // const handleThemeChange = (event) => {
  //   setTheme(event.target.value);
  // };

  const handleNomeChange = (e) => {
    const value = e.target.value;
    // console.log("Input Value: ", value); // Verificar o valor do input
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não permitidos
    setName(filteredValue);
    // console.log("Nome State: ", name); // Verificar o estado
};

const handleSobrenomeChange = (e) => {
  const value = e.target.value;
  // console.log("Input Value: ", value); // Verificar o valor do input
  const filteredValue = value.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não permitidos
  setSobrenome(filteredValue);
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
    setTitle(""); // Limpa o estado
    setText(""); // Limpa o estado
    // setTheme(""); 
    setName(""); // Limpa o estado
    setSobrenome(""); // Limpa o estado
    setBairro(""); // Limpa o estado
    setWhats(""); // Limpa o estado
  };

  return (
    <section className={`${styles.containerForm} limit`}>

      <div className={styles.content}>
            <TextoManifesto />
      </div>

      <form
        className={styles.form}
        action={endpointProposta}
        method="post"
        onSubmit={handleFormSubmit}
      >
        <fieldset className={styles.group}>
          <legend className={styles.legend}>Vem Pra Campanha</legend>

          <div className={styles.option}>
            <label className={styles.label} htmlFor="id-titulo">
              Titulo
            </label>
            <input
              name="data[title]"
              id="id-titulo"
              type="text"
              value={title}
              placeholder="Digite o titulo da sua proposta"
              required
              onChange={handleTitleChange}
            />
          </div>

          {/* <div className={styles.option}>
            <label className={styles.label} htmlFor="id-tema">
              Tema
            </label>
            <select
              name="data[themes]"
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
          </div> */}

          <div className={styles.box}>
            <div className={styles.option}>
              <label className={styles.label} htmlFor="id-name">Nome </label>
              <input 
                  className={styles.input} 
                  type="text" 
                  name="data[name]" 
                  id='id-name' 
                  value={name}
                  placeholder='Nome'
                  onChange={handleNomeChange}
                  required
              />

            </div>

            <div className={styles.option}>
              <label className={styles.label} htmlFor="id-sobrenome">Sobrenome </label>
              <input 
                  className={styles.input} 
                  type="text" 
                  name="data[sobrenome]" 
                  id='id-sobrenome' 
                  value={sobrenome}
                  placeholder='Sobrenome'
                  onChange={handleSobrenomeChange}
                  required
              />

            </div>

          </div>


          <div className={styles.box}>
            <div className={styles.option}>
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

            <div className={styles.option}>

            <label className={styles.label} htmlFor="id-bairro">Bairro </label>

            <select 
                className={`${styles.input}`}
                name="data[bairro]" 
                id="id-bairro"
                value={bairro}
                onChange={handleBairroChange}
                required
            >
                <option value=''>Qual o seu bairro --</option>
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
          
          </div>

          <div className={styles.option}>
            <label className={styles.label} htmlFor="id-proposta">
              Proposta
            </label>
            <textarea
              className={styles.textArea}
              name="data[proposta]"
              id="id-proposta"
              placeholder="Digite aqui a sua ideia para o plano de governo"
              value={text}
              required
              onChange={handleTextChange}
            ></textarea>
          </div>
        </fieldset>

        <Button style="buttonForm" text="Quero fazer parte" />
      </form>
    </section>
  );
}
