let numeros = []

for(let i = 0; i < 5; i++){
    let numero = Math.floor(Math.random() * 100)
    numeros.push(numero)

}

for (let i = 0; i < numeros.lenght; i++){
    console.log('Numero:' + numeros[i] + "| dobro " + (numeros[i] * 2))
}