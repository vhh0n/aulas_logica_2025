const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número:'))
if(numero >= 0) {
    console.log(`O número ${numero} é positivo`)
}
else { (numero < 0) 
    console.log(`O número ${numero} é negativo`)
}