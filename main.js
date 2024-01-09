'use strict';

/*PASOS A SEGUIR:
1. Creamos las constantes para el botón de jugar, el cajón de mensaje y el apartado de opciones del form 
2. Añadimos el listener al botón para que, al hacer click, se ejecuten las funciones correspondientes
3. Dentro de la función manejadora del click, tendremos que recoger el valor del usuario y el valor del ordenador, compararlos y mostrar el resultado dentro del innerHTML
4. Para recoger el valor del usuario, vale con poner el .value a la cte option
5. Para recoger el valor del ordenador, creamos una función que recoja el valor de la función getRandomNumber en una cte (y le damos como máximo 10), y hacemos el condicional para asignar a cada intervalo de número una propiedad (de 0 a 3 será piedra, si es >= 7 será tijera, etc.)
6. La función de comparar ambos valores tendra como parametros el valor del usuario y el valor del ordenador.
7. Le damos las condiciones necesarias para que aparezcan los distintos mensajes de ganar, empatar o perder.
*/


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
        return movimientos[1];
    } else {
        return movimientos [2];
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
    const result = compareOptions(userOption, computerMove);
    msg.innerHTML = result;
    console.log(computerMove);
    // scores();
}

btn.addEventListener('click', handleClick);

// function scores () {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 10; i++) {
//         const userMove = option.value;
//         const computerMove = computerOption();
//         const resultScore = compareOptions(userMove, computerMove);
//         if (resultScore === '¡Has ganado!') {
//             playerScore = 1;
//             computerScore = 0;
//         } else if (resultScore === '¡Has perdido!') {
//             computerScore = 1;
//             playerScore = 0;
//         }
//     }
//     player.innerHTML = `Jugador: ${playerScore}`;
//     computer.innerHTML = `Computadora: ${computerScore}`;
// }





