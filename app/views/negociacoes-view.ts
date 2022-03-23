import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }
  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead> 
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>${model.lista().map(negociacao => {
      return `
          <tr>
            <td>${new Intl.DateTimeFormat().format(negociacao._data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
          </tr>
        `
    }).join('')}</tbody?
    </table>
    `;
  }

  update(model: Negociacoes): void { // renderiza esse template no elemento que eu capturei atraves do construtor para pegar com o querySelector
    const template = this.template(model)
    console.log(template);

    this.elemento.innerHTML = this.template(model)
  }
}