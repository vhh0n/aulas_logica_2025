const prompt = require('prompt-sync')()

let numero = Number(prompt('Selecione um número'))

if(numero % 2 == 0){
    console.log('número é par')
}else{
    console.log('Número é ímpar')
}