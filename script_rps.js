

document.getElementById("rock").onclick = game;
document.getElementById("paper").onclick = game;
document.getElementById("scissors").onclick = game;
document.getElementById("reset").onclick = reset;


document.querySelector("#score");
score.textContent = "Player Score: 0 Computer Score: 0 ";

function reset () {
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  score.textContent = "Player Score: 0 Computer Score: 0 ";
  playerScore = 0
  computerScore = 0
  
}

  let playerScore = 0
  let computerScore = 0

function game(){
    
    

    let playerSelection = this.id;
    
    
    let computerSelection = Math.floor(Math.random() *3) +1;

        if (computerSelection === 1) {
        computerSelection = "rock"  ;
        } else if (computerSelection === 2) {
        computerSelection = "paper";
        } else {
        computerSelection = "scissors";
        }
  
    console.log("Computer Choice:" + computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    
    function playRound(playerSelection , computerSelection) {

      let round = ""
      let score = ""
      

      if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        round = ("Player wins this round! " + playerSelection + " beats " + computerSelection + "!");
        score = ("Player Score: " + playerScore + " Computer Score: "  + computerScore);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        round = ("Computer wins this round! " + computerSelection + " beats " + playerSelection + "!");
        score = ("Player Score: " + playerScore + " Computer Score: "  + computerScore);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        round = ("Player wins this round! " + playerSelection + " beats " + computerSelection + "!");
        score = ("Player Score: " + playerScore + " Computer Score: "  + computerScore);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        round = ("Player wins this round! " + playerSelection + " beats " + computerSelection + "!");
        score = ("Player Score: " + playerScore + " Computer Score: "  + computerScore);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        round = ("Computer wins this round! " + computerSelection + " beats " + playerSelection + "!");
        score = ("Player Score: " + playerScore + " Computer Score: "  + computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        round = ("Computer wins this round! " + computerSelection + " beats " + playerSelection + "!");
        score = ("Player Score: " + playerScore + " Computer Score: "  + computerScore);
    } else {
        playerScore && computerScore +0; 
        round = ("Tie!");
        score = ("Player Score: " + playerScore + " Computer Score: "  + computerScore);
    } 

    document.getElementById("round").innerHTML = round
    document.getElementById("score").innerHTML = score
    return

    }

    let result = ""

    if (playerScore === 5) {
      result = ("Player wins!")
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
    }else if (computerScore === 5) {
      result = ("Computer wins!")
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
    }

    document.getElementById("result").innerHTML = result
    
}

  

  
 