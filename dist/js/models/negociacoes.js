// representa a lista de negociacoes
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes]; //pega cada item dessa lista e colocar dentro dessa nova lista (spread operator)
    }
}
