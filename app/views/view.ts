import { logarTempoDeExecucao } from "../controllers/decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = document.querySelector(seletor) as HTMLElement;
      
    }else{
      throw new Error(`Seletor ${seletor} não existe no DOM verifique`)
    }
    if (escapar) this.escapar = escapar;
  }

  @logarTempoDeExecucao();
  public update(model: T): void {
    let template = this.template(model)
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    this.elemento.innerHTML = template;
    
  }

  protected abstract template(model: T): string;

}

//quando coloca ? o parametro fica opcional se passar false