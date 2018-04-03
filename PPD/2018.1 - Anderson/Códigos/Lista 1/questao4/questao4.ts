

declare function require(name: string): any;
var readline = require('readline-sync');

function encontrar (lista: Array<string>, num: number): boolean{
    for(let elemento of lista){
        if (Number(elemento) == num){
            return true
        }
    }
    return false
}

let lista: Array<string> = readline.question("Digite os elementos da lista separados por espaço: ").split(" ");
let num: number = Number(readline.question("Digite o numero que você quer encontrar: "));


if (encontrar(lista, num)){
    console.log("O " + num + " está dentro da lista.");
}else{
    console.log("O " + num + " não está dentro da lista.");
}