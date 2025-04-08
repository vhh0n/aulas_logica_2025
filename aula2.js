//importando a biblioteca para entrada de dados
const prompt = require('prompt-sync')()


//Variaveis e constantes
//passo 1:

//Variáveis e Constantes
//Passo 1 receber o nome da pessoa
let nome= 'Ayrton';
//passo 2 Receber a idade da pessoa
let idade= '36';
//passo 3 receber o peso da pessoa
let peso= '76.6'
//passo 4 exibir o nome;
console.log('nome', 'idade', 'peso');

nome = 'Ricardo'
console.log('nome', 'idade', 'peso');

//REceber e armazena o texto
    let     curso   =    "Desenvolvedor de Sistemas"
// Tipo     nome  recebe   valor   na variavel

//Exibir valor armazenado
console.log("curso") //imprimo uma string(texto)
console.log(curso) //valor que esta dentro da variavel
console.log("curso", curso);

//criando e atribuindo valor a outras variáveis
let idade2 = 35 // valor do tipo int
let temperatura = 23.5 // valor do tipo float
let nome2 = "Lyuz"
console.log("Olá", nome2 , "você tem:", idade2, "e hoje está fazendo", temperatura, "ºC")

//usando template String
console.log(`Olá ${nome2}, você tem ${idade2} e hoje está fazendo: ${temperatura}ºC`)

let chovendo = false
let dia = true 
// as constantes nao podem ser reatribuidas novos valores
const PI = 3.1415

//importando a biblioteca para entrada de dados

//utilizando o prompt para receber dados
//entrada de dados

//no prompt sempre recebemos uma string
nome = prompt('qual é seu nome?')

//usando o parseint ou parsefloat converte os valores recebidos
//que vem como string para int ou float
idade = parseInt(prompt("Qual sua idade"))
peso = parseFloat(prompt('Qual seu peso?'))
console.log(`Seu nome é ${nome}, você tem ${idade} e pesa ${peso}`)
// Valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
console.log(idade + peso)
//apos a conversao dos valores é possivel realizar
//calculos matematicos