// Creating the player objects
let player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
};

let player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
};


// Selecting the reset and playTo buttons
const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector("#playto");


// Setting the number of the score to play until
let playTo = parseInt(document.getElementById("playto").value);


// Adding click event listeners to all of the buttons used in the game
player1.button.addEventListener('click', function () {
    checkScores(player1, player2);
    updateScores(player1);
});

player2.button.addEventListener('click', function () {
    checkScores(player2, player1);
    updateScores(player2);
});

resetButton.addEventListener('click', resetScores);

playToSelect.addEventListener('change', function () {
    playTo = parseInt(this.value);
    resetScores();
})


// Function to disable both player buttons
function disableButtons() {
    player1.button.disabled = true;
    player2.button.disabled = true;
}


// Function to enable both player buttons
function enableButtons() {
    player1.button.disabled = false;
    player2.button.disabled = false;
}

// Function to reset the text color of both player scores
function resetColors() {
    player1.display.classList.remove('winner', 'loser');
    player2.display.classList.remove('winner', 'loser');
}


// Function to update the score of the current player in the game
function updateScores(player) {
    player.display.innerText = player.score;
}


// Reset button should reset scores,playTo and enable both player buttons
function resetScores() {
    for (let player of [player1, player2]) {
        player.score = 0;
        updateScores(player)

    }
    enableButtons();
    resetColors();
}


// Function to increase the current score and check if the player has won the game
function checkScores(player1, player2) {
    player1.score++;
    if (player1.score === playTo) {
        
        // when a player wins set the text colors to green for the winner and red for the loser
        player1.display.classList.add('winner')
        player2.display.classList.add('loser')
        
        // Disable the buttons (except for reset) when a player has won the game
        disableButtons();
    }
}