/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//chiedo la parola all'utente
var userWord = prompt('inserisci una parola').toString();
console.log('userWord:' + userWord );

//con split creo un array con le lettere della parola
userWordSplit = userWord.split('');
console.log('Parola divisa:' + userWordSplit);

//inverto il senso della lista appena creata
userWordSplit = userWordSplit.reverse();
console.log('Lettere invertite: ' + userWordSplit);

//riunisco le lettere per ottenere la stringa
var userWordReverse = userWordSplit.join('');
console.log('' + userWordReverse);


