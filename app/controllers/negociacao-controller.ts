import { logarTempoDeExecucao } from "./decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { inspect } from "./decorators/inspect.js";
import { domInjector } from "./decorators/domInjector.js";
import { NegociacoesService } from "../src/services/negociacoes-service.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")

  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView')
  private mensagemView = new MensagemView("#mensagemView")
  private negociacoesService = new NegociacoesService();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  //decorator é chamado com arroba antes da funcao
  @inspect
  @logarTempoDeExecucao();

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value);
    if (!this.ehDiaUtil(negociacao._data)) {
      this.mensagemView
        .update("Apenas negociações em dias úteis são aceitas")
      return;
    }
    this.negociacoes.adiciona(negociacao)
    this.limparFormulario();
    this.atualizaView();
  }

  importaDados(): void {
    this.negociacoesService.obterNegociacoes()
      .then(negociacoesDeHoje => {
        for (let negociacao of negociacoesDeHoje) {
          this.negociacoes.adiciona(negociacao)
        }
        this.negociacoesView.update(this.negociacoes)
      })
  }

}
  private ehDiaUtil(data: Date) {
  return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
}

  private limparFormulario(): void {
  this.inputData.value = "";
  this.inputQuantidade.value = "";
  this.inputValor.value = "";
  this.inputData.focus();
}

  private atualizaView() {

  this.negociacoesView.update(this.negociacoes)
  this.mensagemView.update("Negociacao adicionada com sucesso")
}
}