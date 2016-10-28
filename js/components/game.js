var React = require('react');
var connect = require('react-redux').connect;

var Hint = require('./hint');
var actions = require('../actions/index');

var Game = React.createClass({
  compareGuess: function(guess) {
    var currentGuess = this.refs.currentGuess.value;
    this.props.dispatch(actions.guessNumber(currentGuess));
  },
  newGame: function() {
    this.props.dispatch(actions.newGame());
  },
  render: function() {
    var hints = this.props.hints.map(function(hint, key) {
      return <Hint text={hint} key={key} />
    });
    return (
        <div className="game">
          <h1>React Hot or Cold</h1>
          <h2>Try to guess the mystery number!</h2>
          {hints}
          <input type="text" ref="currentGuess"/>
          <button type="button" onClick={this.compareGuess}>Guess!</button>
          <div>
            <button type="button" onClick={this.newGame}>New Game</button>
          </div>
        </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  console.log('State:', state);
  return {
    hints: state.hints
  };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;
