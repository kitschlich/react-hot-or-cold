var actions = require('../actions/index');

var initialGameState = [];

var gameReducer = function(state, action) {
  state = state || initialGameState;
  if (action.type === actions.NEW_GAME) {
    return state.concat({
      type: action.type
    });
  }
  else if (action.type === actions.GUESS_NUMBER) {
    return state.concat({
      type: action.type,
      number: action.number
    });
  }
};

exports.gameReducer = gameReducer;
