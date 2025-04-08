const prompt = require('prompt-sync')()

let reais = parsefloat(prompt('Digite o valor em reais:'))
let cotacao = parseFloat(prompt('Digite a cotação em dolar'))

let dolares = reais / cotacao
console.log(`Tenho R$${reais} na minha carteira que equivale a $${dolares.toFixed(2)}`)
