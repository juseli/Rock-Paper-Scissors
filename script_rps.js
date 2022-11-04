
  let playerScore = 0;
  let computerScore = 0;

    function computerChoice () {
    let randomNumber = Math.floor(Math.random() *3) +1;

        if (randomNumber === 1) {
        return "rock";
        } else if (randomNumber === 2) {
        return "paper";
        } else {
        return "scissors";
        }
    }
    
  let playerRoundWin = "Player wins this round!"
  let computerRoundWin = "Computer wins this round!"
  let draw = "Draw!"  
    
  function playRound(playerSelection , computerSelection) {

    if (playerSelection === "scissors" && computerSelection === "paper") {
      return playerRoundWin;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      return computerRoundWin;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return playerRoundWin;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return playerRoundWin;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return computerRoundWin;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return computerRoundWin;
    } else {
      return draw;
    } 
  
    }

    for (let i = 0; i < 99; i++) {
      let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
      let computerSelection = computerChoice();
      let roundResult = playRound(playerSelection , computerSelection);
      console.log(roundResult);
      score(roundResult);
      console.log("Your score is" + " " + playerScore);
      console.log("The computer score is" + " " + computerScore);
  
      if (playerScore === 3 ) {
        alert("You win!")
      }

      if (computerScore === 3) {
        alert("You lose!")
      }

      if (playerScore === 3 || computerScore === 3) {
        break;
      }

    function score(result) {
  
      if (result === playerRoundWin) {
        playerScore++;
      }else if (result === computerRoundWin) {
        computerScore++;
      }else {
        playerScore && computerScore + 0;
      }


      
      }

    
    }