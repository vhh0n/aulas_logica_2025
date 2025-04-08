const prompt =require('prompt-sync')()

let salario = Number(prompt('insira seu salário'))
switch (true) {
    case salário <= 2000:
    console.log(`Esse é seu salário: ${salario +(salario * 12 / 100)}`)    
        break;
case salario > 2000 && salario <= 4000:
    console.log(`Esse é seu salário: ${salario +(salario * 10 / 100)}`);
        break;
default: 
console.log(`Você irá receber ${salario +(salario * 8 / 100)}`)
}