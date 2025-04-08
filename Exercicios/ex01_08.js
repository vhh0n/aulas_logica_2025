const prompt = require('prompt-sync')()

let altura = Number(prompt('Digite a altura'))
let largura = Number (prompt('Digite a largura'))
let area = largura * altura

let tintaNecessária = area / 2
console.log(`Área${area}`)
console.log(`Tinta necessária${tintaNecessária.toFixed(2)} litros de tinta`)
