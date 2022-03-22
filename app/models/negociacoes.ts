import { Negociacao } from "./negociacao.js";

// representa a lista de negociacoes
export class Negociacoes {
  private negociacoes: Array<Negociacao
  > = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  lista(): Array<Negociacao> {
    return this.negociacoes;
  }
}

