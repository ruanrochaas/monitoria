"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
class Loja {
    constructor(clientes, roupas) {
        this.clientes = clientes;
        this.roupas = roupas;
    }
    getClientes() {
        return this.clientes;
    }
    setClientes(clientes) {
        this.clientes = clientes;
    }
    getRoupas() {
        return this.roupas;
    }
    setRoupas(roupas) {
        this.roupas = roupas;
    }
    criCadCliente(nome, cpf, compras) {
        let clienteN = new cliente_1.Cliente(nome, cpf, compras);
        for (let cliente of this.clientes) {
            if (cliente.getCpf() == clienteN.getCpf()) {
                return false;
            }
        }
        this.clientes.push(clienteN);
        return true;
    }
    cadCliente(cliente) {
        return;
    }
}
exports.Loja = Loja;
