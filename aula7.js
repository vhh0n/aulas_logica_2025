//Estruturas condicionais e operadores relacionais
const prompt = require('prompt-sync')()

let a = 2
let b = 3

console.log(a == b) //Relação de igualdade
console.log(a != b) //Relação de Diferença
console.log(a > b) //maior
console.log(a >= b) //Maior ou igual
console.log(a < b) //menor
console.log(a <= b) //menor ou igual

//Estruturas Condicionais
let tenhoIngresso = false
if(tenhoIngresso == true){
    console.log('Posso entrar!')
}
//verificar se é maior ou igual a 18
let idade = Number(prompt('Qual sua idade'))
if(idade >= 18){
    console.log('Maior idade')
}
if(idade >= 18){
    console.log('Menor de idade')
}
tenhoIngresso = false
if(tenhoIngresso == true){
    console.log('posso entrar?')
}else{
    console.log('estou barrado no baile')
}
idade = Number(prompt(`Digite a idade: `))
if(idade >= 18){
    console.log(`vc é maior de idade`)
}else{
    console.log(`vc é menor de idade`)
}