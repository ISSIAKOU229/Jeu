'use strict';

// Générer un nombre secret entre 1 et 20
let newNumero = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber)
let score = 20;
let highscore = 0;

// Sélection des éléments HTML en respectant les classes du HTML
let message = document.querySelector(`.message`);
let number = document.querySelector('.number');
let scoreElement = document.querySelector('.score');
let highscoreElement = document.querySelector('.highscore');
let guessInput = document.querySelector('.guess');
let checkButton = document.querySelector('.check');
let againButton = document.querySelector('.again');

// Fonction pour afficher un message
let displayMessage = (msg) => {
  message.textContent = msg;
};

// le bouton "Check!" vérification du nombre entré
checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value); 

  //  l'entrée est valide (entre 1 et 20)
  if (!guess || guess < 1 || guess > 20) {
    displayMessage('Entrez un nombre entre 1 et 20 !');
    return; 
  }

  // Si le joueur trouve le bon nombre
  if (guess === newNumero){
    displayMessage('GREAT, YOU WIN!');
    number.textContent = newNumero;
    document.body.style.backgroundColor = 'GREEN';
    number.style.width = '27rem';

    // Mise à jour du highscore s
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else {
    // Si le nombre est incorrect
    if (score > 1) { 
      displayMessage(guess > newNumero ? 'Too hight!' : 'Too low!');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('YOU LOOSE!');
      scoreElement.textContent = 0;
    }
  }
});

// le bouton "Again!" réinitialisation du jeu
againButton.addEventListener('click', function () {
  score = 20;
  newNumero = Math.trunc(Math.random() * 20) + 1;

  // Réinitialisation des valeurs à l'écran
  displayMessage('Essayer de deviner...');
  scoreElement.textContent = score;
  number.textContent = '?';
  guessInput.value = '';

  // Réinitialisation des styles
  document.body.style.backgroundColor = '#222';
  number.style.width = '20rem';
});