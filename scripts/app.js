// DOM References:
const deck = document.getElementsByClassName("deck");

// List of cards
const cards = [];  


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

// TODO: Set up the event listener for a card.
deck.addEventListener("click", function(){
    console.log("You clicked a card");

} , false);

function showCard(){
    // If a card is clicked:
    // Display the card's symbol 
}        
        
function addtoDeck(){
// Add the card to a *list* of "open" cards 
// If the list already has another card, check to see if the two cards match
}

function cardMatch(){
// If the cards do match, lock the cards in the open position 
}


function missMatchedCards() {
// If the cards do not match, 
    // remove the cards from the list and hide the card's symbol 
}

function numOfMoves() {
// increment the move counter and display it on the page 

}

function gameFinalScore() {
// If all cards have matched, display a message with the final score 

}
