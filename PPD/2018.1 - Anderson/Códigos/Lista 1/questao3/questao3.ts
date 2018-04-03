

declare function require(name: string): any;
var readline = require('readline-sync');


function mediaG (notasP: Array<string>, notasA: Array<string>):number{
    let somaP: number = 0;
    let somaA: number = 0;

    for(let nota of notasP){
        somaP += Number(nota);
    }
    
    let mediaP = somaP/notasP.length;

    for(let nota of notasA){
        somaA += Number(nota);
    }
    
    let mediaA = somaA/notasA.length;

    let mediaFinal = (mediaP + mediaA)/2

    return mediaFinal
}

let notas_prova: Array<string> = readline.question("Digite as notas provas separadas por espaço: ").split(" ");
let notas_ativ: Array<string> = readline.question("Digite as notas atividades separadas por espaço: ").split(" ");

console.log(mediaG(notas_prova, notas_ativ))

/* 

let notas_prova_num: Array<number> = [];

for(let indice in notas_prova){
    notas_prova_num.push(Number(notas_prova[indice]))
} */