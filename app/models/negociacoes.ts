import { Negociacao } from "./negociacao.js";
import { Imprimivel } from '../src/utils/imprimivel.js'


// representa a lista de negociacoes
export class Negociacoes extends Imprimivel {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  public lista(): readonly Negociacao[] { //somente leitura
    return [...this.negociacoes]; //pega cada item dessa lista e colocar dentro dessa nova lista (spread operator)
  }
}

