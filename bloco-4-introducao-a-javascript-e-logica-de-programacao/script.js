const a = 2;
const b = 3;

console.log('Soma ' + (a + b))
console.log ('Subtração ' + (a - b))
console.log('Multiplicação ' + (a * b))
console.log('Divisão ' + (a / b))
console.log('Módulo ' + (a % b))

const num1 = 3;
const num2 = 2;

if(num1 > num2){
    console.log(num1 + ' é maior que ' + num2)
}else{
    console.log(num2 + ' é maior que ' + num1)
}

const num1 = 20;
const num2 = 19;
const num3 = 21;

if(num1 > num2 && num1 > num3){
    console.log(num1 + ' É maior que ' + num2 + ' e ' + num3)
}else if(num2 > num1 && num2 > num3){
    console.log(num2 + ' É maior que ' + num1 + ' e ' + num3)
}else{
    console.log(num3 + ' é maior que ' + num1 + ' e ' + num2)
}

const num1 = 0;

if(num1 > 0){
    console.log(true)
}else if(num1 < 0){
    console.log(false)
}else{
    console.log('O número é zero')
}

const a = 50;
const b = 30;
const c = 70;

let areaCal = a + b + c;

let positive = a > 0 && b > 0 && c > 0;

if(positive){
    if(areaCal == 180){
        console.log(true)
    }else{
        console.log(false)
    }
}else{
    console.log('Número inválido')
}


const peca = 'rainha';

switch(peca){
    case 'rei':
        console.log('pode se mover para qualquer casa adjacente')
        break;
    case 'bispo':
        console.log('se move em uma linha reta diagonalmente no tabuleiro')
        break;
    case 'rainha':
        console.log('pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente')
        break;
    case 'cavalo':
        console.log('move-se por duas casas horizontalmente ou verticalmente')
        break;
    case 'torre':
        console.log('move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas')
        break;
    case 'peao':
        console.log('se movem somente para frente, uma casa por vez')
        break;
}

const nota = 90;

if(nota < 0 || nota > 100){
    console.log('Error, nota inválida')
}else if(nota >= 90){
    console.log('Sua nota foi A')
}else if(nota >= 80){
    console.log('Sua nora foi B')
}else if(nota >= 70){
    console.log('Sua nota foi C')
}else if(nota >= 60){
    console.log('Sua nota foi D')
}else if(nota >= 50){
    console.log('Sua nota foi E')
}else{
    console.log('Sua nota foi F')
}

const a = 9;
const b = 4;
const c = 7;

let resposta = false;

if(a %2 == 0 || b %2 == 0 || c %2 == 0){
    resposta = (true)
};

console.log(resposta)

const a = 3;
const b = 5;
const c = 7;

let resposta = false;

if(a %2 !== 0 || b %2 !== 0 || c %2 !== 0){
    resposta = (true)
};
console.log(false)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for(let index = 0; index < numbers.length; index +=1){
    result += numbers[index]
}
console.log(result / numbers.length)


//Dúvidas
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);

///Por que comrça na posição 1?


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] %2 !== 0)
    result += 1
}
if(result === 0){
    console.log('Nenhum número ímpar encontrado')
}else(
    console.log(result)
)

let numbers = [0]

for(let index = 1; index <= 25; index +=1){
    numbers.push(index) 
}

console.log(numbers)

