const prompt = require('prompt-sync')()
let metros = Number(prompt("Insira sua medição em metros:"))
let centímetros = metros * 100
let Quilômetros = metros / 1000
let milímetros = metros * 1000
console.log(`Sua converção de centímetros para metros é ${metros}, de metros para quilômetros é ${Quilômetros} e de metros para milímetros é ${milímetros}`)