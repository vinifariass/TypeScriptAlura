import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => res.json())// converte essa resposta em JSON
      .then((dados: NegociacoesDoDia[]) => {
        return dados.map(dadosDeHoje => {
          return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante)
        })
      })
  }
}