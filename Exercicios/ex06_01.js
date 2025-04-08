// Utilizanado For, exiba todos os ímpares, de

//Montando o for
//for (inicializador, condição e interação)

const prompt = require('prompt-sync')()

for(let i = 1; i <= 40 ; i++){
    //if(i % 2 == 1)
        if(i % 2 ! 0){
            console.log(`$`)
        }
    console.log(i)
}
console.log("Entregando Ímpar")

for(let nr = 1; nr<= 40; nr++){
    let nome = prompt(`Quem é o número ${nr}`)
    let presente = prompt(`O(A) ${nome} veio para`)

    if(presente == "S"){
        console.log(`Pegar notebook ${nr}`)
        console.log(`Pegar mouse ${nr}`)
        console.log(`Pegar fonte ${nr}`)
        console.log(`Levar notebook até ${nr}`)
    }
    else{
        console.log(`não pegar notebook ${nr}`)
    }
}