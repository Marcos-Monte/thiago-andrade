const endpointNewsletter = 'https://sheetdb.io/api/v1/uzbrbp2x2u6xx';
const endpointProposta =  'https://sheetdb.io/api/v1/jmvzo70pomsq6';

export default async function  handleSubmit  (event) {
    // Evita o comportamento padrão do formulário, que é recarregar a página
    event.preventDefault();

    // Obtém a referência do formulário a partir do evento
    const form = event.target;

    // Cria um objeto FormData com os dados do formulário
    const formData = new FormData(form);

    try {
      // Faz uma requisição HTTP POST para o URL especificado no atributo action do formulário
        const response = await fetch(form.action, {

        method: 'POST', // Define o método HTTP como POST
        body: formData, // Define o corpo da requisição com os dados do formulário

    });

      // Verifica se a resposta da requisição é bem-sucedida (status code 200-299)
    if (response.ok) {
        // Se a resposta for bem-sucedida, converte o resultado para JSON
        const data = await response.json();
        // Exibe um alerta informando que os dados foram enviados com sucesso
        alert('Dados enviados com sucesso!');
    } else {
        // Se a resposta não for bem-sucedida, lança um erro
        throw new Error('Erro ao enviar dados');
    }
    } catch (error) {
      // Captura qualquer erro ocorrido durante a requisição e exibe um alerta com a mensagem de erro
        alert('Erro: ' + error.message);
    }
};

export { endpointNewsletter, endpointProposta, handleSubmit };

