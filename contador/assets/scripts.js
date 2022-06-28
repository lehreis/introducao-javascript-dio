let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const TXT = document.getElementById('text');

function increment() {
    if(count  < 10 || count < -10){	
        count++;
        CURRENT_NUMBER.innerHTML = count;
        if(count >= 0){
        CURRENT_NUMBER.style.color = "blue";
        }
        CURRENT_NUMBER.addEventListener("increment", eventbnt())
    }
}

function decrement() {
    if(count  <= 10 && count > -10){	
        count--;
        CURRENT_NUMBER.innerHTML = count;
        if(count < 0){
            CURRENT_NUMBER.style.color = "red";
        }
        CURRENT_NUMBER.addEventListener("decrement", eventbnt())
    }
}

function eventbnt(){
    if(count == 10){
        TXT.innerHTML = "Valor Máximo Incrementado"
    }
    else if(count == -10){
        TXT.innerHTML = "Valor Máximo Subtraido!"
    }
    else
    TXT.innerHTML = ""
}