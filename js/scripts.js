
const btn = document.querySelector('button');
const container = document.querySelector('.container');
const h3 = document.querySelector('h3');

btn.addEventListener('click', function(){
    let difficulties = document.getElementById('difficulties').value;
    console.log(difficulties);
    container.innerHTML = '';

    boxPrinter(difficulties); // stampo i box in pagina 
    h3.innerHTML = '';
})

// funzioni
function boxPrinter (difficolta){
    let num = 0;

    if(difficolta == 'normal'){ // trasforma il valore di num in base alla difficoltà
        num = 100; 
        
    }
    else if (difficolta == 'hard'){
        num = 81;
        
    }
    else{
        num = 49;
        
    }
    let bombs = [];
    let k = 1;
    while (k <= 16){
        let randomNmb = getRndInteger(1 , num);
        if (!bombs.includes(randomNmb)){
            bombs.push (randomNmb);
            k++;
        }
    }
    console.log('le bombe sono:', bombs); 
    
    let valore;
    let contatore = 0;
    let WinOrLose = true;
    for (let i = 1; i <= num; i++){
        
        let col = document.createElement('div');
        col.innerHTML = i ;
        col.classList.add(difficolta);
        container.append(col);
        
        col.addEventListener('click', function(){
            
            if (WinOrLose){
                if(!col.classList.contains('lightcoral')){
                    col.classList.add('lightcoral');
                    contatore += 1; 
                }
                valore = i;
                
                if(bombs.includes(valore)){
                    col.style.backgroundColor = 'red';
                    contatore -= 1;
                    h3.innerHTML = ('Hai perso, il tuo punteggio è: ' + contatore);
                    WinOrLose = false;
                }
            }
        })  
    }    
}    

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// FRANCESCO LEVATI













