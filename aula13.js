//declarando novo vetor
//reconheco que é um vetor pelo uso dos colchetes
let listaVazia = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2])

//declarando de uma lista de strings
let nomes = ["Ana", "João", "Maria"]
console.log(nomes)

//declaração de uma lista mista
let listaMista = [1, "dois", true, 2.5]
console.log(listaMista)

let listaComLista = [
    ["coca cola" , "Cachorro quente"]
    [5.0, 10]
]
console.log(listaComLista)
//Alterando valores da lista
let frutas = ['Maçã','pera','Uva', 'Abacaxi']
console.log(frutas)
//função push adiciona um novo elemento no vetor
frutas.push('Laranja')
console.log(frutas)
//spread adiciona novo elemento no vetor
frutas = [...frutas, 'Banana']
console.log(frutas)

frutas.splice(2, 0,'Morango')
console.log(frutas)

//excluindo item da lista
frutas.splice(3,1) //Excluindo item pelo indice
console.log(frutas)
frutas.shift() //excluindo primeiro item da lista
frutas.pop() //excluir ultimo item da lista
console.log(frutas)
    //acessar itens da lista
    console.log(frutas[3]) //acesso a partir um posição
    console.log(frutas.slice(0.4)) //posição 0 ate 4
    console.log(frutas.slice(1)) //a partir da posição 1
    console.log(frutas.slice(-1)) //mostra os itens do fim para o inicio
    console.log(frutas.length[3]) //total de itens na lista

    //ordenar itens na lista
    console.log(frutas)
    frutas.sort() //ordenar a lista de forma crescente
    console.log(frutas)
    frutas.reverse() //ordenando a lista de forma decrescente
    console.log(frutas)