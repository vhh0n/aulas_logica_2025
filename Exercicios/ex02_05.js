const prompt = require('prompt-sync')()

let numero = Number(prompt('Qual sua idade?'))
if(numero > 18) {
    console.log('Você é de maior')
}
else { (numero < 18) 
    console.log('Você é de menor')
}