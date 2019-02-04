//in future, come back and reduce duplicate code

function rockClicked(){


userScore = 0;
computerScore = 0;
tie = 0;
round = 0;
const listen = document.getElementById('button1');
  listen.addEventListener('click',function(){
  // returns two arrays; calculates points from here on to bottom;
    Points = playround("rock");
  ///
    if(Points[0] > 0 && userScore < 5 && round < 10){
    userScore ++;
    round = 0;
    document.getElementById('score1').innerHTML = userScore;
    //could be wrong in && syntax - might not need ()
    }else if(Points[0] == 0 && Points[1] == 0 && tie < 5){
    tie ++;
    round = 0;
    document.getElementById('score2').innerHTML = tie;
    }else if(Points[1] > 0 && computerScore < 5){
    computerScore ++;
    round = 0;
    document.getElementById('score3').innerHTML = computerScore;
    }
  });
 }

rockClicked()



function paperClicked(){

//part 1
userScore = 0;
computerScore = 0;
tie = 0;
const listenpaper = document.getElementById('button2');
  listenpaper.addEventListener('click',function(){
  // returns two arrays; calculates points
    Points = playround("paper")
  ///
    if(Points[0] > 0 && userScore < 5 && round < 10){
    userScore ++;
    round = 0;
    document.getElementById('score1').innerHTML = userScore;
    //could be wrong in && syntax - might not need ()
    }else if(Points[0] == 0 && Points[1] == 0 && tie < 5){
    tie ++;
    round = 0;
    document.getElementById('score2').innerHTML = tie;
    }else if(Points[1] > 0 && computerScore < 5){
    computerScore ++;
    round = 0;
    document.getElementById('score3').innerHTML = computerScore;
    }
  });
 }

paperClicked()
//

function scissorClicked(){

//part 1
userScore = 0;
computerScore = 0;
tie = 0;
const listenscissor = document.getElementById('button3');
  listenscissor.addEventListener('click',function(){
  // returns two arrays; calculates points
    Points = playround("scissors")
  ///
    if(Points[0] > 0 && userScore < 5 && round < 10){
    userScore ++;
    round = 0;
    document.getElementById('score1').innerHTML = userScore;
    //could be wrong in && syntax - might not need ()
    }else if(Points[0] == 0 && Points[1] == 0 && tie < 5){
    tie ++;
    round = 0;
    document.getElementById('score2').innerHTML = tie;
    }else if(Points[1] > 0 && computerScore < 5){
    computerScore ++;
    round = 0;
    document.getElementById('score3').innerHTML = computerScore;
    }
  });
 }

scissorClicked()



function playround(a){

  userPoints = 0
  computerPoints = 0
  for(let round = 0; round < 1; round++){

    // figure this out; give it a parameter argument from when its called above
  let userPicks = a
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
  return [userPoints, computerPoints];

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
