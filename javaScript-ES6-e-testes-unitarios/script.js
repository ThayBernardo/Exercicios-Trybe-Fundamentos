
  const testingScope = escopo => {
    if(escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }
  
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderArray = () => {
  oddsAndEvens[0] = 2
  oddsAndEvens[1] = 3
  oddsAndEvens[2] = 4
  oddsAndEvens[3] = 7
  oddsAndEvens[4] = 10
  oddsAndEvens[5] = 12

  return oddsAndEvens
};

console.log(orderArray());

//Segunda opção de retorno

const listOrder = orderArray();
console.log(`Os números ordenadas são ${listOrder}`);

//Utilizando o sort 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortNumbers = oddsAndEvens.sort(function(a, b){
  return a - b;
});

const frase = `Os números ${sortNumbers} se encontram ordenados de forma crescente!`

console.log(frase); // será necessário alterar essa linha 😉

//Modo simplificado utilizando o sort

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortNumbers = oddsAndEvens.sort((a, b) => a - b);

const frase = `Os números ${sortNumbers} se encontram ordenados de forma crescente!`

console.log(frase);

// Crie uma função que receba um número e retorne seu fatorial.

const fatorialNumber = number => number == 0 ? 1 : number * fatorialNumber(number - 1);

console.log(fatorialNumber(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const frase = (texto) => {
  let separar = texto.split(' ');
  let maiorPalavra = 0;
  let palavra = null;
  
  for(let index = 0; index < separar.length; index +=1){

    if(maiorPalavra < separar[index].length){
      maiorPalavra = separar[index].length;
      palavra = separar[index];
    } 
  }
  return palavra;
}
console.log(frase('a maior palavra de todas'));
