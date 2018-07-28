// DOM References:
const deck = document.querySelector(".deck");
const timer = document.querySelector(".timer");
const moves = document.querySelector(".moves");
const stars = document.querySelector(".stars");
const resetBtn = document.getElementById("resetBtn");
const modalContent = document.querySelector(".modalContent");
const modalBtn = document.querySelector(".modalBtn");
const deck_o_cards = document.getElementsByClassName("card"); 
let gameInPlay = true; // bool for start game
let counter; // setInterval, game timers
let time = 0;
let playerMoves = 0;

const starCount = 3; // total number of stars
const icons = [ "far fa-gem", "far fa-gem",
				"far fa-paper-plane", "far fa-paper-plane",
				"fa fa-anchor", "fa fa-anchor",
				"fa fa-bolt", "fa fa-bolt",
				"fa fa-cube", "fa fa-cube",
				"fa fa-anchor", "fa fa-anchor",
				"fa fa-leaf", "fa fa-leaf",
				"fa fa-bicycle", "fa fa-bicycle"
			  ];


// init game
window.onload = function(){
	
	resetBtn.insertAdjacentText("beforeend", "Restart Game"); 
	timer.insertAdjacentText("beforeend","Timer: 0.00");	
	
		shuffle(icons);
		generateCards();
		generateStars();

	// event listener for card deck
	deck.addEventListener("click", function(){	
		const cardTarget = event.target;
		
		//startTimer();
		open(cardTarget);
		matchCards();
		gameMovesCounter(myCards);
	}, false);

	//event listener for reset game  
	resetBtn.addEventListener("click", function(){
		if(playerMoves === 0 && counter === 0){
			return null;	
		} else if(playerMoves >= 1 || counter >= 1){
			resetDeck();
			resetMoveCounter();
			stopTimer();
			shuffle(icons);
		}

	}, false);

	// event listener to close modal
	modalBtn.addEventListener("click", function(){
		const modal = document.getElementById("modal");	
		
		modal.hidden = true;
		
	}, false);



}

function generateCards(){
	// loop thru and create cards, icons, and classes	
	for(let icon of icons){
		let cardHTML = document.createElement("li");

		deck.appendChild(cardHTML);
		cardHTML.classList.add("card");

		// loop thru and create icons
		cardHTML.innerHTML = `<i class="${icon}"> </i>`
								
	}
}

// create star items
function generateStars(){
	if(stars.childElementCount >= starCount){
		return null;
	} else {	
		for(let s = 0; s < starCount; s++){
			let starHTML = document.createElement("li");
			let starIcon = document.createElement("i");
				stars.appendChild(starHTML);
		
			for(let i = 0; i < starCount; i++){
				starHTML.appendChild(starIcon);
				starIcon.classList.add("fa", "fa-star");
			} 
		}
	}
}

// When clicked, open/show the card
function open(cardTarget){			
	if(cardTarget.tagName === "LI"){
		gameInPlay = true;
		cardTarget.classList.add("open", "show");
	} 
}

function matchCards(){
	// Store flipped cards in an array
	myCards = [];
	
	// If card is open, add to array 			
	for(let card of deck_o_cards){
		if(card.classList.contains("open") && card.classList.contains("show")){
			myCards.push(card);
		}
		
		// If cards match, 
		if(myCards.length === 2 && myCards[0].firstElementChild.classList.value === myCards[1].firstElementChild.classList.value){
			myCards[0].classList.add("match");
			myCards[1].classList.add("match");
			myCards[0].classList.remove("open", "show");
			myCards[1].classList.remove("open", "show");
		}else { 
			close(myCards);
		}
	}		
}

function close(myCards){
	if(myCards.length === 2){
		setTimeout(function(){
			myCards[0].classList.remove("open", "show");
			myCards[1].classList.remove("open", "show");
			myCards = [];			
		}, 1000);
	}
}

// start timer
function startTimer(){
	time = 0;
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
	if(myCards.length === 2){
	// update move counter
		playerMoves++;
		moves.textContent = `${playerMoves} Moves`;
	} 
	// remove a star
	if(playerMoves === 8 || playerMoves === 16 || playerMoves === 20){
		stars.querySelector("li").remove();
	}else if(stars.childElementCount === 0){
		// TODO: fix condition for no stars
		return null;

	}
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array){
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

// TODO: End game
function endGame(){
	gameInPlay = false;

	for(card of deck_o_cards) {
		// if all cards has match
		if(card.classList.contains("match")) {
			console.log("All cards matched!");
		} else {
			console.log("Game in play" + gameInPlay);
		}
	}
		// stop game timer
		// stop move counter
		// disable event listeners
		// display game modal
		displayModal();
		// show move counter status
			// show game timer results
			// add option to restart the game
}

function displayModal(){

	if(!gameInPlay){
		modal.hidden = false; 
	}else {
		modal.hidden = true;
	
		modalContent.innerHTML = `Congratulations! <br> Here are your stats: <br> Stars: ${starCount}, Moves: ${playerMoves}, and Time: ${time}`;
	}

}













function resetMoveCounter(){
	playerMoves = 0;
	
	moves.textContent = `${playerMoves} Moves`;
	generateStars();

}

function resetTimer(){
	time;
	
	timer.textContent = `Timer: 0.${time}`;
	// TODO: Start game timer if game is in play
		// if myCards.length has >= 1
		// or if player clicks on a cardTarget

}

function resetDeck(){
	myCards = [];
	resetTimer();

}




 