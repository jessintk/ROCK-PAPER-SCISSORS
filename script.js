let playerscore = 0;
let computerscore = 0;
function game(){
    for (let i = 0; i < 5; i++){
        let choice = ['rock','paper','scissors']; 
        let playerSelection;
        let computerSelection;

        function computerPlay(){
            computerSelection = choice[Math.floor(Math.random()*choice.length)];
            return computerSelection;
        };

        computerSelection = computerPlay();
        console.log(computerSelection);

        function playerPlay(){
            playerSelection = prompt('Rock, Paper or Scissors!');
            playerSelection = playerSelection.toLowerCase();
            return playerSelection;
        };

        playerSelection = playerPlay();
        console.log(playerSelection);

        function playRound(playerSelection, computerSelection){
            let result;
            if(playerSelection === 'rock' && computerSelection === 'paper'){
                result = "You Lose! Paper beats Rock";
                alert(result);
                computerscore += 1;
                console.log(playerscore , 'vs' , computerscore);
            } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                result = "You Lose! Scissors beats paper";
                alert(result);
                computerscore += 1;
                console.log(playerscore , 'vs' , computerscore);
            } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
                result = "You Lose! Rock beats Scissors";
                alert(result);
                computerscore += 1;
                console.log(playerscore , 'vs' , computerscore);
            } else if (playerSelection === 'paper' && computerSelection === 'rock'){
                result = "You Win! Paper beats Rock";
                alert(result);
                playerscore += 1;
                console.log(playerscore , 'vs' , computerscore);
            } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
                result = "You Win! Scissors beats paper";
                alert(result);
                playerscore += 1;
                console.log(playerscore , 'vs' , computerscore);
            } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                result = "You Win! Rock beats Scissors";
                alert(result);
                playerscore += 1;
                console.log(playerscore , 'vs' , computerscore);
            } else if (playerSelection === computerSelection){
                result = "Draw";
                alert(result);
                console.log(playerscore , 'vs' , computerscore);
            };
        }
    
        playRound(playerSelection, computerSelection);
    }
};
game();

(playerscore < computerscore) ? alert(`You've Lost with ${playerscore} vs ${computerscore}!`) : alert(`You've Won with ${playerscore} vs ${computerscore}!`);
