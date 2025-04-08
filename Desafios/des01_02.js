const prompt = require('prompt-sync')()

let horario = Number(prompt('Que horas são agora?'))
if (horario >= 5 && horario <= 11){
    console.log('Bom Dia!')
} else if (horario >= 12 && horario <= 17) {
    console.log('Boa Tarde!')
} else if (horario > 18 && horario <= 23) {
    console.log('Boa noite!')
} else { (temperatura >= 0 && 4) 
    console.log('Boa Madrugada!')
}