var React = require('react');
var ReactDOM = require('react-dom');
var IpaInput = require('react-ipa-input');

var App = React.createClass({
    render () {
        return (
            <div>
                <IpaInput />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
