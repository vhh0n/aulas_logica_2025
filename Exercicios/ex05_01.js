//Faça um programa e exiba a contagem regressiva do 10 ao 0
const prompt = require('prompt-sync')()
let contador = 10
while(contador >= 0){
    console.log(`O contador é ${contador}`)
    contador = contador - 1
}
console.log("Fim")