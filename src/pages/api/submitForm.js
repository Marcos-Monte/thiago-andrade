import { toast } from 'react-toastify';

const endpointNewsletter = 'https://sheetdb.io/api/v1/8tcs3kndl7ihz';
const endpointProposta =  'https://sheetdb.io/api/v1/9st3iybb0fson';

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
        await response.json();
        // Exibe um alerta informando que os dados foram enviados com sucesso
        notifySuccess('Dados enviados com sucesso!');
        form.reset(); // Limpa o formulário após o envio bem-sucedido
    } else {
        // Se a resposta não for bem-sucedida, lança um erro
        throw new Error('Erro ao enviar dados');
    }
    } catch (error) {
      // Captura qualquer erro ocorrido durante a requisição e exibe um alerta com a mensagem de erro
        notifyError(`Erro: ${error.message}`);
    }
    form.reset(); // Limpa o formulário após o envio bem-sucedido
};

 // Função para mostrar o alert
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

export { endpointNewsletter, endpointProposta, handleSubmit };

