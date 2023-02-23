# Development Strategy
- *courtesy of Udacity*

**It's very important that you plan** your project before you start writing any code. Break your project down into small pieces of work and plan out your approach to each one. It's much easier to debug and fix an issue if you've only made a small change. It becomes much harder if you wait longer to test your code. You don't build a house all at once, but brick by brick.

1. **DONE** Start by building a very simple grid of cards.
    - Don't worry about styling, just get something clickable on the page.
    - Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card. Are you going to have two separate elements stacked on top of each other?
2. **DONE** Add the functionality to handle clicks.
    - This should reveal the hidden side of each card.
3. **DONE** Work on the matching logic. How does your game "know" if a player guesses correctly or incorrectly?
4. Work on the winning condition. How does your game “know” if a player has won?

- We recommend saving styling until the very end. Allow your game logic and functionality to dictate the styling.*

Project rubric requirements:
--------
TODO:
- [X] Change star rating after move based on how well the player is doing in game
- [X] Add Player move counter
- [X] When the player wins a game,
    - add a Congratulations Popup or modal
        Ref: https://www.w3schools.com/howto/howto_css_modals.asp
    - that asks if the player wants to play again,
    - it displays the time it took to win the game
- [X] Add a restart button, allows the player to reset the game
- [X] Shuffle the list of cards using the provided "shuffle" method below
- [X] Loop through each card and create its HTML
    - add each card's HTML to the page


Refactor Memory Game -

Plan, organize and write for different states of the game:
1. init game
    function calls: generate elements, set move counter/stars, start game timer
2.  end game
    stop timer, disable elements with event listeners, display modal and replay options
3.  restart game
    reset variables to zero, move counter, stop/restart timer (same as init game)


Extras:
--------
TODO:
- [X] Fix clock icon in the HTML
- [ ] Fix timer display to fit this format -> Timer: 00.00
- [X] Add padding to the timer diplay
- [X] Upgrade Font Awesome to 5.v
- [ ] Add some animations to the open and matched cards
- [ ] Add a "pause game" function
- [ ] Incorporate responsive design into the app/game
- [ ] Add a "hint" function
- [X] Dynamically generate stars in the score panel
- [ ] Rename game, come up with something more snappy than "Memory Game"
- [ ] Add a GUI with button/icons (search for free game GUI)
- [ ] Add two more levels
- [ ] Save user score and username (maintain a game score board)
- [ ] Add sound effects
- [ ] Refactor code, for performance and accessibility
- [ ] Add keyboard game controller option for flipping cards

Bugs:
--------

- [X] Fix reset button
    - reset button doesn't "close" the cards in the resetDeck function
- [] Fix move counter
    - the number of moves doesn't display next to the stars in the score board
- [X] Remember to uncomment the shuffle function before submitting the project.

- [] Research *name collisions* and *coupling* per Udacity's Objects in Depth Lesson 7: [here](https://classroom.udacity.com/nanodegrees/nd001/parts/c02fda3b-67bf-48d6-a64f-c6960e2d4d79/modules/7e56389b-50d8-4e3a-84a0-eb3fd45456b2/lessons/504843ae-ba16-4573-a859-94da7a7d1dd4/concepts/27af7aad-6d3b-483e-960d-22d3fc090dc1#)


Reference:
-----------

- For loop for HTMLCollection elements:
    https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements

- Storing user input in an array:
    https://stackoverflow.com/questions/10523200/storing-user-input-in-array

- setTimeout:
    https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

- setTimout on Dev Docs:
    https://devdocs.io/dom/windoworworkerglobalscope/settimeout

- setInterval:
    https://devdocs.io/dom/windoworworkerglobalscope/setinterval

- How to convert time "seconds" into minutes:
    https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript

- JavaScript seconds to minutes and seconds:
    https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

- How to Make a Modal Box with CSS and JavaScript via W3C:
    https://www.w3schools.com/howto/howto_css_modals.asp

- The best way to reset your javaScript game after gameover and how
    https://stackoverflow.com/questions/28744682/the-best-way-to-reset-your-javascript-game-after-gameover-and-how

- CSS Tricks pointer-events: none;
    https://css-tricks.com/almanac/properties/p/pointer-events/

- How to compare two HTML elements
    https://stackoverflow.com/questions/10679762/how-to-compare-two-html-elements

- Per udacity review use strict mode:
    https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it

    https://www.codexpedia.com/javascript/use-the-function-form-of-use-strict/

    https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/
