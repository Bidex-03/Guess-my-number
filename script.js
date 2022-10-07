'use strict';

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const Score = document.querySelector('.score');
const body = document.querySelector('body');
const numValue = document.querySelector('.number');
const highscore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (messageFunc) {
    message.textContent = messageFunc;
}

check.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('⛔ No number!')
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!')
        numValue.textContent = secretNumber;
        body.style.background = '#60b347';
        numValue.style.width = '30rem';
        if (score > highscore.textContent) {
            highscore.textContent = score;
        }
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            score--;
            Score.textContent = score;
            body.style.background = '#222';
            numValue.style.width = '15rem';
        } else {
            message.textContent = '🎇 You lost the game';
            Score.textContent = 0;
        }
    }
})


const again = document.querySelector('.again');
const guess = document.querySelector('.guess');

again.addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start guessing...';
    Score.textContent = score;
    numValue.textContent = '?';
    body.style.background = '#222';
    numValue.style.width = '15rem';
    guess.value = '';
})