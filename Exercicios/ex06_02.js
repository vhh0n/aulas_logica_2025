//Gere 6 numeros do sorteio mega-sena de forma aleatória
const prompt = require('prompt-sync')()
for(let i = 0; i < 6; i++){
    console.log(Math.floor(Math.random()* 60 + 1))
}
