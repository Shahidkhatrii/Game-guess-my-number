'use strict';

let number = Math.trunc(Math.random()*20)+1;

let score = 10;
let highScore = 0;

const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(guess>20 || guess<1){
        displayMessage('Invalid guess!');
    }
    else if(guess===number){
        displayMessage('🎉 you won!');
        document.querySelector('.Number').textContent=number;

        document.querySelector('.Number').style.width='30rem';
        document.querySelector('body').style.backgroundColor='#60b347';

        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess!==number){
        if(score>0){
            displayMessage(guess>number ?'📈 Too High':'📉 Too low');
            score--;
            document.querySelector('.score').textContent=score;
        }
        if(score<=0){
            document.querySelector('.message').textContent='🥲 You Loose!';
            displayMessage('🥲 You Loose!');
            document.querySelector('body').style.backgroundColor='#FC2947';
            document.querySelector('.Number').textContent=number;

        }
    }
});

document.querySelector('.again').addEventListener('click',function (){
    number = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    score=10;
    document.querySelector('.score').textContent=score;
    document.querySelector('.Number').style.width='15rem';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.Number').textContent='?';
    document.querySelector('.guess').value='';
});
