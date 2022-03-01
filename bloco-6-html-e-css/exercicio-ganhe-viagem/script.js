let button = document.getElementById('clear')
let nameComp = document.getElementById('nome-completo')
let email = document.getElementById('email-cadastro')
let destino1 = document.getElementById('destino-1')
let destino2 = document.getElementById('destino-2')
let destino3 = document.getElementById('destino-3')
let destino4 = document.getElementById('destino-4')
let text = document.getElementById('porque-ganhar')
let data = document.getElementById('data')
let box1 = document.getElementById('box-2')
let box2 = document.getElementById('box-1')

let sendButton = document.getElementById('send')

function sendButtonNew(event){
    event.preventDefault()
}

sendButton.addEventListener('click', sendButtonNew)

function clear(){
    nameComp.value = '';
    email.value = '';
    destino1.checked = false;
    destino2.checked = false;
    destino3.checked = false;
    destino4.checked = false;
    text.value = '';
    data.value = false;
    box1.checked = false;
    box2.checked = false;
} 

button.addEventListener('click', clear)

let picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});