// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const number = '22';

let firstName = prompt('Scrvi il tuo nome');

let surname = prompt('Scrivi il tuo cognome');

let favColour = prompt('Scrivi il tuo colore preferito');

let resultPsw = firstName + surname + favColour + number;

document.getElementById('testo').innerHTML = resultPsw;