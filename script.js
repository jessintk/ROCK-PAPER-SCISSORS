let playerscore = 0;
let computerscore = 0;
let choice = ['rock','paper','scissors']; 
let playerSelection;
let computerSelection;
let divResult = document.createElement('div');
let buttons = document.getElementsByTagName('button');

let btnRock = document.createElement('button');
btnRock.textContent = 'ROCK';
document.body.appendChild(btnRock);
let btnPaper = document.createElement('button');
btnPaper.textContent = 'PAPER';
document.body.appendChild(btnPaper);
let btnScissors = document.createElement('button');
btnScissors.textContent = 'SCISSORS';
document.body.appendChild(btnScissors);

function game(){
        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', (e) => {
                playerSelection = e.target.textContent.toLowerCase();
                console.log(playerSelection);
                computerSelection = choice[Math.floor(Math.random()*choice.length)];
                console.log(computerSelection);
            });
            buttons[i].addEventListener('click', playRound);
        }

        function playRound(){
            if (playerscore == '5') {
                divResult.textContent = `You've Won with ${playerscore} vs ${computerscore}!`;
                for(let i = 0; i < buttons.length; i++){
                    removeEventListener('click', playRound)
                };
            } else if (computerscore == '5') {
                divResult.textContent = `You've Lost with ${playerscore} vs ${computerscore}!`;
                for(let i = 0; i < buttons.length; i++){
                    removeEventListener('click', playRound)
                };
            } else if(playerSelection === 'rock' && computerSelection === 'paper'){
                computerscore += 1;
                divResult.textContent = `You Lose! Paper beats Rock with ${playerscore} vs ${computerscore}`;
            } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                computerscore += 1;
                divResult.textContent = `You Lose! Scissors beats paper with ${playerscore} vs ${computerscore}`;
            } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
                computerscore += 1;
                divResult.textContent = `You Lose! Rock beats Scissors with ${playerscore} vs ${computerscore}`;
            } else if (playerSelection === 'paper' && computerSelection === 'rock'){
                playerscore += 1;
                divResult.textContent = `You Win! Paper beats Rock with ${playerscore} vs ${computerscore}`;
            } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
                playerscore += 1;
                divResult.textContent = `You Win! Scissors beats paper with ${playerscore} vs ${computerscore}`;
            } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                playerscore += 1;
                divResult.textContent = `You Win! Rock beats Scissors with ${playerscore} vs ${computerscore}`;
            } else if (playerSelection === computerSelection){
                divResult.textContent = `Draw with ${playerscore} vs ${computerscore}`;
            };
        }
        document.body.appendChild(divResult);
};
game();

