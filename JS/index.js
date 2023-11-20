let squares = document.querySelectorAll('.square');
let startButton = document.querySelector(".startButton")
let startBox = document.querySelector(".start")
let stopTouch = document.querySelector(".end")
let resultBox = document.querySelector(".resultBox")
let gameBoard = document.querySelector(".gameBoard")
let line = document.querySelector(".line")
let playerTurn = "Player 1"
let p1ScoreBoard = document.querySelector(".p1")
let p2ScoreBoard = document.querySelector(".p2")
let p1Score = 0
let p2Score = 0
p1ScoreBoard.innerHTML  = p1Score
p2ScoreBoard.innerHTML  = p2Score
let odds = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let oddsNumber
let oddsDirection = []
let xChoices = [];
let oChoices = [];

startButton.onclick = () => {
  startBox.remove();
  resultBox.style.display = "block"
  gameBoard.style.display = "flex"
}

squares.forEach(square => square.onclick = function () {
  if (square.innerHTML == "" ) {
    playerTurn == "Player 1" ? square.innerHTML = "X" : square.innerHTML = "O"
    playerTurn == "Player 1" ? xChoices.push(+square.id) : oChoices.push(+square.id)
    playerTurn == "Player 1" ? playerTurn = "Player 2" : playerTurn = "Player 1"
    playerTurn == "Player 1" ? resultBox.innerHTML = "Player 1 Turn" : resultBox.innerHTML = "Player 2 Turn"
    resultBox.style.color = "black" 
    for (let i = 0; i < odds.length; i++) 
      {
        if (odds[i].every(ele => xChoices.includes(ele))) {
          resultBox.innerHTML = "Player 1 Wins"
          p1Score++;
          oddsNumber = i + 1
          scoreChanged(p1Score,p1ScoreBoard,oddsNumber)
          restartMatch(oddsNumber)
        }
        else if (odds[i].every(ele => oChoices.includes(ele))) {
          resultBox.innerHTML = "Player 2 Wins"
          p2Score++
          oddsNumber = i + 1
          scoreChanged(p2Score,p2ScoreBoard,oddsNumber)
          restartMatch(oddsNumber)
        } else if ((i == odds.length -1 && xChoices.length == 5 && oChoices.length == 4 )|| (i == odds.length -1 && xChoices.length == 4 && oChoices.length == 5)) {
          resultBox.innerHTML = "It's a Tie"
          resultBox.style.color = "red"
          restartMatch()
        }
      } 
  }})
  
function scoreChanged(score,scoreboard,oddsNumber) {
  resultBox.style.color = "red"
  scoreboard.innerHTML  = score;
  playerTurn == "Player 1" ? playerTurn = "Player 2" : playerTurn = "Player 1"
  stopTouch.style.display = "block"
  line.classList.add(`odd${oddsNumber}`)
}

function restartMatch(oddsNumber) {
  squares.forEach(
    square => setTimeout(() => {
    square.innerHTML = ""
    playerTurn == "Player 1" ? resultBox.innerHTML = "Player 1 Turn" : resultBox.innerHTML = "Player 2 Turn"
    stopTouch.style.display = "none"
    line.classList.remove(`odd${oddsNumber}`)
  }, 1500))
  xChoices = []
  oChoices = [] 
} 