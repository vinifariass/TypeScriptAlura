import { Negociacao } from "./negociacao.js";

// representa a lista de negociacoes
export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  public lista(): readonly Negociacao[] { //somente leitura
    return [...this.negociacoes]; //pega cada item dessa lista e colocar dentro dessa nova lista (spread operator)
  }
}

