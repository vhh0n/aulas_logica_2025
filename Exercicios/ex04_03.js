constprompt = require('prompt-sync')()

let mes = Number(prompt('Qual é o mes'))

switch(mes){
    case mes = 1:
        console.log("janeiro")
        break;
    case mes = 2:
        console.log("fevereiro")
        break;
    case mes = 3:
        console.log("março")
        break;
    case mes = 4:
        console.log("abril")
        break
        case mes = 5:
        console.log("maio")
        break;
    case mes = 6:
        console.log("junho")
        break;
    case mes = 7:
        console.log("julho")
        break;
    case mes = 8:
        console.log("agosto")
        break
        case mes = 9:
        console.log("Setembro")
        break;
    case mes = 10:
        console.log("Outubro")
        break;
    case mes = 11:
        console.log("Novembro")
        break;
    case mes = 12:
        console.log("Dezembro")
        break
   
}
const prompt = require('prompt-sync')();

let salario1 =Number(prompt('digite seu salario: '))
switch (true) {
    case salario1 <=2000:
        console.log(`esse é seu salario: ${salario1 +(salario1 * 12 / 100)}`);
        break;
        case salario1 >200 && salario1 <=4000:
        console.log(`voce ira receber ${salario1 + (salario1 * 10 / 100)}`);
        break;
        default:
        console.log(`voce ira receber ${salario1 + (salario1 * 8 / 100)}`);
}

