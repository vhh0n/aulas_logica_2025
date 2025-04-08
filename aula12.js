//FOR
const prompt = require('prompt-sync')()
for(let i = 0; i < 100 ; i++){
    console.log(i)
}

// Entregando os notebooks por ordem
console.log("Entregando notebooks")

for(let nr = 1; nr<= 32; nr++){
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