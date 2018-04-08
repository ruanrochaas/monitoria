import {Loja} from "./loja";
import {Cliente} from "./cliente";
import {Roupa} from "./roupa";
declare function require(name: string): any;
var readline = require('readline-sync');

function interacao(){
    let loja: Loja = new Loja([],[]);
    let condParada: string = "";
    let cmd: Array<string>;
    while(condParada != "fim"){
        cmd = readline.question("Digite o comando: ").split(" ");
        condParada = cmd[0];
        if(cmd[0] == "cadastrarCliente"){
            let deuCerto: boolean = loja.criCadCliente(cmd[1], cmd[2], []);
            if(deuCerto){
                console.log("cliente cadastrado");
            }else{
                console.log("cliente já cadastrado");
            }
        }
    }
}

interacao();