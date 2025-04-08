//Escreva um programa que fique recebendo o valor de varios produtos
//Ate que eu digite 0
//e exiba no final a soma da minha comprae a quantidade de produtos lidos
const prompt = require('prompt-sync')()
let soma = 0
let qtd = 0
let encerrar = ""
while(encerrar == "Sub-Total"){
let valor = Number(prompt('Digite o valor do produto(0 para encerrar):'))
 soma = soma + valor
 qtd++
 encerrar = prompt("Deseja continuar: (digite Sub-Total")
}

console.log(`Foram informados ${qtd}`)
//toFixed para colocar somente 2 digitos apos a virgula
console.log(`Valor total dos produtos ${soma.toFixed(2)}`)

//crie



console.log("********************************")
console.log(" 🐀   JOGO DA ADIVINHAÇÃO  🐀  ")
console.log("********************************")

let nrSorteado = Math.floor(Math.random() * 100 + 1) //gera um numero
let acertou = true 

while(acertou){
    const chute = parseInt(prompt('Digite um número entre 1 e 99'))

    if(chute > nrSorteado){
    console.log(`Você chutou ${chute}, tente um número!`)
} 
else if(chute < nrSorteado){
    console.log(`Você chutou ${chute}, tente um número!`)
}
else if(chute == nrSorteado){
    console.log(`Você chutou ${chute}, tente um número!`)
    acertou = true
}
}

