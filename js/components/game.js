var React = require('react');
var connect = require('react-redux').connect;

var Hint = require('./hint');
var FewestGuesses = require('./fewest-guesses');
var NewGame = require('./new-game');

var actions = require('../actions/index');

var Game = React.createClass({
  compareGuess: function(guess) {
    var currentGuess = this.refs.currentGuess.value;
    this.props.dispatch(actions.guessNumber(currentGuess));
  },
  render: function() {
    var hints = this.props.hints.map(function(hint, key) {
      return <Hint text={hint} key={key} />
    });
    return (
        <div className="game">
          <h1>React Hot or Cold</h1>
          <h2>Try to guess the mystery number!</h2>
          <FewestGuesses />
          {hints}
          <input type="text" ref="currentGuess"/>
          <button type="button" onClick={this.compareGuess}>Guess!</button>
          { this.props.win ? <NewGame /> : null }
        </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    hints: state.hints,
    win: state.win,
    fewestGuesses: state.fewestGuesses
  };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;
