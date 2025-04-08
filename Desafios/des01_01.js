const prompt = require('prompt-sync')()

let temperatura = Number(prompt('Quantos graus está fazendo hoje?'))
if (temperatura <=15){
    console.log('Hoje está fazendo bastante frio!')
} else if (temperatura > 15 && temperatura <= 25) {
    console.log('Hoje o clima está bem agaradável')
} else if (temperatura > 26 && temperatura <= 35) {
    console.log('Hoje o clima está quente')
} else { (temperatura >35) 
    console.log('Hoje está insuportável')
}