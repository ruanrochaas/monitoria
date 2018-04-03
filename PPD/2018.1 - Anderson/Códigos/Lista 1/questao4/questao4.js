var readline = require('readline-sync');
function encontrar(lista, num) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var elemento = lista_1[_i];
        if (Number(elemento) == num) {
            return true;
        }
    }
    return false;
}
var lista = readline.question("Digite os elementos da lista separados por espaço: ").split(" ");
var num = Number(readline.question("Digite o numero que você quer encontrar: "));
if (encontrar(lista, num)) {
    console.log("O " + num + " está dentro da lista.");
}
else {
    console.log("O " + num + " não está dentro da lista.");
}
