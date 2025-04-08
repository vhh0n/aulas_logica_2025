const prompt = require('prompt-sync')()
let filmes = ['Need for Speed','Oppenheimer','Vingadores: Ultimato','Clube da Luta', 'Transformers: Vingança dos Derrotados','Batman','Coringa']
console.log (filmes[0])     

console.log (filmes[3])   

filmes[6] = 'Gente Grande'
console.log(filmes)

filmes.push('Olhos Famintos')
console.log(filmes)


filmes.splice(4, 0,'Rei Leão')
console.log(filmes)

filmes.shift()
console.log(filmes)

filmes.pop()
console.log(filmes)

console.log(filmes.slice(0,3))

console.log(filmes.slice(3,7))

console.log(filmes.length)

filmes.reverse()
console.log(filmes)
