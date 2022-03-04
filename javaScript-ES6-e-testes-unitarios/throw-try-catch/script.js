const sum = (value1, value2) => value1 + value2;
console.log(sum(2, 4));

const object = {
    name: 'Thayssa',
    age: 18,
    city: 'Tubarão'
};

let novaChave = 'lastName'
const lastName = 'Bernardo'
object[novaChave] = lastName;
novaChave = 'fullName';
const fullName = `${object.name} ${object.lastName}`
object[novaChave] = fullName;
console.log(object);

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo'
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom'
  };

//Dúvida para mentoria

const habilidades = (student) => {
    const hardSkill = Object.keys(student);
    for(nota in hardSkill){
        console.log(`${hardSkill[nota]} ${student[hardSkill[nota]]}`)
    }
}

console.log(habilidades(student1));

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };


