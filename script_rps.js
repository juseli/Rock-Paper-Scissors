    let randomNumber= Math.floor(Math.random() *3) +1;
    let computerSelection;
        if (randomNumber === 1) {
        computerSelection = "Rock";
        } else if (randomNumber === 2) {
        computerSelection = "Paper";
        } else {
        computerSelection = "Scissors";
        }

    
      let word = prompt("Rock, Paper, or Scissors?")
      let playerSelection = String(word).toLowerCase()
      

        function playRound(playerSelection , computerSelection) {

          if (playerSelection === "scissors" && computerSelection === "Paper") {
            return("You win! Scissors beats Paper.")
          } else if (playerSelection === "rock" && computerSelection === "Paper") {
            return("You lose! Paper beats Rock.")
          } else if (playerSelection === "rock" && computerSelection === "Scissors") {
            return("You win! Rock beats Scissors.")
          } else if (playerSelection === "paper" && computerSelection === "Rock") {
            return("You win! Paper beats Rock.")
          } else if (playerSelection === "paper" && computerSelection === "Scissors") {
            return("You lose! Scissors beats Rock.")
          } else if (playerSelection === "scissors" && computerSelection === "Rock") {
            return("You lose! Rock beats Scissors.")
          } else {
            return("Draw!")
          }
      
        }
        let results = playRound(playerSelection , computerSelection)
        console.log(results)