# react-ipa-input

## Phonetic symbol input component

React component for inputting phonetic symbols from the International Phonetic Alphabet. Filtering is available for some languages' phonetic inventories.


## Demo & Examples

Live demo: [kremonte.github.io/react-ipa-input](http://kremonte.github.io/react-ipa-input/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-ipa-input is to install it from NPM and include it in your own React build process (using [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org), etc).

You can also use the standalone build by including `dist/react-ipa-input.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-ipa-input --save
```


## Usage

Use this component in place of an ordinary text input. IPA symbols which resemble typed characters are suggested, and can be selected by clicking, by choosing with the arrow keys and hitting `Enter` to select, or by pressing the number key shown next to a suggestion.

```
import IpaInput from 'react-ipa-input';

<IpaInput 
    value="ˈʔɪnˌpət̚ˈvæɬˌju"
    language="en"
    showName={false} />
```

This component can take an `onChange` callback which will receive the value as it updates. Two-way data binding can be done similarly to a standard `input` element:

```
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'this data is bound',
            ipaInputValue: 'so is this'
        };
    }

    onInputChange(event) {
        const value = event.target.value;
        this.setState({ inputValue: value });
    }

    onIpaInputChange(value) {
        this.setState({ ipaInputValue: value });  
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue}
                    onChange={this.onInputChange.bind(this)} />
                <IpaInput value={this.state.ipaInputValue}
                    onChange={this.onIpaInputChange.bind(this)} />
            </div>
        );
    }
}
```

### Properties

* `value`: default input value
* `onChange`: callback function which receives the updated value as a string
* `language`: restricts shown symbols to a specific language. Available: `en, fr, de, es, ru, ja, ar`
* `showName` (*default: `true`*): show IPA character names in suggestion list
* `showNumber` (*default: `true`*): show completion keybindings in suggestion list


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).
