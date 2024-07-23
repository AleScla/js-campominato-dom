
const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', function(){
    let difficulties = document.getElementById('difficulties').value;
    console.log(difficulties);
    container.innerHTML = '';
    
    boxPrinter(difficulties);
    
    
    
})

// funzioni
function boxPrinter (difficolta){
    let num = 0;
    

    if(difficolta == 'normal'){
        num = 100;
        
    }

    else if (difficolta == 'hard'){
        num = 81;
        
    }

    else{
        num = 49;
        
    }

    for (let i = 1; i <= num; i++){
        let col = document.createElement('div');
        col.innerHTML = i ;
        col.classList.add(difficolta);
        container.append(col);
        col.addEventListener('click', function(){
            col.classList.add('lightcoral');
            console.log(i);
        })
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

    return num
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// FRANCESCO LEVATI













