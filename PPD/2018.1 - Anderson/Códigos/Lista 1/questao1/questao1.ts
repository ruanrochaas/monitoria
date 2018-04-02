import {cin, cout} from "./readline";

let info1 = cin("Digite nome altura peso: ").split(" ");
let info2 = cin("Digite nome altura peso: ").split(" ");

if(parseFloat(info1[2]) > parseFloat(info2[2])){
    cout("A pessoa mais pesada é: " + info1[0])
}else{
    cout("A pessoa mais pesada é: " + info2[0])
}

if(parseFloat(info1[1]) > parseFloat(info2[1])){
    cout("A pessoa mais alta é: " + info1[0])
}else{
    cout("A pessoa mais alta é: " + info2[0])
}