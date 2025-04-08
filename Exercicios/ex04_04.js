const prompt =require('prompt-sync')()

let nota1 = Number(prompt(`Digite a primeira nota nota: `))
let nota2 = Number(prompt(`Digite a segunda nota: `))
let soma = (nota1 + nota2) / 2
console.log(soma)
switch (true) {
    case soma > 7:
        console.log("aprovado")
        break;
case soma >= 5 && soma <= 7:
    console.log("De recuperação")
    case soma < 5:
        console.log("Reprovado")
        break;
}