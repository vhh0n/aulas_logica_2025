//Receba números e verifique a soma e
//quantidade de todos os pares e ímpares
//digtados, digite 0 para nao receber mais
const prompt = require('prompt-sync')()

let entrada
let qtdPar = 0
let somaPar = 0
let qtdImpar = 0
let somaImpar = 0

console.log("Digite numeros (0 para encerrar):")
while(true){
    entrada = parseFloat(prompt("Número: "))

    if(entrada === 0){
        break //encerra o loop
    }

    if(entrada % 2 == 0){
        somaPar = entrada + somaPar
        qtdImpar++
    }
    else{
        somaImpar = entrada + somaImpar
        qtdImpar++
    }
}
console.log(`Soma dos pares: ${somaPara} e qtd de par${qtdPar}`)
console.log(`Soma dos ímpares: ${somaImpar} e qtd de Ímpar${qtdImpar}`)