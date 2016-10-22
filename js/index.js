var React = require('react');
var ReactDOM = require('react-dom');

var SomeComponent = require('./some-component');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<SomeComponent text="This is some component."/>, document.getElementById('app'));
});
