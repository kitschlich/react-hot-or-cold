var React = require('react');

var Hint = function(props) {
    return (
        <div className="hint">
          {props.text}
        </div>
    );
};

module.exports = Hint;
