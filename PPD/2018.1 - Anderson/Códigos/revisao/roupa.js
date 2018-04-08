"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Roupa {
    constructor(cor, codigoB, tamanho, tipo, qtd) {
        this.cor = cor;
        this.codigoB = codigoB;
        this.tamanho = tamanho;
        this.tipo = tipo;
        this.qtd = qtd;
    }
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
    getCodigo() {
        return this.codigoB;
    }
    setCodigo(codigo) {
        this.codigoB = codigo;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTrabalho(tamanho) {
        this.tamanho = tamanho;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getQtd() {
        return this.qtd;
    }
    setNome(qtd) {
        this.qtd = qtd;
    }
}
exports.Roupa = Roupa;
