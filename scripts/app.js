// DOM References:
const deck = document.querySelector(".deck");
const cards = document.getElementsByClassName("card");
const icons = document.querySelectorAll("i");

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// TODO: Shuffle function from http://stackoverflow.com/a/2450976
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

// TODO: List of cards
const usedCards = [];  
usedCards.push();
// for card of cards
// if cards.item(i).className === "card open show"
	// usedCards.push()

// cards.length // 16
// cards.item(0) // returns specific node at that index
;
// const card2 = cards.item().className; 
// for(let card of cards){	
// 	if( === "card match"){
// 		console.log(firstCard);
// 	}
// }

const card1 = null; // store the i element class
const card2 = null; // store the i element class

// event listener for card deck
deck.addEventListener("click", function(){
	const flippedCards = event.target;	
	openCard(flippedCards);  
}, false);

//TODO: - //add class name "open"
function openCard(flippedCards){
	if(flippedCards.tagName === "LI") {
		flippedCards.classList.add("open", "show");				
		console.log(flippedCards);
	}
}

// TODO:
function addtoDeck(){
// Add the card to a *list* of usedCards 
// If the list already has another card, check to see if the two cards match
}

// TODO:
function cardMatch(card1, card2){
// If the cards do match, lock the cards in the open position 
}

// TODO:
function missMatchedCards() {
// If the cards do not match, 
    // remove the cards from the list and hide the card's symbol 
}

// TODO:
function moveCounter() {
// increment the move counter and display it on the page 

}

// TODO:
function gameFinalScore() {
// If all cards have matched, display a message with the final score 

}


