/* Actions that must occur during a game:
- Generate a random number
- Guess a number
- Compare guess to generated number
*/

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number) {
  return {
    type: GUESS_NUMBER,
    number: number
  };
};

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
