const prompt = require('prompt-sync')()

let dia = Number(prompt('Dia da Semana'))

switch(dia){
    case dia = 1:
    console.log("Domingo")
    break
    case dia = 2:
        console.log("Segunda Feira")
        break
         case dia >= 3:
    console.log("Terça Feira")
    break
    case dia = 4:
        console.log("Quarta Feira")
        break
        case dia = 5:
        console.log("Quinta Feira")
        break
        case dia = 6:
        console.log("Sexta Feira")
        break
    default:
        case dia = 7:
        console.log("Sábado")
}