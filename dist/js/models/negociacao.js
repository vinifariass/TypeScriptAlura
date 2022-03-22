export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // deixando publico mas ninguem pode alterar
    get volume() {
        return this._quantidade * this._valor;
    }
    get Data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
