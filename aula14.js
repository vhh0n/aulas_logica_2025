let frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi']

//A Variável x serve para iterar os valores ate o limite da lista
//O nome não é obrigatóriamente ser o nome i, x ou contador
//pode ser qualquer nome de variável
for(let x = 0; x < frutas.length; x++){
    //O lenght identifica o tamanho total da lista
    console.log(`A frutas é ${frutas[x]}`)
}

let listaNomes = ['Bill Gates', 'Rafinha', 'Raul Seixas', 'Estevan']
//
for(let nome of listaNomes){
    console.log(nome)
}

//verificando se é uma consoante
//lista de vogais
const prompt = require('prompt-sync')()
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    let letra = prompt('Digite uma letra')
    //se letra estiver incluso na lista
    //é uma vogal
    if(vogais.includes(letra.toLowerCase())){
        console.log('é uma vogal')
    }else if(consoantes.includes(letra.toLowerCase())){
        console.log('consoantes');}
   else{console.log('não é uma letra')}

   //Obtendo a posição do item
   for(let[pos,fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja a posição e a fruta
    console.log(`Posição${pos} e a fruta ${fruta}`)
   }

   //separando os itens em uma lista
   let produto = 'celular, Notebook, tv, tablet, headset'
   let listaproduto = produto.split(',')
   for(let produtos of listaprodutos){
    console.log(produtos)
   }

   //Percorrendo uma string em uma lista
   let palavra = 'Senai'
   for(let letra of palavra){
    console.log(letra)
   }