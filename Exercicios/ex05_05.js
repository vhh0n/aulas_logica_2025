const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite um número: "))
let fatorial = 1
let contagem = numero
let sequencia = numero + "! = "//concatenando valores

while(contagem >= numero){
    fatorial = fatorial * contagem
    sequencia = sequencia + 1
    if(contagem >1 ){
        sequencia = sequencia + '*'
    }
    contagem--
}

sequencia = sequencia + "=" + fatorial
console.log(sequencia)