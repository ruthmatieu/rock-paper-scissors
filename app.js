//cache the DOM

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumer = Math.floor(Math.random() * 3);
  return choices[randomNumer]; //gives a random choice
};

function convertToWord(letter){
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  if (letter === 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
  userScore++; //increases user score by one with win
  userScore_span.textContent = userScore; //displays it on screen
  compScore_span.textContent = compScore;
  result_div.textContent = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🔥`;
  document.getElementById(userChoice).classList.add('green-glow');
  //setTimeout will ensure glow of choices are not left selected at once
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 1000);
}


function lose(userChoice, computerChoice) {
  compScore++; //increases comp score by one with win
  userScore_span.textContent = userScore; //displays it on screen
  compScore_span.textContent = compScore;
  result_div.textContent = `${convertToWord(userChoice)} doesn't beat ${convertToWord(computerChoice)}. You lose! 😭`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice) {
  result_div.textContent = `${convertToWord(userChoice)} tie with ${convertToWord(computerChoice)}. It's a draw! 😝`;
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function mainComponent() {
  rock_div.addEventListener('click', () => game('r'));

  paper_div.addEventListener('click', () => game('p'));

  scissors_div.addEventListener('click', () => game('s'));
}

mainComponent();
