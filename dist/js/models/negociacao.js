export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // deixando publico mas ninguem pode alterar
    get volume() {
        return this.quantidade * this.valor;
    }
    get Data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
