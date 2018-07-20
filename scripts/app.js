// DOM References:
const deck = document.querySelector(".deck");
const cards = document.getElementsByClassName("card");
const timer = document.querySelector(".timer");
const restart = document.querySelector(".restart");
const moves = document.querySelector(".moves");
const stars = document.querySelector(".stars");
let start = true; // start game
let counter; // game clock
let playerMoves = 0; 
timer.insertAdjacentText("beforeend","Timer: 0.00");
restart.insertAdjacentText("beforeend", "Restart Game");

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
		if(start){
			startTimer();		
			start = false;
		}	
	} 
}

function matchCards(){
	// Store flipped cards in an array
	flippedCards = [];
		// If card is open, add to array 			
		for(let card of cards){
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
	start = false;
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



function endGame(){
	// start game = false;
	// if all cards are matched
		// stop game timer
		// display game modal
	
}

function restartGame(){
	// reset move counter 
	// reset game timer
	// remove match classes from cards
	// shuffle cards
	// clear end game modal
	//generate game board
}

function generateGameBoard(){}



 