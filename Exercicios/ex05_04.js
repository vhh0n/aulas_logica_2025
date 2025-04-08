//faça um programa que leia 10 valores inteiros
//encontre maior valor
//encontre menor valor
//calcule e mostre a média dos números lidos

const prompt = require('prompt-sync')()

let contagem = 0
let entrada
let maior = 0
let menor = Infinity
while(contagem <= 10){
    entrada = Number(prompt('Digite um numero: '))
    if(entrada > maior){
        maior = entrada
    }
    if(entrada < menor){
        menor = entrada
    }

    soma += entrada
    //soma = entrada + soma
    contagem++
}

let media = soma / 10
console.log(`Maior valor: ${maior}`)
console.log(`Maior valor: ${maior}`)
console.log(`Média: ${media.toFixed(2)}`)