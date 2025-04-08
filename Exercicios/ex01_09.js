const prompt = require('prompt-sync')()

let preco = Number(prompt('Digite o preço do produto:'))
let desconto = preço * 0.05
let precoComDdesconto = preco - preco * 0.05
console.log(`Preço com desconto ${preco.toFixed(2)}`)
console.log(`Preço com desconto ${precoComDesconto.toFixed(2)}`)