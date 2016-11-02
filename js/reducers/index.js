 var actions = require('../actions/index');

var difference = function(a, b) {
  return Math.abs(a - b);
};

var random = function() {
  return Math.floor(Math.random() * (100)) + 1;
};

var initialGameState = {
  randomNumber: random(),
  difference: 100,
  hints: [],
  fewestGuesses: null,
  win: false
};

var gameReducer = function(state, action) {
  console.log('Action:', action);
  state = state || initialGameState;
  console.log('State:', state);
  if (action.type === actions.NEW_GAME) {
    return Object.assign({}, state, {
      randomNumber: random(),
      difference: 100,
      hints: [],
      win: false
    });
  }
  else if (action.type === actions.GUESS_NUMBER) {
    var hintWord;
    var lastDifference = state.difference;
    var currentDifference = difference(state.randomNumber, action.number);

    if (action.number == state.randomNumber) {
      actions.saveGuesses(state.hints.length);
      return Object.assign({}, state, {
        win: true,
      });
    }
    else if (currentDifference > lastDifference) {
      hintWord = 'colder';
    }
    else if (currentDifference < lastDifference) {
      hintWord = 'warmer';
    }
    else {
      hintWord = 'same as the last guess!';
    }
    return Object.assign({}, state, {
      hints: state.hints.concat(action.number + ': ' + hintWord),
      difference: currentDifference
    });
  }
  else if (action.type === actions.FETCH_GUESSES_SUCCESS) {
    var guessesToReturn;
    if (action.guesses > 100) {
      guessesToReturn = 'unknown';
    } else {
      guessesToReturn = action.guesses;
    }
    return Object.assign({}, state, {
      fewestGuesses: guessesToReturn
    });
  }
  else if (action.type === actions.FETCH_GUESSES_ERROR) {
    return Object.assign({}, state, {
      fewestGuesses: 'Error fetching fewest guesses!'
    });
  }
  return state;
};

exports.gameReducer = gameReducer;
