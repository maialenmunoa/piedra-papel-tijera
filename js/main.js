'use strict';


// QUERY SELECTORS

const selectInput = document.querySelector('.js__selectInput'); 
const playButton = document.querySelector('.js__playButton'); 
const resultParagraph = document.querySelector('.js__resultParagraph'); 

//VARIABLES DE DATOS

let randomNumber = 0;
let userPlay = '';
let pcPlay = '';
let attempts = 10;

const initialMessage = '¡Vamos a jugar!';

//FUNCTIONS


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function getUserPlay() {
    userPlay = selectInput.value;
}

function displayResult(message) {
    resultParagraph.innerHTML = message;
}

function getResultMessage() {
    randomNumber = getRandomNumber(9);
    if (randomNumber <= 3) {
        pcPlay = 'piedra';
    }
    else if (randomNumber >= 7) {
        pcPlay = 'papel';
    }
    else {
        pcPlay = 'tijera';
    }

    if (userPlay === pcPlay) {
        return 'Empate';
    }
    else if (userPlay === 'piedra' && pcPlay === 'papel') {
        return '¡Has perdido!';
    }
    else if (userPlay === 'piedra' && pcPlay === 'tijera') {
        return '¡Has ganado!';
    }
    else if (userPlay === 'papel' && pcPlay === 'piedra') {
        return '¡Has ganado!';
    }
    else if (userPlay === 'papel' && pcPlay === 'tijera') {
        return '¡Has perdido!';
    }
    else if (userPlay === 'tijera' && pcPlay === 'piedra') {
        return '¡Has perdido!';
    }
    else {
        return '¡Has ganado!';
    }
}   

// FUNCION EVENT

const handleClickPlayButton = (event) => {
    event.preventDefault();
    getUserPlay();
    displayResult(getResultMessage());
}; 

//EVENTO de BOTÓN Jugar
playButton.addEventListener('click', handleClickPlayButton);

// EVENTO de Cambio en el select
selectInput.addEventListener('change', getUserPlay);


//CÓDIGO AL CARGAR LA PÁGINA

window.addEventListener('load', (event) => {
    resultParagraph.innerHTML = initialMessage;
});