// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
//gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.textContent = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  for (const entry of game.gameHistoryLog) {
    const historyEntry = document.createElement('p');
    historyEntry.textContent = entry;
    gameHistoryParagraph.appendChild(historyEntry);
  }
}
  


// start-game-button EventListener

startGameButton.addEventListener(`click`, function () { 
  const user_selection = userSelection.value;

  const username = userName.value;
  game = new RockPaperScissors(username);
  game.play(user_selection)
  console.log(game.score.user)
  // gameScreen.classList.remove(`d-none`);
  // welcomeScreen.classList.add(`d-none`);
  // Complete
});


//go-button EventListener
goButton.addEventListener(`click`, function () {
  const user_selection = userSelection.value;
  game.play(user_selection)
  updateScoreTallyUI(); // Update the score display
  updateGameHistoryUI(); // Update the game history display
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });