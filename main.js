'use strict';

const btn = document.querySelector('.js-btn');
const msg = document.querySelector('.js-msg');
const option = document.querySelector('.js-option');
// const player = document.querySelector('.js-player');
// const computer = document.querySelector('.js-computer');

const movimientos = ['piedra', 'papel', 'tijera'];

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
} 

function computerOption () {
    const randomNumber = getRandomNumber(10);
    if (randomNumber <= 3) {
        return movimientos[0];
    } else if (randomNumber >= 7) {
        return movimientos[2];
    } else {
        return movimientos [1];
    }
}

function compareOptions (user, computer) {
    let result;
    if (user === computer) {
        result = 'Empate';
    } else if (user === 'piedra' && computer === 'tijera' || user === 'papel' && computer === 'piedra' || user === 'tijera' && computer === 'papel') {
        result = '¡Has ganado!';
    } else {
        result = '¡Has perdido!';
    }
    return result;
}

function handleClick (event) {
    event.preventDefault();
    const userOption = option.value;
    const computerMove = computerOption();
    msg.innerHTML = compareOptions(userOption, computerMove);
    console.log(computerMove);
}

btn.addEventListener('click', handleClick);






