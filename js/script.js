/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//******************** SOLUZIONE 1 ************************************/

// //chiedo la parola all'utente
// var userWord = prompt('inserisci una parola').toString();
// console.log('userWord: ' + userWord );
// document.getElementById('user-word').innerHTML = 'La tua parola è: ' +  userWord;

// //con split creo un array con le lettere della parola
// userWordSplit = userWord.split('');
// console.log('Parola divisa: ' + userWordSplit);

// //inverto il senso della lista appena creata
// userWordSplit = userWordSplit.reverse();
// console.log('Lettere invertite: ' + userWordSplit);

// //riunisco le lettere per ottenere la stringa
// var userWordReverse = userWordSplit.join('');
// console.log('Parola riunita: ' + userWordReverse);
// document.getElementById('word-reverse').innerHTML = 'La tua parola rovesciata è: ' + userWordReverse;


// //verifico se la parola inserita dall'utente
// // è uguale alla parola invertita
// if(userWord == userWordReverse){
//     console.log('La parola è palindroma');
//     document.getElementById('palindromo').innerHTML = 'La tua parola è' + userWord +  ' è palindroma.'
// } else {
//     console.log('La parola non è palindroma');
//     document.getElementById('no-palindromo').innerHTML = 'La tua parola è ' + userWord + ' non è palindroma.'
// }

//******************** SOLUZIONE 2 - FUNZIONE E CICLO FOR ************************************/


//chiedo la parola all'utente
var userWord = prompt('inserisci una parola').toString();

//creo una funzione
function wordPali(){
    for(var i = 0; i < userWord.length; i++){
        userWordSplit = userWord.split('');
        userWordSplit = userWordSplit.reverse();
        var userWordReverse = userWordSplit.join('');
    }
    
    //verifico se le parole rovesciate sono o non sono uguali
    if(userWord == userWordReverse){
        console.log('La parola è palindroma');
        document.getElementById('palindromo').innerHTML = 'La tua parola è ' + userWord +  ' ed è palindroma.'
    } else {
        console.log('La parola non è palindroma');
        document.getElementById('no-palindromo').innerHTML = 'La tua parola è ' + userWord + ' non è palindroma.'
    }

}

wordPali();