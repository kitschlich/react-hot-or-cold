var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var NewGame = React.createClass({
    componentDidMount: function() {
      console.log('new-game mounted');
      this.props.dispatch(actions.saveGuesses(this.props.hints.length + 1));
    },
    componentWillUnmount: function() {
      this.props.dispatch(actions.fetchGuesses());
    },
    newGame: function() {
      this.props.dispatch(actions.newGame());
    },
    render: function() {
        return (
          <div className="newGame">
            <h2>You Win!</h2>
            <button type="button" onClick={this.newGame}>New Game</button>
          </div>
        );
    }
});

var mapStateToProps = function(state, props) {
  return {
    hints: state.hints
  };
};

var Container = connect(mapStateToProps)(NewGame);

module.exports = Container;
