function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercicio 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysOfMonth (){
  let day = document.getElementById('days');

  for(let index = 0; index < dezDaysList.length; index += 1){
    
    let armazenar = dezDaysList[index];
    let newValue = document.createElement('li')

    if (armazenar === 24 || armazenar === 31) {
      newValue.className = 'day holiday'
      newValue.innerHTML = armazenar;
      day.appendChild(newValue)
    } else if (armazenar === 4 || armazenar === 11 || armazenar === 18){
      newValue.className = 'day friday'
      newValue.innerHTML = armazenar;
      day.appendChild(newValue)
    } else if (armazenar === 25){
      newValue.className = 'day holiday friday'
      newValue.innerHTML = armazenar;
      day.appendChild(newValue)
    } else {
      newValue.className = 'day'
      newValue.innerText = armazenar;
      day.appendChild(newValue)
    }
  }
}

daysOfMonth();

// Exercicio 2

function createNewBotton(buttonName){

  let firstElement = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'btn-holiday';
  firstElement.appendChild(newButton);

}

createNewBotton('Feriados');

// Exercicio 3

function atribuicao (){
  let setNewColor = 'white'
  let newColor = 'pink'
  let feriados2 = document.getElementsByClassName('holiday')
  let buttonClick = document.getElementById('btn-holiday')

  buttonClick.addEventListener('click', function(){
    for(let index = 0; index < feriados2.length; index += 1){
      if(feriados2[index].style.backgroundColor === setNewColor){
        feriados2[index].style.backgroundColor = newColor;
      } else {
        feriados2[index].style.backgroundColor = setNewColor;
      }
    }
  })
}

atribuicao();

// Exercicio 4

function sextou(nameButton){

  let whereButton = document.querySelector('.buttons-container');
  let createButton = document.createElement('button');

  createButton.innerHTML = nameButton;
  createButton.id = 'btn-friday'
  whereButton.appendChild(createButton);
}

sextou('SEXTOU');

function buttonSextou(arrayDays){
  let buttonClicado = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newText = 'Sextou'


  buttonClicado.addEventListener('click', function(){
  for(let index = 0; index < fridays.length; index += 1){
    if(fridays[index].innerHTML !== newText){
      fridays[index].innerHTML = newText;
    } else {
      fridays[index].innerHTML = arrayDays[index]
    }
  }
 })
}

let daysD = [ 4, 11, 18, 25 ] ;
buttonSextou(daysD);

function letter(){
  let daysTamanho = document.getElementById('days')

  daysTamanho.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '200'
  })
}

letter();

function resetNumber(){
  let daysReset = document.getElementById('days')

  daysReset.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'
  })
}

resetNumber();

function novaTarefa(tarefa){
  
  let implementar = document.querySelector('.my-tasks')
  let newWork = document.createElement('span')

  newWork.innerHTML = tarefa;
  implementar.appendChild(newWork)

}
novaTarefa('Projeto:')

function legenda(color){
  let filho = document.querySelector('.my-tasks');
  let createDiv = document.createElement('div');

  createDiv.style.backgroundColor = color
  createDiv.className = 'task'
  filho.appendChild(createDiv)

}
legenda('blue')

function adicionaEvento (){
  let div = document.getElementsByClassName('task selected')
  let elemento = document.querySelector('.task');

  
  elemento.addEventListener('click', function(event){
    if(div.length === 0){
      event.target.className = 'task selected'
    } else {
      event.target.className = 'task'
    }
  })

}

adicionaEvento();

function dayColor (){
  let daysCalendar = document.getElementById('days')
  let corLegenda = document.getElementsByClassName('task selected')

  daysCalendar.addEventListener('click', function(event){
    if(corLegenda.length === 1){
      event.target.style.backgroundColor = 'blue';
    } else {
      event.target.style.backgroundColor = ('rgb(119,119,119)')
    }
  })
}

dayColor();
