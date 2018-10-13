var gameCount = 0;
var wins = 0;
var loses = 0;
var ties = 0;
var rockButton = document.getElementById('rock');
var paperButton = document.getElementById('paper');
var scissorButton = document.getElementById('scissors');

rockButton.addEventListener('click', function() {
  play(1);
});
paperButton.addEventListener('click', function() {
  play(2);
});
scissorButton.addEventListener('click', function() {
  play(3);
});

function play(user) {
  gameCount = gameCount + 1; //gameCount++; is another way
  var computer = Math.floor(Math.random() * 3) + 1;

  //console.log("computer: " + getName(computer));
  //console.log("user: " + getName(user));

  //1: Rock
  //2: Paper
  //3: Scissors

  var result = "";
  var userResult = "";

  if (computer === 1) {
    if (user === 1) {
      result = "tie";
      userResult = "Tie";
      ties ++;
    } else if (user === 2) {
      result = "user wins";
      userResult = "Win";
      wins ++;
    } else {
      result = "computer wins";
      userResult = "Lose";
      loses ++;
    }
  } else if (computer === 2) {
    if (user === 1) {
      result = "computer wins";
      userResult = "Lose";
      loses ++;
    } else if (user === 2) {
      result = "tie";
      userResult = "Tie";
      ties ++;
    } else {
      result = "user wins";
      userResult = "Wins";
      wins++;
    }
  } else if (computer === 3) {
    if (user === 1) {
      result = "user wins";
      userResult = "Wins";
      wins++;
    } else if (user === 2) {
      result = "computer wins";
      userResult = "Lose";
      loses++;
    } else {
      result = "tie";
      userResult = "tie";
      ties++;
    }
  }

document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("loses").textContent = "Loses: " + loses;
document.getElementById("ties").textContent = "Ties: " + ties;

  //  var resultElement = document.getElementById("result");
  //  resultElement.textContent = gameCount + " | " + result;
  //
  //  var newResult = document.createElement("p");
  //  newResult.className = "font-weight-light";
  //  newResult.textContent = gameCount + " | " + result;
  //  document.body.appendChild(newResult);

  //creates the row
  var row = document.createElement("div");
  row.className = "row record";

  //creates the first element in the row
  //class is col-xs-3
  //sets innerHTML to gameCount variable
  var counter = document.createElement("div");
  counter.className = "col-sm-3";
  counter.innerHTML = gameCount;

  var playerThrow = document.createElement("div");
  playerThrow.className = "col-sm-3";
  playerThrow.innerHTML = getName(user);

  var computerThrow = document.createElement("div");
  computerThrow.className = "col-sm-3";
  computerThrow.innerHTML = getName(computer);

  var winLoss = document.createElement("div");
  winLoss.className = "col-sm-3";
  winLoss.innerHTML = userResult;

  //adds counter to row, row to body
  row.appendChild(counter);
  row.appendChild(playerThrow);
  row.appendChild(computerThrow);
  row.appendChild(winLoss);
  //document.getElementsByClassName("container").appendChild(row);
  document.getElementById("game").appendChild(row);

  var parentDiv = document.getElementById("game");
  var lastPlay = document.getElementsByClassName("record");
  parentDiv.insertBefore(row, lastPlay[0]);

}

function getName(i) {
  if (i === 1)
    return "Rock";
  if (i === 2)
    return "Paper";

  return "Scissors";
}
