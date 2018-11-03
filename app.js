/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// adding variables
var scores;
var roundScores;
var activePlayer;


scores = [0,0];
roundScores = 0;
activePlayer = 0;

var x = document.querySelector('#score-0').textContent;
console.log(x);

// using selector to hide the dice originally
document.querySelector('.dice').style.display = 'none';

// changing the original score numbers
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;


// making the roll button work
document.querySelector('.btn-roll').addEventListener('click', function() {
    // get random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // display the result
    var diceObject = document.querySelector('.dice')
    diceObject.style.display = 'block';
    diceObject.src = 'dice-' + dice + '.png';

    console.log(dice);

    // update the round score if it's not a 1
    if(dice > 1) {
       roundScores += dice;
       document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
        nextPlayer()
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current score to the global score
    scores[activePlayer] += roundScores;

    // update interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game

    nextPlayer()
})

function nextPlayer() {
    // go to other player
    activePlayer  === 0 ? activePlayer = 1 : activePlayer = 0;
    // reset current score to 0
    roundScores = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // adding the active class dynamically
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('#current-' + activePlayer).textContent = dice;
// i'm going to leave this example below in there for future reference if I want to style the text there more
// document.querySelector('#current-' + activePlayer).innerHTML = '<h1 class="dice-text">' + dice + '</h1>';




//TODO: add prompts for name selection, add shot indicators, maybe some extra images, change background
