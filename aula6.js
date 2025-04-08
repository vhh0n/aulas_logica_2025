const prompt = require('prompt-sync')()

//operação com variáveis
let nr1 = Number(prompt("digite um número?"))
let nr2 = Number(prompt("digite um número?"))

let soma = nr1 + nr2 
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)

let subtração = nr1 - nr2 
console.log(`A subtração entre ${nr1} - ${nr2} é igual: ${subtração}`)

let divisão = nr1 / nr2 
console.log(`A divisão entre ${nr1} / ${nr2} é igual: ${divisão}`)

let multiplicação = nr1 * nr2 
console.log(`A multiplicação entre ${nr1} * ${nr2} é igual: ${multiplicação}`)

let exponenciação = nr1 ** nr2 
console.log(`A exponenciação entre ${nr1} + ${nr2} é igual: ${exponenciação}`)

// Calculando valor do celular com desconto
let valor = Number(prompt('Digite o preço do celular'))
let desconto = Number(prompt('Digite o preço do desconto'))

valor = valor - desconto
console.log(`O valor do celular com desconto é R$${valor}`)

//atividade

let numero = Number(prompt('Escreva o número para mim'))
let dobro = numero * 2
let metade = numero / 2
console.log(`O valor do dobro é ${dobro} e sua metade é ${metade}`)

//atividade 2
//calculando custo do projeto
// let Horas por dia = 8
//descobri o total de dias que trabalhei no projeto
let horas_por_dia = 8
let dias_totais = 15
//calculando o total de horas 
let horas_trabalho = horas_por_dia * dias_totais
let custo_hora = 100
let custo_total = horas_trabalho * custo_hora
console.log(custo_total)