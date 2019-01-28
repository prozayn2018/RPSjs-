// Rock paper scissors JavaScript console game.
//Notes, could have binded (games) to another function for cleaner cloud
// Make comments on function in the future for read-ability


function playround() {

  userPoints = 0
  computerPoints = 0
  for(let round = 0; round <= 5; round++){

  let userPicks = prompt("Enter: Rock, Paper, or Scissors");
  let format = userPicks.toLowerCase();
  let computerSelection = computerplay();

  // games
  if(userPicks == 'rock' && computerSelection == 'scissors'){
      console.log("You picked rock and the computer picked scissors")
      console.log("You win!")
      userPoints++;
    } else if(userPicks == 'rock' && computerSelection =='paper'){
        console.log("You picked rock and the computer picked paper")
        console.log("Computer wins!")
        computerPoints++;

    }else if(userPicks == 'rock' && computerSelection == 'scissors'){
        console.log("You picked rock and the computer picked scissors")
        console.log("You win!")
        userPoints++;

    }else if(userPicks == 'paper' && computerSelection == 'rock'){
        console.log("You picked paper and the computer picked rock");
        console.log("User Wins!");
        userPoints++;
    }else if(userPicks == 'paper' && computerSelection == 'paper'){
      console.log("You picked paper and the computer picked paper");
      console.log("Play again, this is a tie!");

    }else if(userPicks == 'paper' && computerSelection == 'scissors'){
      console.log("You picked paper and the computer picked scissors");
      console.log("Computer wins!");
      userPoints++;

    }else if(userPicks == 'scissors' && computerSelection == 'rock'){
      console.log("You picked scissors and the computer picked rock");
      console.log("Computer wins!");
      computerPoints++;

    }else if(userPicks == 'scissors' && computerSelection == 'paper'){
      console.log("You picked scissors and the computer picked paper");
      console.log("You win!");
      userPoints++;

    }else if(userPicks == 'scissors' && computerSelection == 'scissors'){
      console.log("You picked scissors and the computer picked scissors");
      console.log("Play again, this is a tie!");
    } console.log("User Points: " + userPoints);
    console.log("Computer points: " + computerPoints);
  } console.log("Game over!")
  console.log("Userpoints: " + userPoints);
  console.log("Computer points: " + computerPoints);
}

// computer pick
function computerplay(){
  const random = rando() + 0;
  if(random == 0){
    return 'rock'
  }else if(random == 1){
    return 'paper'
  }else{
    return 'scissors'
  }
}

//random number
function rando() {
  return Math.floor(Math.random() * 3)
}

playround()

///////////////////
