export class View {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }

  update(model: string): void {
    const template = this.template(model)
    this.elemento.innerHTML = template;
  }

  template(model: string): string {
    throw new Error("Classe filha precisa implementar o método template")
  }
}