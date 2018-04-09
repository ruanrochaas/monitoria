"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loja_1 = require("./loja");
var readline = require('readline-sync');
function interacao() {
    let loja = new loja_1.Loja([], []);
    let condParada = "";
    let cmd;
    while (condParada != "fim") {
        cmd = readline.question("Digite o comando: ").split(" ");
        condParada = cmd[0];
        if (cmd[0] == "cadastrarCliente") {
            let deuCerto = loja.criCadCliente(cmd[1], cmd[2], []);
            if (deuCerto) {
                console.log("cliente cadastrado");
            }
            else {
                console.log("cliente já possui cadastrado");
            }
        }
        if (cmd[0] == "criarEcadastrarRoupa") {
            let deuCerto = loja.criarEcadastrarRoupa(cmd[1], cmd[2], cmd[3], cmd[4], Number(cmd[5]));
            if (deuCerto == true) {
                console.log("Roupa Cadastrada");
            }
            else {
                console.log("Roupa já possui cadastro");
            }
        }
        if (cmd[0] == "venderRoupa") {
            let deuCerto = loja.venderRoupa(cmd[1], cmd[2], Number(cmd[3]));
            if (deuCerto) {
                console.log("Roupa vendida");
            }
            else {
                console.log("Impossivel vender roupa");
            }
        }
    }
}
interacao();
