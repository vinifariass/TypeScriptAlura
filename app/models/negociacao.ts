export class Negociacao {
    constructor(
        public readonly _data: Date, 
        public readonly _quantidade: number,  
        public readonly _valor: number) {}

        // deixando publico mas ninguem pode alterar

    get volume(): number {
        return this._quantidade * this._valor;
    }
}