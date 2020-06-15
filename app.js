let scores, roundScores, activePlayer, gamePlaying;

init()

// btn roll

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        document.querySelector('.dice').style.display = 'block';

        // Random number
        let dice = Math.floor((Math.random() * 6)) + 1;

        // Display the result
        let diceDom = document.querySelector('.dice');
        diceDom.style.dispaly = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // Update thr round score if thr result is not 1
        if (dice != 1) {
            roundScores += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScores;
        } else {
            nextPlayer();
        }
    }
});

// btn hold

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        // Add current score to global score
        scores[activePlayer] += roundScores;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if the player won the game 
        if (scores[activePlayer] >= 100) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('actve');
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        } else {

            // Next player
            nextPlayer();
        }
    }
});

// new game 

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {

    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

    // Dice desapear when we change the player
    document.querySelector('.dice').style.display = 'none';
}

function init() {
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;

    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
