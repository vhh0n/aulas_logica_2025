const prompt = require('prompt-sync')()
//peça 2 numeros
let numero = Number(prompt('digite um número);'))
let numero2 = Number(prompt('digite o próximo número);'))
//ver qual é maior ou menor
let maior = numero > numero2
let menor = numero < numero2
console.log(maior)
if (numero > numero2) {
    console.log(`O número ${numero} é maior que ${numero2}`)
}
else { (numero < numero2) 
        console.log(`O número ${numero} é menor que ${numero2}`)
    }
