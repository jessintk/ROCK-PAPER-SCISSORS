function game(){
    for (let i = 0; i < 5; i++){
        let choice = ['rock','paper','scissors'];

        function computerPlay(){
            let computerSelection = choice[Math.floor(Math.random()*choice.length)];
            return computerSelection;
        };

        computerSelection = computerPlay();
        console.log(computerSelection);

        function playerPlay(){
            let playerSelection = prompt('Rock, Paper or Scissors!');
                console.log(playerSelection);
                playerSelection = playerSelection.toLowerCase();
                return playerSelection;
        };

        playerSelection = playerPlay();
        let result; 
        
        function playRound(playerSelection, computerSelection){
            if(playerSelection === 'rock' && computerSelection === 'paper'){
                result = "You Lose! Paper beats Rock";
                alert(result);
            } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                result = "You Lose! Scissors beats paper";
                alert(result);
            } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
                result = "You Lose! Rock beats Scissors";
                alert(result);
            } else if (playerSelection === 'paper' && computerSelection === 'rock'){
                result = "You Win! Paper beats Rock";
                alert(result);
            } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
                result = "You Win! Scissors beats paper";
                alert(result);
            } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                result = "You Win! Rock beats Scissors";
                alert(result);
            } else{
                result = "Draw";
                alert(result);
            }   
        }

        let playerscore = 0;
        let computerscore = 0;

        if(result.includes('Lose')){
            playerscore++;
        }else if (result.includes('Win')){
            computerscore++;
        };

        console.log(playerscore , 'vs' , computerscore);
    }  
}

game()