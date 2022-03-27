import { Negociacao } from "./negociacao.js";
import { Modelo } from '../src/interfaces/modelo.js'



// representa a lista de negociacoes
export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  public lista(): readonly Negociacao[] { //somente leitura
    return [...this.negociacoes]; //pega cada item dessa lista e colocar dentro dessa nova lista (spread operator)
  }
  public ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
  }
}

