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
                console.log("cliente já possui cadastrado");
            }
        }
        if (cmd[0] == "criarEcadastrarRoupa"){
            let deuCerto : boolean = loja.criarEcadastrarRoupa(cmd[1], cmd[2], cmd[3], cmd[4], Number (cmd[5]));
            if (deuCerto == true){
                console.log("Roupa Cadastrada");
            } else {
                console.log("Roupa já possui cadastro");
            }

        }

        if(cmd[0] == "venderRoupa"){
            let deuCerto : boolean = loja.venderRoupa(cmd[1],cmd[2], Number(cmd[3]));
            if (deuCerto){
                console.log("Roupa vendida");
            }
            else{
                console.log("Impossivel vender roupa");
            }
        }
    }
}

interacao();