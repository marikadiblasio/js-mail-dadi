/*
1) Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
2) Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/* Procedimento:
1)crea array di mail (da dove?!?) JS- form HTML -->  check lista valori input JS--> stampa messaggio e ricarica pagina (gioco o form) JS
2)bottone da cliccare (?!)  --> genera n. utente --> bottone da cliccare --> genera n. pc --> confronta n e n --> genera e stampa messaggio
*/
//1) Mail
const invited = [
    'info@info.com',
    'ciao@boolean.careers',
    'paolo.rossi@gmail.com',
    'sara.bianchi@gmail.com',
    'marilena@boolean.careers',
    'cip.ciop@gmail.com',
    'clelia.fradella@boolean.careers',
    'pippo@gmail.com',
    'topolino@outlook.com',
    'minnie@gmail.com'
];
//console.log(invited);
let accepted = '';
const start = document.getElementById('start');
const btnSub = document.querySelector('button');
btnSub.addEventListener('click', checkList);

// Checklist function
function checkList(e) {
    e.preventDefault();
    const uMail = document.getElementById('mail').value;
    const uName = document.getElementById('name').value;
    if (((!uName) || !isNaN(uName)) || ((!uMail) || !isNaN(uMail))) {
    const divAlert = document.getElementById('alert');
    divAlert.innerHTML += `<h3 class="text-danger">Inserisci tutti i dati</h3 class="text-danger">`;
    }
    for (let i = 0; i < invited.length; i++){
        if (uMail.toLowerCase() === invited[i].toLowerCase()) {
            accepted = (invited[i]);
        };
    };
    message(uName)
}
//Message function
function message(uName) {
let el = document.querySelector('h2');
    if (accepted) {
        el.innerText = `Benvenuto ${uName}`;
        document.querySelector('form').classList.add('d-none');
        start.classList.remove('d-none');
    } else {
        el.innerText = `Spiacente, ${uName}, non puoi entrare`;
    }
}
//Random numbers 
function letsPlay (){
const myRnd = getRndNumIncl(1,6);
const pcRnd = getRndNumIncl(1,6);
const myNum = document.getElementById('myNum');
const pcNum = document.getElementById('pcNum');
const winner = document.getElementById('winner');
myNum.innerText= `Il tuo numero random è ${myRnd}`;
pcNum.innerText= `Il numero random del computer è ${pcRnd}`;
if (myRnd > pcRnd) {
    winner.innerText=`Hai vinto il gioco`;
} else if (myRnd < pcRnd) {
    winner.innerText=`Ritenta, sarai più fortunato`;
} else {
    winner.innerText=`Hai pareggiato`;
}
document.getElementById('play').classList.remove('d-none');
}
start.addEventListener('click', letsPlay);