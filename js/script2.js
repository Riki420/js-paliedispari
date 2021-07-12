/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


//* 1 TRAMITE BOTTONI CHIEDO SE PARI O DISPARI
//* 2 CHIEDO ALL'UTENTE UN NUMERO DA 1 A 5
//* 3 GENERO UN NUMERO RANDOM PER IL COMPUTER
//* 4 FACCIO LA SOMMA DEI DUE NUMERI
//* 5 STABILISCO SE PARI O DISPARI
//* 6 DICHIARO IL VINCITORE


var buttonPari = document.getElementById('pari');
var comChoice = Math.floor(Math.round()* 5) + 1;


buttonPari.addEventListener('click', function(){
    var userChoice = parseInt(prompt('scegli un numero da 1 a 5'));
    console.log(userChoice);
    
})