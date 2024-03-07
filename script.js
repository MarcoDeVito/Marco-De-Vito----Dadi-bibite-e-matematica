// Traccia 1:
// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.
// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

// TIPS:
// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (7 - 1) + 1);

let playerN1 = "Marco";
let playerN2 = "Simone";
let dado=6;
let roll = 2;
let verbose=0; //verbose: flag per controllo e stampa risultati singoli nella console 1=on 0=0ff 

// let roll = prompt("INIZIA LA PARTITA\n inserisci il numero di dadi da tirare."); 

function rollDice(v=0,rolls = 1, die = 6) { 
    let diceSum = 0;
    for (let i = 0; i < rolls; i++) {
        let resDice = Math.floor(Math.random() * (die) + 1);
        diceSum += resDice;

        if(roll==1&&resDice==die){
            console.log('CRITICO!'); //solo se si gioca con 1 dado stampa un messaggio quando uno fa il valore massimo del dado lanciato
        }
        
        if(v) {
        console.log("Dado:" + resDice);
        }

    }
    if(v) {
    console.log("---------------");
    }
    return diceSum;
}

function winnerCalc(result1 = 0, result2 = 0, name1 = "giocatore 1", name2 = "giocatore2") {
    if (result1 > result2) {
        console.log(`vince ${name1}`);
    }
    else if (result1 == result2) {
        console.log(`Pareggio`);
    }
    else {
        console.log(`vince ${name2}`);
    }
}



let player1 = rollDice(verbose,roll,dado);
let player2 = rollDice(verbose,roll,dado);

console.log(`punteggio ${playerN1}:${player1}`);
console.log(`punteggio ${playerN2}:${player2}`);
winnerCalc(player1, player2, playerN1, playerN2);


// Traccia 2:
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'


// function printNumber(N) {
//     for (let i = 0; i < N; i++) {
//         if (i % 15 == 0) {
//             console.log("fizzBuzz");
//         }
//         else if (i % 5 == 0) {
//             console.log("Buzz");
//         }
//         else if (i % 3 == 0) {
//             console.log("Fizz");
//         }
//         else {
//             console.log(i);
//         }

//     }
// }

let printNumber = (N) => {
    for (let i = 0; i < N; i++) {
        if (i % 15 == 0) {
            console.log("fizzBuzz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }

    }
}



let num = 15;
printNumber(num);

// Traccia 3:
// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
// Esempio:
// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande



function countDigits(num) {
    num = Math.floor(num)+ '';
    // console.log(typeof (num));
    let digit = num.length;
    if (digit > 4) {
        return "Numero troppo grande";
    }
   
    else if(digit==1) {
        return digit+" cifra";
    }
    else{
        return digit+ " cifre"
    }


}

// let countDigits = (num) => (num+'').length;


console.log(countDigits(1));
console.log(countDigits(10));
console.log(countDigits(100));
console.log(countDigits(1000));
console.log(countDigits(10000));



// Traccia 4:
// Scrivere una funzione che simuli un distributore di bevande:
// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza (modificato)
// Potete provare ad inserire condizioni e controlli ulteriori se volete sperimentare. Stupitemi!

// P.S. Provate poi a riscrivere le funzioni, degli esercizi precedenti, utilizzando la sintassi dell'Arrow function! 🚀

function distributore(array) {
    do {
        sceltaBevanda = prompt(`Buongiorno che bevanda desidera:\n (1) ${array[0]}:${array[1]}\n (2) ${array[2]}:${array[3]}\n (3) ${array[4]}:${array[5]}`) 
        switch (sceltaBevanda) {
            case "1":
                alert(`E' stata selezionata ${array[0]}`);
                array[1] != 0 ? array[1]-- : alert("siamo spiacenti l'oggetto richiesto è Terminato")
                break;
            case "2":
                alert(`E' stata selezionata ${array[2]}`);
                array[3] != 0 ? array[3]-- : alert("siamo spiacenti l'oggetto richiesto è Terminato")
                break;
            case "3":
                alert(`E' stata selezionata ${array[4]}`);
                array[5] != 0 ? array[5]-- : alert("siamo spiacenti l'oggetto richiesto è Terminato")
                break;

            default:
                sceltaBevanda = "error" //default per rimanere nel ciclo
                break;
        }
    } while (sceltaBevanda == "error")
    return sceltaBevanda;

}



let inventario = ["acqua", 10, "coca-cola", 10, "birra", 10] // array contenente tutti i nomi e le quantità a magazzino 
while (inventario[1] != 0 || inventario[3] != 0 ||
     inventario[5] != 0) {
    distributore(inventario);
    // alert(`${inventario}`);
}
alert(`Tutte le bibite sono terminate, ci scusiamo per il disagio`);
