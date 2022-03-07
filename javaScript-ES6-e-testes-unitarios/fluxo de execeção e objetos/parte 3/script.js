const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  
const newValues = (objeto, chave, valor) => {
    objeto[chave] = valor;
 }
 
newValues(lesson2, 'turno', 'noite');    

console.log(lesson2);

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keysResult = (objeto2) => Object.keys(objeto2);

console.log(keysResult(lesson1));

//Crie uma função para mostrar o tamanho de um objeto.

const tamanho = (objeto3) => Object.keys(objeto3).length

console.log(tamanho(lesson2));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const list = (objeto4) => Object.values(objeto4);

console.log(list(lesson3));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons)

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (obj) => {
  const getElement = Object.keys(obj);
  let sum = 0;

  for(let i = 0; i < getElement.length; i += 1){
      const getKey = getElement[i];
      sum += obj[getKey].numeroEstudantes;
    }
    return sum
  } 

console.log(totalStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto

const keyValue = (chave, position) => {
  const array = Object.values(chave)[position];
  return array;
}
console.log(keyValue(lesson3, [2]));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave

const verifyKey = (obj, chave, valor) => {
  const getKeys = Object.keys(obj)
  const getValue = Object.values(obj)
  const all = Object.entries(obj)


  for(let index = 0; index < all.length; index += 1){
    if(getKeys[index] == chave && valor[index] == getValue){
      return 'existe'
    } else {
      return 'Error';
    }
  }
}

console.log(verifyKey(lesson1, 'materia', 'Matemática'));