const prompt = require(`prompt-sync`)()

//criando nossa primeira função
function Cabecalho(texto){
    console.log('-------------------------------')
    console.log(texto)
    console.log('---------------------------------')
}

//criando outra função, função de saudação
function Saudacao(){
    let nome = prompt(`Digite seu nome:`)
    console.log(`Bem Vindo de volta${nome}, tenha um bom dia.`)
}

//Chamando a função
//passando o parametro junto com a função
Cabecalho(`SESI/SENAI`)
//posso declarar uma variavel e passa-lá como parametro para função
let escola = `Sesi 025`
Cabecalho(escola)
Saudacao()

//criei a função que ira receber dois valores como parametro
//a partir desses valores, realizará o calculo e mostrará o resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}

Soma(5,6)
Soma(8,9)
Soma(8,18)

//Exercicio
//crie uma função com o nome Parlmpar, que receba por parâmetro um número e verifique se esse
//número é par ou ímpar, chame essa função por 2 vezes com números diferentes

function ParImpar(num){
    if(num % 2 == 0){
        console.log(`${num} é par`)
    }else{
        console.log(`${num} é impar`)
    }
}

ParImpar(5)
ParImpar(10)

function Media(n1, n2){
    let resultado = (n1 + n2) / 2
    return (resultado)
}

console.log(Media(6,8))
//Armazenei o retorno da função em uma variavel
let valor = Media(9,7)
//utilizei o retorno da função para escrever na tela
console.log(valor)
//utilizei a variavel que recebeu o retorno da função para
//chamar a função Par ou Impar passando o valor como parametro
ParImpar(valor)