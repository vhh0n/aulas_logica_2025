//Exercícios aula de lógica
console.log("Bem-Vindo ao curso de JavaScript!")
console.log("Estou aprendendo a usar o console.log")
console.log(15 + 25)
console.log(100 - 45)
console.log(12 * 7)
console.log(144 / 12)
console.log(20 & 3)
console.log(2 ** 5)

console.log('Exercício')
console.log('1')
let nome = 'Victor Hugo'
let altura = '1,77'
let escola = 'SESI'
let ano = '2008'
console.log(nome, altura, escola, ano)

console.log('2')
const prompt = require('prompt-sync')()

let nome2 = 'Ricardo'
let materia = 'programacao'
let ano2 = '2022'
console.log(nome2, materia, ano2)

console.log('3')
nome2 = parseInt(prompt(" Qual é seu nome? "))
materia = parseFloat(prompt(' O que está cursando? '))
ano2 = prompt(' Ingressou no instituto em que ano? ')
console.log(`Seu nome é ${nome2}, você cursa ${materia} e ingressou em ${ano2}. Bem Vindo!`)

console.log(typeof(materia))
console.log(typeof(ano2))
console.log(materia + ano2)


