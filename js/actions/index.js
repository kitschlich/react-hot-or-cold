var fetch = require('isomorphic-fetch');

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

var FETCH_GUESSES_SUCCESS = 'FETCH_GUESSES_SUCCESS';
var fetchGuessesSuccess = function(guesses) {
  return {
    type: FETCH_GUESSES_SUCCESS,
    guesses: guesses
  };
};

var FETCH_GUESSES_ERROR = 'FETCH_GUESSES_ERROR';
var fetchGuessesError = function(error) {
  return {
    type: FETCH_GUESSES_ERROR,
    error: error
  };
};

var fetchGuesses = function() {
    return function(dispatch) {
        var url = '/guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var guesses = data;
            return dispatch(
                fetchGuessesSuccess(guesses)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchGuessesError(error)
            );
        });
    };
};

var SAVE_GUESSES_SUCCESS = 'SAVE_GUESSES_SUCCESS';
var saveGuessesSuccess = function(guesses) {
  return {
    type: SAVE_GUESSES_SUCCESS,
    guesses: guesses
  };
};

var SAVE_GUESSES_ERROR = 'SAVE_GUESSES_ERROR';
var saveGuessesError = function(error) {
  return {
    type: SAVE_GUESSES_ERROR,
    error: error
  };
};

var saveGuesses = function(guesses) {
  console.log('guesses:', guesses);
    return function(dispatch) {
        var data = {
          method: 'POST'
        };
        return fetch('/guesses/' + guesses, data).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var guesses = data;
            return dispatch(
                saveGuessesSuccess(guesses)
            );
        })
        .catch(function(error) {
            return dispatch(
                saveGuessesError(error)
            );
        });
    };
};

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.FETCH_GUESSES_SUCCESS = FETCH_GUESSES_SUCCESS;
exports.fetchGuessesSuccess = fetchGuessesSuccess;
exports.FETCH_GUESSES_ERROR = FETCH_GUESSES_ERROR;
exports.fetchGuessesError = fetchGuessesError;
exports.fetchGuesses = fetchGuesses;
exports.SAVE_GUESSES_SUCCESS = SAVE_GUESSES_SUCCESS;
exports.saveGuessesSuccess = saveGuessesSuccess;
exports.SAVE_GUESSES_ERROR = SAVE_GUESSES_ERROR;
exports.saveGuessesError = saveGuessesError;
exports.saveGuesses = saveGuesses;
