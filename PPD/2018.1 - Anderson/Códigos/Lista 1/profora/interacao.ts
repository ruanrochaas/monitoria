declare function require(name: string): any;
var readline = require('readline-sync');

let frase: string = "";

while(frase != "fim"){
    let cmd: Array<string> = readline.question("Digite o comando: ").split(" ");


    
    console.log(cmd);
    
    frase = cmd[0]

    if(cmd[0] == "murilo"){
        console.log("é mentira");
    }

    if(cmd[0] == "pedro"){
        console.log("ele ama mais o igo e o ismael")
    }
}