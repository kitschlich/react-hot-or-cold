var actions = require('../actions/index');

var difference = function(a, b) {
  return Math.abs(a - b);
};

var random = function() {
  return Math.floor(Math.random() * (100)) + 1;
};

var initialGameState = {
  randomNumber: random(),
  difference: [100],
  hints: []
};

var gameReducer = function(state, action) {
  console.log('Action:', action);
  state = state || initialGameState;
  if (action.type === actions.NEW_GAME) {
    return Object.assign({}, state, {
      randomNumber: random(),
      difference: [100],
      hints: []
    });
  }
  else if (action.type === actions.GUESS_NUMBER) {
    var hintWord;
    var lastDifference = state.difference[state.difference.length - 1];
    var currentDifference = difference(state.randomNumber, action.number);

    if (action.number == state.randomNumber) {
      hintWord = 'You guessed it!';
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
    console.log('action.number:', action.number);
    return Object.assign({}, state, {
      hints: state.hints.concat(action.number + ': ' + hintWord),
      difference: state.difference.concat(currentDifference)
    });
  }
  return state;
};

exports.gameReducer = gameReducer;
