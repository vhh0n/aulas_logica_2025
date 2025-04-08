const prompt = require('prompt-sync')()

let AnoNascimento = Number(prompt('Qual sua data de nascimento?'))
let AnoAtual = Number(prompt('Qual o Ano Atual?'))

let idade = AnoNascimento - AnoAtual

switch(true){
    case idade < 10:
        console.log("Criança")
        break

        case idade >11 && idade <=17:
        console.log("Adolescente")
        break

        case idade >18 && idade <=59:
        console.log("Adulto")
        break

        case idade >60:
        console.log("Idoso")
        break
}
