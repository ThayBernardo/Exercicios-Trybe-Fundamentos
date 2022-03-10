const acordar = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => {
    const result = func();
    console.log(result);
}

doingThings(acordar);

const person = (name) => {
    const info = name.split(' ').join('').toLowerCase();
    return { Nome: name, Email: `${info}@trybe.com`}
}

const newEmployees = (returnName) => {
    const employees = {
      id1: returnName('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: returnName('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: returnName('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(person));

const generateNumber = (number, numberSort) => number === numberSort

const checkNumber = (number, callback) => {
    const numberSort = Math.floor((Math.random() * 5) + 1);

    return callback(number, numberSort) ? 'Parabéns' : 'Tente novamente'
};

console.log(checkNumber(2, generateNumber));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verify = (resposta, resposta2) => {
    if(resposta === resposta2){
        return 1;
    } if (resposta2 === 'N.A'){
        return 0;
    }
    return -0.5;
}

const result = (resposta, resposta2, callback) => {
    let total = 0;

    for(let i = 0; i < resposta.length; i += 1){
        const compare = callback(resposta[i], resposta2[i]);
        total += compare;
    }
    return `Sua nota é: ${total}`;
}

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, verify));

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dano = () => {
    
  }
