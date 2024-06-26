// let video = `https://script.google.com/macros/s/AKfycbznbunz4J0Izh295HQDziMyui0MJci3B0cN2xvdYY29lkvjAvGf0YigEpdraU7Wml7Nog/exec`
// let teste = 'https://script.google.com/macros/s/AKfycbxilL9-xdd-d_gWzJI3vscHH0JUWOJBh46foS7vepDbaiEa0KQwbIxEfkG1t45h-XGu1w/exec'

// export default function handler(req, res) {
//   const scriptGoogle = teste;
//   const dadosFormulario = document.forms('formularioNewsletter')

//   dadosFormulario.addEventListener('submit', function (e) {
//     e.preventDefault();

//     fetch(scriptGoogle, {
//       method: 'POST',
//       body: new FormData(dadosFormulario)
//     })
//     .then(response => {
//       // Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso
//       alert('Dados enviados com sucesso', response);
//       dadosFormulario.reset();
//     })
//     .catch(error => {
//       // Se houver erro no envio, a mensagem abaixo será exibida
//       console.error('Erro no envio dos dados!', error)
//     })
//   })
//   // res.status(200).json({ name: "John Doe" });
// }

// // export default function handler(req, res) {
// //   if (req.method === 'POST') {
// //     // Process the form data sent in the request body
// //     const { name, whats, bairro } = req.body;

// //     // Aqui você pode adicionar a lógica para manipular os dados,
// //     // como salvar no banco de dados ou enviar para outro serviço.
// //     console.log({ name, whats, bairro });

// //     // Envie uma resposta de sucesso
// //     res.status(200).json({ message: 'Dados enviados com sucesso' });
// //   } else {
// //     // Handle any other HTTP method
// //     res.status(405).json({ message: 'Método não permitido' });
// //   }
// // }
