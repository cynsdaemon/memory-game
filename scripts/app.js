// DOM References:
const deck = document.querySelector(".deck");
const cards = document.getElementsByClassName("card");
const icons = document.querySelectorAll("i");

// event listener for card deck
deck.addEventListener("click", function(){
	const cardTarget = event.target;
		open(cardTarget);
		// To Match cards: 
		
			// store flipped cards in an array
			let flippedCards = [];
						
			for(let card of cards) {
				if(card.classList.contains("show") ) {
					
					flippedCards.push(card);
					console.log(flippedCards);
				} 
							
				// TODO: check flippedCards array for match
			
					if((flippedCards.length === 2) && (flippedCards[0].firstElementChild.classList.value === flippedCards[1].firstElementChild.classList.value)){
						flippedCards[0].classList.add("match");
						flippedCards[1].classList.add("match");
					}
					
					// TODO: if no match
					// if(!flippedCards[0].firstElementChild.classList.value === flippedCards[1].firstElementChild.classList.value) {
					// 	flippedCards[0].classList.remove("match");
					// 	flippedCards[1].classList.remove("match");
					// }

						
					
				
				// if flipped cards equal 2, TODO: add empty array timeout
				// if(flippedCards.length === 3) {
				// 	flippedCards = [];
				// }
			
			}
				
		
				

				
				
            
		

}, false);

// When clicked, open/show the card
function open(cardTarget){		
	if(cardTarget.tagName === "LI") {
		cardTarget.classList.toggle("open");
		cardTarget.classList.toggle("show");

	} 
}

// Per project rubric:
// TODO: Add function that compares open cards in an array
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