const prompt = require('prompt-sync')()

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',]
for(let mes of meses){
     if(mes.startsWith("J")){
    console.log(mes)
}}
