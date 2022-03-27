import { Imprimivel } from '../src/utils/imprimivel.js'

export class Negociacao extends Imprimivel {
    constructor(
        public _data: Date,
        public readonly quantidade: number,
        public readonly valor: number) { super() }
    // deixando publico mas ninguem pode alterar

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get Data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString)
        const valor = parseFloat(valorString)
        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto():string {
        return  `
        Datra:${this._data},
        Quantidade: ${this.quantidade},
        Valor?${this.valor}`
    }
}