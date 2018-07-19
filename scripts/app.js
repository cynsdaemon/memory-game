// DOM References:
const deck = document.querySelector(".deck");
const cards = document.getElementsByClassName("card");
const gameTimer = document.querySelector(".game-timer");
const restart = document.querySelector(".restart");
const moves = document.querySelector(".moves");
let start = true;
let counter;
gameTimer.textContent = "Timer: 0.00";
restart.textContent = "Restart Game";
moves.textContent = "Moves";

// event listener for card deck
deck.addEventListener("click", function(){
	const cardTarget = event.target;
		open(cardTarget);
		matchCards();				
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
	// store flipped cards in an array
	let flippedCards = [];
		// If card is open, add to array 			
		for(let card of cards){
			if(card.classList.contains("open") && card.classList.contains("show")){
				flippedCards.push(card);
			}
			// If cards match, 
			if(flippedCards.length === 2 && flippedCards[0].firstElementChild.classList.value === flippedCards[1].firstElementChild.classList.value){
				flippedCards[0].classList.add("match");
				flippedCards[1].classList.add("match");
			}else if(flippedCards.length === 2 && flippedCards[0].classList.contains("match") && flippedCards[1].classList.contains("match")){
				// remove open & show
				flippedCards[0].classList.remove("open", "show");
				flippedCards[1].classList.remove("open", "show");
			} else { 
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

// game timer
function startTimer(){
	let time = 0;
	start = false;
	let minutes = time/60;
		counter = setInterval(function(){
			// update game timer
			time++;
			gameTimer.textContent = `Timer: 0.${time}`;
		
		} ,1000);
}
	


function stopTimer(){
	clearInterval(counter);
}

function moveCounter(){}

function endGame(){}