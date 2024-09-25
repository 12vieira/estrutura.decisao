const prompt = require('prompt-sync')();

const number = parseFloat(prompt(`digite um numero: `));

if(number%2 != 0){
    console.log(`o número digitado é ÍMPAR`);
}else{
    console.log(`o número digitado é PAR`);
}