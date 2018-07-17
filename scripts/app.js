// DOM References:
const deck = document.querySelector(".deck");
const icons = document.querySelectorAll("i");
const cards = document.getElementsByClassName("card");


// event listener for card deck
deck.addEventListener("click", function(){
	const cardTarget = event.target;
		open(cardTarget);
		matchCards();				
}, false);

// When clicked, open/show the card
function open(cardTarget){		
	if(cardTarget.tagName === "LI") {
		cardTarget.classList.add("open", "show");

	} 
}

function matchCards() {
	// store flipped cards in an array
	let flippedCards = [];
		// If card is open, add to array 			
		for(let card of cards) {
			if(card.classList.contains("open") && card.classList.contains("show")){
				flippedCards.push(card);
			}
			// If cards match, 
			if(flippedCards.length === 2 && flippedCards[0].firstElementChild.classList.value === flippedCards[1].firstElementChild.classList.value){
				flippedCards[0].classList.add("match");
				flippedCards[1].classList.add("match");
			}else if(flippedCards.length === 2 && flippedCards[0].classList.contains("match") && flippedCards[1].classList.contains("match")) {
				// remove open & show
				flippedCards[0].classList.remove("open", "show");
				flippedCards[1].classList.remove("open", "show");
			} else { 
				close(flippedCards);
			}
		}		
}

function close(flippedCards){
	if(flippedCards.length === 2) {
		setTimeout(function(){
			flippedCards[0].classList.remove("open", "show");
			flippedCards[1].classList.remove("open", "show");
			flippedCards = [];
		}, 1000);										
	}
}

// Per project rubric:
// TODO: Change star rating after move based on how well the player is doing in game
// TODO: add game timer that starts when the game begins
// TODO: add Player move counter
// TODO: When the player wins a game, 
	// add a Congratulations Popup
	// that asks if the player wants to play again,
	// it displays the time it took to win the game and,
	// display the star rating
// TODO: add a restart button, allows the player to reset the game
// TODO: generate innerHTML, cards icons, draw game board, etc.