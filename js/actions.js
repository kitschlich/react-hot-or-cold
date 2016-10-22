/* Actions that must occur during a game:
- Generate a random number
- Guess a number
- Compare guess to generated number
*/

var GENERATE_NUMBER = 'GENERATE_NUMBER';
var generateNumber = function(number) {
  return {
    type: GENERATE_NUMBER,
    number: number
  };
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess, actual) {
  return {
    type: GUESS_NUMBER,
    guess: guess,
    actual: actual
  };
};

var COMPARE_GUESS = 'COMPARE_GUESS';
var compareGuess = function(result) {
  return {
    type: 'COMPARE_GUESS',
    result: result
  };
};

exports.GENERATE_NUMBER = GENERATE_NUMBER;
exports.generateNumber = generateNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.COMPARE_GUESS = COMPARE_GUESS;
exports.compareGuess = compareGuess;
