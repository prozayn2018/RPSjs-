// Rock paper scissors JavaScript console game.
//Notes, could have binded (games) to another function for cleaner cloud
// Make comments on function in the future for read-ability

function playround() {

  userPoints = 0
  computerPoints = 0
  for(let round = 0; round < 1; round++){

  let userPicks = rockClicked()
  let format = userPicks.toLowerCase();
  let computerSelection = computerplay();

  // games
  if(userPicks == 'rock' && computerSelection == 'scissors'){
      userPoints++;
    } else if(userPicks == 'rock' && computerSelection =='paper'){
        computerPoints++;

    }else if(userPicks == 'rock' && computerSelection == 'rock'){

    }else if(userPicks == 'paper' && computerSelection == 'rock'){
        userPoints++;
    }else if(userPicks == 'paper' && computerSelection == 'paper'){

    }else if(userPicks == 'paper' && computerSelection == 'scissors'){
      userPoints++;

    }else if(userPicks == 'scissors' && computerSelection == 'rock'){
      computerPoints++;

    }else if(userPicks == 'scissors' && computerSelection == 'paper'){
      userPoints++;

    }else if(userPicks == 'scissors' && computerSelection == 'scissors'){

    }

  }
  return [userPoints, computerPoints]

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


// DOM link between JS and HTML




//const button = document.querySelector('btn');
//btn.addEventListener('click', function(){
  //  document.getElementById('para').innerHTML = "Wazzup";
//})
//container.apendChild(button)

///////////////////
