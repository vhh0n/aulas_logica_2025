const prompt = require('prompt-sync')()
let comidas = []

for(let i = 1; i <= 6 ; i++){
    let comida = prompt(`Digite ${i}ª comida:`)
    comidas.push(comida)
}
console.log(comidas);



console.log (comidas[0])     

console.log (comidas[3])   

comidas[6] = 'Picanha'
console.log(comidas)

comidas.push('Pão de Alho')
console.log(comidas)

comidas.shift()
console.log(comidas)

comidas.pop()
console.log(comidas)

console.log(comidas.slice(0,3))

console.log(comidas.slice(3,7))

console.log(comidas.length)

comidas.reverse()
console.log(comidas)
