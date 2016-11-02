var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var FewestGuesses = React.createClass({
    componentDidMount: function() {
      console.log('fewestguesses mounted');
        this.props.dispatch(
            actions.fetchGuesses()
        );
    },
    render: function() {
        return (
            <div className="fewest-guesses">
            {console.log(this.props)}
              <h3>Best game so far: {this.props.fewestGuesses} guesses</h3>
            </div>
        );
    }
});

var mapStateToProps = function(state, props) {
  return {
    fewestGuesses: state.fewestGuesses
  };
};

var Container = connect(mapStateToProps)(FewestGuesses);

module.exports = Container;
