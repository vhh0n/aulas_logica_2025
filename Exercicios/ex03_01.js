const prompt = require('prompt-sync')()

let dia = Number(prompt(`Digite um numero de 1 a 7: `))
if(dia == 1){
    console.log(`Domingo`)
}else if(dia == 2){
    console.log(`Segunda`)
}else if(dia == 3){
    console.log(`Terça`)
}else if(dia == 4){
    console.log(`Quarta`)
}else if(dia == 5){
    console.log(`Quinta`)
}else if(dia == 6){
    console.log(`Sexta`)
}else if(dia == 7){
    console.log(`Sabado`)
}