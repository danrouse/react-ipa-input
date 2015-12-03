import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import glyphs from './glyph-descriptions';
import charsets from './charsets';

class IpaInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            touch: false,
            value: '',
            suggestions: [],
            selectedSuggestion: -1,
            mouseOverList: false
        };
    }
 
    onKeyDown(event) {
        /**
         * Handle suggestions list navigation and selection
         */
        const keyCode = event.keyCode;
        if(this.state.suggestions.length > 1) {
            switch(keyCode) {
                case 37: // left arrow
                    this.selectSuggestion(this.state.selectedSuggestion - 1);
                    event.preventDefault();
                    break;

                case 39: // right arrow
                    this.selectSuggestion(this.state.selectedSuggestion + 1);
                    event.preventDefault();
                    break;

                case 13: // enter
                    this.insertSuggestion(this.state.selectedSuggestion);
                    event.preventDefault();
                    break;
            }

            // number keys 1-9
            if(keyCode >= 49 && keyCode <= 57) {
                const index = keyCode - 49;
                if(index <= this.state.suggestions.length) {
                    this.insertSuggestion(index);
                    event.preventDefault();
                }
            }

            // numpad keys
            if(keyCode >= 97 && keyCode <= 105) {
                const index = keyCode - 97;
                if(index <= this.state.suggestions.length) {
                    this.insertSuggestion(index);
                    event.preventDefault();
                }
            }
        }

        // ctrl + a-z quick insertion
        // if(event.ctrlKey && keyCode >= 65 && keyCode <= 90) {
        //     event.preventDefault();
        //     console.log('ctrl', keyCode);

        //     const chr = String.fromCharCode(keyCode + 32);
        //     if(this.state.lastQuery === chr) {
        //         this.selectSuggestion(this.state.selectedSuggestion + 1, true);
        //     } else {
        //         const suggestions = this.getSuggestions(chr);
        //         console.log('input', chr, suggestions);
        //         this.setState({
        //             suggestions: suggestions,
        //         }, () => {
        //             if(suggestions.length) {
        //                 this.selectSuggestion(0);
        //             }
        //         });
        //     }
        // }
    }

    onTouchStart(event) {
        /**
         * Activate mobile-friendly 'touch' mode when tapped
         */
        this.setState({
            touch: true
        });
    }

    onClick(event) {
        /**
         * 
         */
        if(event.target === this.refs.list || event.target.parentNode === this.refs.list) {
            console.log('list click');
        } else {
            console.log('nonlist click', this.refs.list, event.target);
        }
    }

    onChange(event) {
        /**
         * Update suggestions list
         */
        let suggestions = [];
        const inputChar = event.target.value[event.target.selectionStart - 1].toLowerCase();
        suggestions = this.getSuggestions(inputChar);

        this.setState({
            suggestions: suggestions,
            selectedSuggestion: 0,
            value: event.target.value
        });
    }

    onFocus(event) {}

    onBlur(event) {
        if(!this.state.mouseOverList) {
            this.setState({
                suggestions: []
            });
        }
    }

    onListMouseOver(event) {
        this.setState({
            mouseOverList: true
        });
    }

    onListMouseOut(event) {
        this.setState({
            mouseOverList: false
        });
    }

    getSuggestions(query) {
        const suggestions = [];
        for(let glyph of glyphs) {
            if(glyph.resembles.indexOf(query) !== -1) {
                if(!this.props.language ||
                  (charsets[this.props.language].indexOf(glyph.glyph) !== -1) ||
                  (glyph.diacritic)) {
                    suggestions.push(glyph);
                }
            }
        }

        return suggestions;
    }

    selectSuggestion(index, loop) {
        let newIndex = Math.max(0, Math.min(this.state.suggestions.length - 1, index));

        if(loop && index < 0) {
            newIndex = this.state.suggestions.length - 1;
        } else if(loop && index > this.state.suggestions.length - 1) {
            newIndex = 0;
        }

        const oldValue = this.state.value;
        const caretPos = this.refs.input.selectionEnd;
        const newValue = oldValue.slice(0, caretPos - 1) +
                         this.state.suggestions[newIndex].glyph +
                         oldValue.slice(caretPos, oldValue.length);

        this.setState({
            value: newValue,
            selectedSuggestion: newIndex
        }, () => {
            this.refs.input.setSelectionRange(caretPos - 1, caretPos);
        });
    }

    insertSuggestion(index) {
        const caretPos = this.refs.input.selectionEnd;
        const oldValue = this.state.value;
        const newValue = oldValue.slice(0, caretPos - 1) +
                         this.state.suggestions[index].glyph +
                         oldValue.slice(caretPos, oldValue.length);

        this.setState({
            value: newValue,
            suggestions: [],
            selectedSuggestion: -1,
            mouseOverList: false
        }, () => {
            this.refs.input.focus();
            this.refs.input.setSelectionRange(caretPos, caretPos);
        });
    }

    componentWillReceiveProps(newProps) {
        if(newProps.language !== this.props.language) {
            this.setState({
                suggestions: [],
                selectedSuggestion: -1
            });
        }
    }

    render() {
        return (
            <div className="IpaInput">
                <input type="text"
                    ref="input"
                    className="IpaInputText"
                    value={this.state.value}
                    onKeyDown={this.onKeyDown.bind(this)}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onClick={this.onClick.bind(this)}
                    onChange={this.onChange.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)} />

                <ul className={classnames({
                        IpaInputSuggestions: true,
                        touch: this.state.touch
                    })}
                    onMouseOver={this.onListMouseOver.bind(this)}
                    onMouseOut={this.onListMouseOut.bind(this)}>
                    {this.state.suggestions.map((suggestion, index) => {
                        const {glyph, name, diacritic} = suggestion;
                        return (
                            <li key={'IpaSuggestion' + index}
                                className={classnames({
                                    IpaInputSuggestion: true,
                                    selected: index === this.state.selectedSuggestion
                                })}
                                onClick={this.insertSuggestion.bind(this, index)}>
                                <span className="suggestion-number">{index + 1}</span>
                                <span className="suggestion-glyph">{glyph}</span>
                                <span className="suggestion-name">{name}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

IpaInput.propTypes = {
    language: PropTypes.string
};

export default IpaInput;
