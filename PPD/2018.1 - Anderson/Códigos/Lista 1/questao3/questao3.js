var readline = require('readline-sync');
function mediaG(notasP, notasA) {
    var somaP = 0;
    var somaA = 0;
    for (var _i = 0, notasP_1 = notasP; _i < notasP_1.length; _i++) {
        var nota = notasP_1[_i];
        somaP += Number(nota);
    }
    var mediaP = somaP / notasP.length;
    for (var _a = 0, notasA_1 = notasA; _a < notasA_1.length; _a++) {
        var nota = notasA_1[_a];
        somaA += Number(nota);
    }
    var mediaA = somaA / notasA.length;
    var mediaFinal = (mediaP + mediaA) / 2;
    return mediaFinal;
}
var notas_prova = readline.question("Digite as notas provas separadas por espaço: ").split(" ");
var notas_ativ = readline.question("Digite as notas atividades separadas por espaço: ").split(" ");
console.log(mediaG(notas_prova, notas_ativ));
/*

let notas_prova_num: Array<number> = [];

for(let indice in notas_prova){
    notas_prova_num.push(Number(notas_prova[indice]))
} */ 
