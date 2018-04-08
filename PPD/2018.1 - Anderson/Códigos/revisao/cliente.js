"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, cpf, compras) {
        this.nome = nome;
        this.cpf = cpf;
        this.compras = compras;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getCompras() {
        return this.compras;
    }
    setCompras(compras) {
        this.compras = compras;
    }
}
exports.Cliente = Cliente;
