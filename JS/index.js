let squares = document.querySelectorAll('.square')
let playerTurn = "Player 1"
// player 1 is X
// player 2 is O

squares.forEach(square => square.onclick = function () {
  if (square.innerHTML == "" ) {
    playerTurn == "Player 1" ? square.innerHTML = "X" : square.innerHTML = "O"
    playerTurn == "Player 1" ? playerTurn = "Player 2" : playerTurn = "Player 1"
  }
  
  
})