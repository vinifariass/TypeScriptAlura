import { inspect } from "../controllers/decorators/inspect.js";
import { logarTempoDeExecucao } from "../controllers/decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
  protected elemento: HTMLElement;
  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = document.querySelector(seletor) as HTMLElement;
      
    }else{
      throw new Error(`Seletor ${seletor} não existe no DOM verifique`)
    }
   
  }


  public update(model: T): void {
    let template = this.template(model)
    
    this.elemento.innerHTML = template;
    
  }

  protected abstract template(model: T): string;

}

//quando coloca ? o parametro fica opcional se passar false