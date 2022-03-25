import { Negociacao } from './models/negociacao.js';
import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector(".form")
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault()
    controller.adiciona();
  })
  const negociacao = new Negociacao(new Date(), 10, 100);

  console.log(negociacao.volume);
} else {
  throw new Error("Não foi possível inicializar a aplicação. Verifique se o form existe.")
}
