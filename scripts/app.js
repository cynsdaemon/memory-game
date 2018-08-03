// DOM References:
const deck = document.querySelector(".deck");
const timer = document.querySelector(".timer");
const moves = document.querySelector(".moves");
const stars = document.querySelector(".stars");
const resetBtn = document.getElementById("resetBtn");
const modalContent = document.querySelector(".modalContent");
const modalBtn = document.querySelector(".modalBtn");
const replayMod = document.querySelector(".replayMod");
const deck_o_cards = document.getElementsByClassName("card");
const icons = ["far fa-gem", "far fa-gem", 
                "far fa-paper-plane", "far fa-paper-plane", 
                "fa fa-anchor", "fa fa-anchor", 
                "fa fa-bolt", "fa fa-bolt", 
                "fa fa-cube", "fa fa-cube", 
                "fas fa-bomb", "fas fa-bomb", 
                "fa fa-leaf", "fa fa-leaf", 
                "fa fa-bicycle", "fa fa-bicycle"];

// Global varibles:
let cardsInPlay;
let matchcounter = 0;

// setInterval, game timers
let counter;
let starcount = 3;

// total number of stars
let playermoves = 0;
let gameInPlay;
let time;

// window onload
window.onload = function() {
    gameInPlay = true;
    resetBtn.insertAdjacentText("beforeend", "Restart Game");
    timer.insertAdjacentText("beforeend", "Timer: 0.00");

    //shuffle(icons);
    generateCards();
    generateStars(starcount);

    // event listener for card deck
    deck.addEventListener("click", function() {
        const cardTarget = event.target;

        open(cardTarget);
        checkMatchedCards();
        gameMovesCounter(cardsInPlay);

        if (gameInPlay && cardTarget.tagName === "LI") {
            startTimer();
            gameInPlay = false;

        }
    }, false);

    //event listener for reset game  
    resetBtn.addEventListener("click", function() {
        if (playermoves === 0 && counter === 0) {
            return null;
        } else if (playermoves >= 1 || counter >= 1) {
            resetDeck();
            resetMoveCounter();
            shuffle(icons);
            stopTimer();
            startTimer();
        }

    }, false);

    // event listener to toggle modal
    modalBtn.addEventListener("click", function() {
        const modal = document.getElementById("modal");

        modal.style.display = "none";

    }, false);

    replayMod.addEventListener("click", function() {
        window.location = " ";
    });

}

function generateCards() {
    // loop thru and create cards, icons, and classes	
    for (let icon of icons) {
        let cardHTML = document.createElement("li");

        deck.appendChild(cardHTML);
        cardHTML.classList.add("card");

        // loop thru and create icons
        cardHTML.innerHTML = `<i class="${icon}"> </i>`

    }
}

// create star items
function generateStars(starcount) {
    if (stars.childElementCount >= starcount) {
        return null;
    } else {
        for (let s = 0; s < starcount; s++) {
            let starHTML = document.createElement("li");
            let staricon = document.createElement("i");
            stars.appendChild(starHTML);

            for (let i = 0; i < starcount; i++) {
                starHTML.appendChild(staricon);
                staricon.classList.add("fa", "fa-star");
            }
        }
    }
}

// Toggle cards, open/close
function open(cardTarget) {
    if (cardTarget.tagName === "LI") {
        cardTarget.classList.add("open", "show");
    }

}

function close(cardsInPlay) {
    if (cardsInPlay.length === 2) {
       
        // close cards, after x timeout 
        setTimeout(function() {
            cardsInPlay[0].classList.remove("open", "show");
            cardsInPlay[1].classList.remove("open", "show");
            cardsInPlay = [];
        }, 1000);
    }
}

// check cards for match
function checkMatchedCards() {

    const ALL_MATCHES = 8;
    cardsInPlay = [];   

    // If card is open, add to array 			
    for (let card of deck_o_cards) {
        
        if (card.classList.contains("open") && card.classList.contains("show")){
            cardsInPlay.push(card);

        } else if (cardsInPlay.length === 2 && cardsInPlay[0].firstElementChild.classList.value === cardsInPlay[1].firstElementChild.classList.value) {
            // If cards match, add match class 
            cardsInPlay[0].classList.add("match", "disabled");
            cardsInPlay[1].classList.add("match", "disabled");

            // empty array           
            cardsInPlay = [];

            // increment match counter
            matchcounter++;

        } else if (cardsInPlay.length === 2 && cardsInPlay[0].classList.contains("match") && cardsInPlay[1].classList.contains("match")) {

            // remove open, show
            cardsInPlay[0].classList.remove("open", "show");
            cardsInPlay[1].classList.remove("open", "show");
        
        } else if (matchcounter === ALL_MATCHES) {
            
            // when all cards are matched, end game
            endGame();
        
        } else {
            close(cardsInPlay);
        }
    }
}

// start game timer
function startTimer() {
    time = 0;

    counter = setInterval(function() {
        // update game timer
        time++;

        timer.textContent = `Timer: ${time}`;

    }, 1000);

}

// stop timer
function stopTimer() {
    clearInterval(counter);
}

// player move counter
function gameMovesCounter(cardsInPlay) {
    if (cardsInPlay.length === 2) {
        // update move counter
        playermoves++;
        moves.textContent = `${playermoves} Moves`;
    }
    // remove a star
    if (playermoves === 8 || playermoves === 16 || playermoves === 15) {
        stars.querySelector("li").remove();
    } else if (stars.childElementCount === 0) {
        // TODO: fix condition for no stars
        console.log("There are no more star elements");

    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function toggleModal() {
    if (gameInPlay) {
        modal.style.display = "none";
    } else if (!gameInPlay) {
        modal.style.display = "block";
        modalContent.innerHTML = `Congratulations! <br> Here are your stats: <br> Stars: ${starcount}, Moves: ${playermoves}, and Time: ${time}`;
    }
}

// game reset
function resetMoveCounter() {
    playermoves = 0;

    moves.textContent = `${playermoves} Moves`;
    generateStars(starcount);

}

function resetTimer() {
    time = 0;
    timer.textContent = `Timer: 0.${time}`;
}

function resetDeck() {
    cardsInPlay = [];
    for (let card of deck_o_cards) {
        card.classList.remove("match");
    }
}

// end game
function endGame() {
    stopTimer();
    toggleModal();
    deck.classList.add("disabled");
    resetBtn.classList.add("disabled");
}



