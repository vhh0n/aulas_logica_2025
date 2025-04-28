//Variaveis globais e locais

function nomeEscola(cidadePara) {
    escola = "SESI"
    console.log(escola)
    //declarando uma variavel local
    var cidade = cidadePara
}
//essa variavel é uma variavel global pois ela pode ser acessada em qualquer
//parte do codigo
var escola = "Senai"
console.log(escola)
nomeEscola()
var cidade = "Mirandópolis"
console.log(cidade)

var x = 10 //variavel global
console.log('Fora da função', x)

function minhaFuncao(){
    let x = 0 //variavel global
    x = x + 1
    console.log('Dentro da função', x)
}
    function minhaFuncao(){}
    x +=1
    console.log("Fora da funcao de novo")