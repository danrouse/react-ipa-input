import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IpaInput from 'react-ipa-input';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            language: ''
        };
    }

    onSelectChange(event) {
        this.setState({
            language: event.target.value
        });
    }

    onInputChange(value) {
        console.log('oninputchange', value);
        this.setState({
            value: value
        });
    }

    render() {
        const langs = [
            { name: 'All', code: '' },
            { name: 'English', code: 'en' },
            { name: 'French', code: 'fr' },
            { name: 'Spanish', code: 'es' },
            { name: 'German', code: 'de' },
            { name: 'Russian', code: 'ru' },
            { name: 'Japanese', code: 'ja' },
            { name: 'Arabic', code: 'ar' }];

        return (
            <div>
                <label htmlFor="langselect">Restrict by language:</label>
                <select id="langselect" value={this.state.language} onChange={this.onSelectChange.bind(this)}>
                    {langs.map(lang => {
                        return <option key={lang.code} value={lang.code}>{lang.name}</option>;
                    })}
                </select>

                <IpaInput
                    value={this.state.value}
                    language={this.state.language}
                    onChange={this.onInputChange.bind(this)} />

                <p>IpaInput value: {this.state.value}</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
