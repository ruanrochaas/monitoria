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
                console.log("cliente já cadastrado");
            }
        }
    }
}
interacao();
