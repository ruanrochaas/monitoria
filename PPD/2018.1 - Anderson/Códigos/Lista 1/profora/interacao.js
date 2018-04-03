var readline = require('readline-sync');
var frase = "";
while (frase != "fim") {
    var cmd = readline.question("Digite o comando: ").split(" ");
    console.log(cmd);
    frase = cmd[0];
    if (cmd[0] == "murilo") {
        console.log("é mentira");
    }
    if (cmd[0] == "pedro") {
        console.log("ele ama mais o igo e o ismael");
    }
}
