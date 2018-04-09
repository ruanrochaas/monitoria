"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
const roupa_1 = require("./roupa");
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
    criarEcadastrarRoupa(cor, tamanho, codigoDeBarras, tipo, quantidade) {
        let roupa;
        roupa = new roupa_1.Roupa(cor, codigoDeBarras, tamanho, tipo, quantidade);
        for (let roupaPercorrida of this.roupas) {
            if (roupaPercorrida.getCodigo() == roupa.getCodigo()) {
                return false;
            }
        }
        this.roupas.push(roupa);
        return true;
    }
    venderRoupa(codRoupa, cpfCliente, quantidadeR) {
        let clienteX;
        for (let pCliente of this.clientes) {
            if (pCliente.getCpf() == cpfCliente) {
                clienteX = pCliente;
            }
        }
        if (clienteX == undefined) {
            return false;
        }
        let roupaX;
        for (let proupa of this.roupas) {
            if (proupa.getCodigo() == codRoupa) {
                roupaX = proupa;
            }
        }
        if (roupaX == undefined) {
            return false;
        }
        let novaQtd = roupaX.getQtd() - quantidadeR;
        roupaX.setQtd(novaQtd);
        clienteX.adicionarRoupa(quantidadeR, roupaX);
        return true;
    }
}
exports.Loja = Loja;
