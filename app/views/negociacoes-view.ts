export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }
  template(): string {
    return `
    <table class="table table-hover table-bordered">
      <thead> 
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
    </table>
    `;
  }

  update(): void { // renderiza esse template no elemento que eu capturei atraves do construtor para pegar com o querySelector
    this.elemento.innerHTML = this.template()
  }
}