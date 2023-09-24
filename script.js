'use strict';

let score=20
let highscore=0







let secretNumber=Math.round(Math.random() * 20)
console.log(secretNumber)

const displayMessage=(message)=>{
    document.querySelector('.message').textContent = message;

}


document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);

if (guess===secretNumber){
    displayMessage("wow//")
    if (highscore<score){
        highscore=score
    }
    document.querySelector('.highscore').textContent = highscore;

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector(".number").style.width='30rem'
    document.querySelector('body').style.backgroundColor = '#00FF00';
}
else if(guess!==secretNumber){
    if (score>0){
        displayMessage("keep Guessing")
        score--
        document.querySelector('.score').textContent=score;
    }
    else{
        displayMessage("youlost")
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector('body').style.backgroundColor = '#FF0000';

    }
}
})

document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    secretNumber = Math.round(Math.random() * 20);
     document.querySelector('body').style.backgroundColor = '#000000';
     console.log(secretNumber)
     document.querySelector('.number').textContent = "?";
    
    
})