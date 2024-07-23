
const btn = document.querySelector('button');
const container = document.querySelector('.container');
const h3 = document.querySelector('h3');

btn.addEventListener('click', function(){
    let difficulties = document.getElementById('difficulties').value;
    console.log(difficulties);
    container.innerHTML = ''; // svuota l'html ad ogni click

    boxPrinter(difficulties); // stampo i box in pagina 
    h3.innerHTML = ''; // svuota l'h3 che contiene il punteggio non appena inizia un'altra partita
})

// funzioni
function boxPrinter (difficolta){
    let num = 0;
    let valore;
    let contatore = 0; // variabile contatore che stabilirà il punteggio
    let WinOrLose = true;
    let bombs = []; // array vuoto delle bombe
    let k = 1; 

    if(difficolta == 'normal'){ // trasforma il valore di num in base alla difficoltà
        num = 100; 
        
    }
    else if (difficolta == 'hard'){
        num = 81;
        
    }
    else{
        num = 49;
        
    }
    
    while (k <= 16){ // ciclo indefinito per la generazione delle bombe
        let randomNmb = getRndInteger(1 , num);
        if (!bombs.includes(randomNmb)){
            bombs.push (randomNmb); // pusho le bombe nell'array
            k++;
        }
    }
    console.log('le bombe sono:', bombs); 
    
    
    for (let i = 1; i <= num; i++){  // ciclo per stampare i box in pagina in base alla difficoltà scelta dall'utente
        
        let col = document.createElement('div');
        col.innerHTML = i ;
        col.classList.add(difficolta);
        container.append(col);
        
        col.addEventListener('click', function(){ 
            
            if (WinOrLose){ 
                if(!col.classList.contains('lightcoral')){ // se NON contiene la classe lightcoral aumenta il punteggio, altrimenti rimane invariato
                    col.classList.add('lightcoral');
                    contatore += 1; 
                }
                valore = i; // questa variabile prende il valore di i, per paragonarlo alle bombe
                
                if(bombs.includes(valore)){ // se i valori dell'array bombe sono uguali ad uno dei num in pagina
                    col.style.backgroundColor = 'red';
                    contatore -= 1; // diminuisco il contatore
                    h3.innerHTML = ('Hai perso, il tuo punteggio è: ' + contatore);
                    WinOrLose = false; // variabile booleana per stoppare il gioco non appena si perde
                }
            }
        })  
    }    
}    

function getRndInteger(min, max) { //funzione per generare num random 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// FRANCESCO LEVATI













