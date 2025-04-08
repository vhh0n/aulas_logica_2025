const prompt = require('prompt-sync')()
let idade = 0
let sexo 
let mediaH = 0
let qtdH = 0
let mediaF = 0
let qtdf = 0
for(let i = 0; i < 10; i++){
    idade = Number(prompt('Digite a média: '))
    sexo = prompt('Digite o sexo: M ou F:').toUpperCase

    if(sexo = 'M'){
        mediaH += idade
        qtdH++
    }else{
        mediaF += idade
        qtdF++
    }
}
console.log(`A média dos homens é ${mediaH / qtd}`)
console.log(`A média das mulheres é ${mediaF / qtd}`)