//solicite os parametros de inicio, fim e passo
//para o laço de repetição usando for
//exiba os valores da variavel
const prompt = require('prompt-sync')()

let inicio = Number(prompt('Digite o valor do inicio:'))
let fim = Number(prompt('Digite o valor do fim:'))
let passo = Number(prompt('Digite o valor do passo:'))

for(inicio; inicio < fim; inicio += passo){
    console.log(`valor inicial: ${inicial}`)
    console.log(`valor fim: ${fim}`)
    console.log(`valor de passos: ${passo}`)
    console.log(`===============================`)
}