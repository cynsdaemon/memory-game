// DOM References:
const deck = document.querySelector(".deck");
const timer = document.querySelector(".timer");
const moves = document.querySelector(".moves");
const stars = document.querySelector(".stars");
const resetBtn = document.querySelector("#resetBtn");
const cards = document.getElementsByClassName("card");
const allCardsArr = Array.from(cards);
let gameInPlay = true; // start game
let counter; // setInterval
let playerMoves = 0;

resetBtn.insertAdjacentText("beforeend", "Restart Game"); 
timer.insertAdjacentText("beforeend","Timer: 0.00");

//shuffle(allCardsArr);
function generateGameBoard(){}

// create game tag and text elements
function createContent(tag, text){}


// event listener for card deck
deck.addEventListener("click", function(){
	const cardTarget = event.target;
		open(cardTarget);
		matchCards();
		gameMovesCounter(flippedCards);
}, false);

// When clicked, open/show the card
function open(cardTarget){		
	if(cardTarget.tagName === "LI"){
		cardTarget.classList.add("open", "show");
		if(gameInPlay){
			startTimer();		
			gameInPlay = false;
		}	
	} 
}

function matchCards(){
	// Store flipped cards in an array
	flippedCards = [];
		// If card is open, add to array 			
		for(let card of allCardsArr){
			if(card.classList.contains("open") && card.classList.contains("show")){
				flippedCards.push(card);
			}
		
			// If cards match, 
			if(flippedCards.length === 2 && flippedCards[0].firstElementChild.classList.value === flippedCards[1].firstElementChild.classList.value){
				flippedCards[0].classList.add("match");
				flippedCards[1].classList.add("match");
				flippedCards[0].classList.remove("open", "show");
				flippedCards[1].classList.remove("open", "show");
			}else { 
				close(flippedCards);
			}
		}		
}

function close(flippedCards){
	if(flippedCards.length === 2){
		setTimeout(function(){
			flippedCards[0].classList.remove("open", "show");
			flippedCards[1].classList.remove("open", "show");
			flippedCards = [];			
		}, 1000);
	}
}

// start timer
function startTimer(){
	let time = 0;
	//gameInPlay = false;
	// let minutes = time/60;
		counter = setInterval(function(){
			// update game timer
			time++;
			timer.textContent = `Timer: 0.${time}`;
		} ,1000);
}

// stop timer
function stopTimer(){
	clearInterval(counter);
}

// move counter
function gameMovesCounter(){
	if(flippedCards.length === 2){
	// update move counter
		playerMoves++;
		moves.textContent = `${playerMoves} Moves`;
	} 
	// remove a star
	if(playerMoves === 8 || playerMoves === 16 || playerMoves === 20){
		stars.querySelector("li").remove();
	}else if(stars.querySelector("li") === null){
		// TODO: fix condition for no stars
		console.log("there's no more stars!");

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

function endGame(){
	// start game = false;
	// if all cards are matched
		// stop game timer
		// display game modal
	
}

// reset game event listener
resetBtn.addEventListener("click", function(){
		resetMoveCounter();
		stopTimer();
		resetTimer();
		resetDeck();
		shuffle(allCardsArr);


}, false);

function resetMoveCounter(){
	playerMoves = 0;
	moves.textContent = `${playerMoves} Moves`;
	// TODO: reset star items
		// create ul element with class .stars
		// create li element with class fa fa-star
		// append child to parent element

}

function resetTimer(){
	time = 0;
	timer.textContent = `Timer: 0.${time}`;

}

function resetDeck(){
	flippedCards = [];
	for(card of cards){
		card.classList.value = "card";
	}
}





 