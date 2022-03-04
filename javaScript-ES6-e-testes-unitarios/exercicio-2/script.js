const button = document.createElement('button');
const body = document.getElementById('button');
button.id = 'id-button'
button.innerHTML = 'Click';
body.appendChild(button);

let realButton = document.getElementById('id-button');
const input = document.getElementById('input');
let clickCount = 0;

realButton.addEventListener('click', () => {
    input.innerHTML = clickCount += 1;
});



const letraX = (string) => {
    let word = string.split(' ')
    for(let index = 0; index.length < word.length; index += 1){
        if(word[index] === 'x'){
            word[index] = 'teste'
        }
    } 
    return word.join(' ');
}

console.log(letraX('esta x frase'));