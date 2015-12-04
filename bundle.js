require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * @name JavaScript/NodeJS Merge v1.2.0
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    'en': ['ɑ', 'æ', 'ɔ', 'ð', 'ʤ', 'ə', 'ɚ', 'ɛ', 'ɜ', 'ɝ', 'ɡ', 'ʰ', 'ɪ', 'ŋ', 'θ', 'ɹ', 'ɾ', 'ʃ', 'ʊ', 'ʌ', 'ʒ', 'ʔ'],
    'fr': ['ɑ', 'ɔ', 'ə', 'ɛ', 'ɥ', 'ŋ', 'œ', 'ʀ', 'ʁ', 'ʃ', 'ʒ'],
    'ru': ['ɑ', 'ɐ', 'æ', 'ɔ', 'ɕ', 'ə', 'ɛ', 'ɨ', 'ɪ', 'ɵ', 'ʂ', 'ʉ', 'ʊ', 'ɣ', 'ʑ', 'ʐ'],
    'de': ['ɐ', 'ɔ', 'ç', 'ə', 'ɛ', 'ɪ', 'ŋ', 'ø', 'œ', 'ʁ', 'ʃ', 'ʊ', 'ʏ', 'ʒ', 'ʔ'],
    'es': ['β', 'ð', 'ɟ', 'ʝ', 'ŋ', 'ɲ', 'ɾ', 'ʃ', 'ɣ', 'ʎ'],
    'ja': ['ɕ', 'ç', 'ɯ', 'ɰ', 'ŋ', 'ɲ', 'ɴ', 'ɸ', 'ɺ', 'ɽ', 'ʑ', 'ʔ'],
    'ar': ['ð', 'ʤ', 'ħ', 'θ', 'ʃ', 'ɣ', 'ʔ', 'ʕ']
};
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = [{ glyph: 'ɑ',
    name: 'open back unrounded',
    resembles: ['a'],
    diacritic: false
}, {
    glyph: 'ɐ',
    name: 'open-mid schwa',
    resembles: ['a'],
    diacritic: false
}, {
    glyph: 'ɒ',
    name: 'open back rounded',
    resembles: ['a'],
    diacritic: false
}, {
    glyph: 'æ',
    name: 'raised open front unrounded',
    resembles: ['a'],
    diacritic: false
}, {
    glyph: 'ɓ',
    name: 'vd bilabial implosive',
    resembles: ['b'],
    diacritic: false
}, {
    glyph: 'ʙ',
    name: 'vd bilabial trill',
    resembles: ['b'],
    diacritic: false
}, {
    glyph: 'β',
    name: 'vd bilabial fricative',
    resembles: ['b'],
    diacritic: false
}, {
    glyph: 'ᵝ',
    name: 'rounded coarticulation',
    resembles: ['b'],
    diacritic: false
}, {
    glyph: 'ᵇ',
    name: 'labial coarticulation',
    resembles: ['b'],
    diacritic: false
}, {
    glyph: 'ɔ',
    name: 'open-mid back rounded',
    resembles: ['c', 'o'],
    diacritic: false
}, {
    glyph: 'ɕ',
    name: 'vl alveolopalatal fricative',
    resembles: ['c'],
    diacritic: false
}, {
    glyph: 'ç',
    name: 'vl palatal fricative',
    resembles: ['c'],
    diacritic: false
}, {
    glyph: 'ɗ',
    name: 'vd alveolar implosive',
    resembles: ['d'],
    diacritic: false
}, {
    glyph: 'ɖ',
    name: 'vd retroflex plosive',
    resembles: ['d'],
    diacritic: false
}, {
    glyph: 'ð',
    name: 'vd dental fricative',
    resembles: ['d', 'ذ', 'ظ'],
    diacritic: false
}, {
    glyph: 'ʤ',
    name: 'vd postalveolar affricate',
    resembles: ['d', 'z', 'g', 'ج'],
    diacritic: false
}, {
    glyph: 'ə',
    name: 'schwa',
    resembles: ['e'],
    diacritic: false
}, {
    glyph: 'ɘ',
    name: 'close-mid schwa',
    resembles: ['e'],
    diacritic: false
}, {
    glyph: 'ɚ',
    name: 'rhotacized schwa',
    resembles: ['e', 'r'],
    diacritic: false
}, {
    glyph: 'ɛ',
    name: 'open-mid front unrounded',
    resembles: ['e'],
    diacritic: false
}, {
    glyph: 'ɜ',
    name: 'open-mid central',
    resembles: ['e'],
    diacritic: false
}, {
    glyph: 'ɝ',
    name: 'rhotacized open-mid central',
    resembles: ['e', 'r'],
    diacritic: false
}, {
    glyph: 'ɞ',
    name: 'open-mid central rounded',
    resembles: ['e'],
    diacritic: false
}, {
    glyph: 'ɟ',
    name: 'vd palatal plosive',
    resembles: ['f'],
    diacritic: false
}, {
    glyph: 'ʄ',
    name: 'vd palatal implosive',
    resembles: ['f'],
    diacritic: false
}, {
    glyph: 'ɡ',
    name: 'vd velar plosive',
    resembles: ['g'],
    diacritic: false
}, {
    glyph: 'ɠ',
    name: 'vd velar implosive',
    resembles: ['g'],
    diacritic: false
}, {
    glyph: 'ɢ',
    name: 'vd uvular plosive',
    resembles: ['g'],
    diacritic: false
}, {
    glyph: 'ʛ',
    name: 'vd uvular implosive',
    resembles: ['g'],
    diacritic: false
}, {
    glyph: 'ɦ',
    name: 'vd glottal fricative',
    resembles: ['h'],
    diacritic: false
}, {
    glyph: 'ɧ',
    name: 'vl multiple-place fricative',
    resembles: ['h'],
    diacritic: false
}, {
    glyph: 'ħ',
    name: 'vl pharyngeal fricative',
    resembles: ['h', 'ح'],
    diacritic: false
}, {
    glyph: 'ɥ',
    name: 'labial-palatal approximant',
    resembles: ['h'],
    diacritic: false
}, {
    glyph: 'ʜ',
    name: 'vl epiglottal fricative',
    resembles: ['h'],
    diacritic: false
}, {
    glyph: 'ʰ',
    name: 'aspirated',
    resembles: ['h'],
    diacritic: true
}, {
    glyph: 'ʱ',
    name: 'breathy-voice-aspirated',
    resembles: ['h'],
    diacritic: true
}, {
    glyph: 'ɨ',
    name: 'close central unrounded',
    resembles: ['i'],
    diacritic: false
}, {
    glyph: 'ɪ',
    name: 'lax close front unrounded',
    resembles: ['i'],
    diacritic: false
}, {
    glyph: 'ʝ',
    name: 'vd palatal fricative',
    resembles: ['j'],
    diacritic: false
}, {
    glyph: 'ʲ',
    name: 'palatalized',
    resembles: ['j'],
    diacritic: true
}, {
    glyph: 'ɭ',
    name: 'vd retroflex lateral',
    resembles: ['l'],
    diacritic: false
}, {
    glyph: 'ɬ',
    name: 'vl alveolar lateral fricative',
    resembles: ['l'],
    diacritic: false
}, {
    glyph: 'ɫ',
    name: 'velarized vd alveolar lateral',
    resembles: ['l'],
    diacritic: false
}, {
    glyph: 'ɮ',
    name: 'vd alveolar lateral fricative',
    resembles: ['l'],
    diacritic: false
}, {
    glyph: 'ʟ',
    name: 'vd velar lateral',
    resembles: ['l'],
    diacritic: false
}, {
    glyph: 'ʷ',
    name: 'labialized',
    resembles: ['l'],
    diacritic: true
}, {
    glyph: 'ɱ',
    name: 'vd labiodental nasal',
    resembles: ['m'],
    diacritic: false
}, {
    glyph: 'ɯ',
    name: 'close back unrounded',
    resembles: ['m', 'w'],
    diacritic: false
}, {
    glyph: 'ɰ',
    name: 'velar approximant',
    resembles: ['m', 'w'],
    diacritic: false
}, {
    glyph: 'ᵐ',
    name: 'nasal coarticulation',
    resembles: ['m'],
    diacritic: true
}, {
    glyph: 'ŋ',
    name: 'vd velar nasal',
    resembles: ['n'],
    diacritic: false
}, {
    glyph: 'ɳ',
    name: 'vd retroflex nasal',
    resembles: ['n'],
    diacritic: false
}, {
    glyph: 'ɲ',
    name: 'vd palatal nasal',
    resembles: ['n'],
    diacritic: false
}, {
    glyph: 'ɴ',
    name: 'vd uvular nasal',
    resembles: ['n'],
    diacritic: false
}, {
    glyph: 'ⁿ',
    name: 'nasal coarticulation',
    resembles: ['n'],
    diacritic: true
}, {
    glyph: 'ᵑ',
    name: 'nasal coarticulation',
    resembles: ['n'],
    diacritic: true
}, {
    glyph: 'ø',
    name: 'front close-mid rounded',
    resembles: ['o'],
    diacritic: false
}, {
    glyph: 'ɵ',
    name: 'rounded schwa',
    resembles: ['o'],
    diacritic: false
}, {
    glyph: 'ɸ',
    name: 'vl bilabial fricative',
    resembles: ['o', 'f'],
    diacritic: false
}, {
    glyph: 'θ',
    name: 'vl dental fricative',
    resembles: ['o', 't', 'ث'],
    diacritic: false
}, {
    glyph: 'œ',
    name: 'front open-mid rounded',
    resembles: ['o'],
    diacritic: false
}, {
    glyph: 'ɶ',
    name: 'front open rounded',
    resembles: ['o'],
    diacritic: false
}, {
    glyph: 'ʘ',
    name: 'bilabial click',
    resembles: ['o'],
    diacritic: false
}, {
    glyph: 'ɹ',
    name: 'vd (post)alveolar approximant',
    resembles: ['r'],
    diacritic: false
}, {
    glyph: 'ɺ',
    name: 'vd alveolar lateral flap',
    resembles: ['r'],
    diacritic: false
}, {
    glyph: 'ɾ',
    name: 'vd alveolar tap',
    resembles: ['r'],
    diacritic: false
}, {
    glyph: 'ɻ',
    name: 'vd retroflex approximant',
    resembles: ['r'],
    diacritic: false
}, {
    glyph: 'ʀ',
    name: 'vd uvular trill',
    resembles: ['r'],
    diacritic: false
}, {
    glyph: 'ʁ',
    name: 'vd uvular fricative',
    resembles: ['r'],
    diacritic: false
}, {
    glyph: 'ɽ',
    name: 'vd retroflex flap',
    resembles: ['r'],
    diacritic: false
}, {
    glyph: 'ʴ',
    name: 'rhotacized',
    resembles: ['r'],
    diacritic: true
}, {
    glyph: 'ʂ',
    name: 'vl retroflex fricative',
    resembles: ['s'],
    diacritic: false
}, {
    glyph: 'ʃ',
    name: 'vl postalveolar fricative',
    resembles: ['s', 'ش'],
    diacritic: false
}, {
    glyph: 'ʈ',
    name: 'vl retroflex plosive',
    resembles: ['t'],
    diacritic: false
}, {
    glyph: 'ʧ',
    name: 'vl postalveolar affricate',
    resembles: ['t'],
    diacritic: false
}, {
    glyph: 'ʉ',
    name: 'close central rounded',
    resembles: ['u'],
    diacritic: false
}, {
    glyph: 'ʊ',
    name: 'lax close back rounded',
    resembles: ['u'],
    diacritic: false
}, {
    glyph: 'ʋ',
    name: 'vd labiodental approximant',
    resembles: ['u'],
    diacritic: false
}, {
    glyph: 'ⱱ',
    name: 'voiced labiodental flap',
    resembles: ['v'],
    diacritic: false
}, {
    glyph: 'ʌ',
    name: 'open-mid back unrounded',
    resembles: ['v'],
    diacritic: false
}, {
    glyph: 'ɣ',
    name: 'vd velar fricative',
    resembles: ['v', 'غ'],
    diacritic: false
}, {
    glyph: 'ɤ',
    name: 'close-mid back unrounded',
    resembles: ['v'],
    diacritic: false
}, {
    glyph: 'ˠ',
    name: 'velarized',
    resembles: ['v'],
    diacritic: true
}, {
    glyph: 'ʍ',
    name: 'vl labial-velar fricative',
    resembles: ['w'],
    diacritic: false
}, {
    glyph: 'ʷ',
    name: 'labialized',
    resembles: ['w'],
    diacritic: true
}, {
    glyph: 'χ',
    name: 'vl uvular fricative',
    resembles: ['x'],
    diacritic: false
}, {
    glyph: 'ʎ',
    name: 'vd palatal lateral',
    resembles: ['y'],
    diacritic: false
}, {
    glyph: 'ʏ',
    name: 'lax close front rounded',
    resembles: ['y'],
    diacritic: false
}, {
    glyph: 'ʑ',
    name: 'vd alveolopalatal fricative',
    resembles: ['z'],
    diacritic: false
}, {
    glyph: 'ʐ',
    name: 'vd retroflex fricative',
    resembles: ['z'],
    diacritic: false
}, {
    glyph: 'ʒ',
    name: 'vd postalveolar fricative',
    resembles: ['z'],
    diacritic: false
}, {
    glyph: 'ʔ',
    name: 'glottal plosive',
    resembles: ['?', 'ء'],
    diacritic: false
}, {
    glyph: 'ʡ',
    name: 'vd epiglottal plosive',
    resembles: ['?'],
    diacritic: false
}, {
    glyph: 'ʕ',
    name: 'vd pharyngeal fricative',
    resembles: ['?', 'ع'],
    diacritic: false
}, {
    glyph: 'ʢ',
    name: 'vd epiglottal fricative',
    resembles: ['?'],
    diacritic: false
}, {
    glyph: 'ˤ',
    name: 'pharyngealized',
    resembles: ['?'],
    diacritic: true
}, {
    glyph: 'ˀ',
    name: 'glottalized',
    resembles: ['?'],
    diacritic: true
}, {
    glyph: '˞',
    name: 'rhotacized',
    resembles: ['~'],
    diacritic: true
}, {
    glyph: '̃',
    name: 'nasalized',
    resembles: ['~'],
    diacritic: true
}, {
    glyph: '̴',
    name: 'velarized or pharyngealized',
    resembles: ['~'],
    diacritic: true
}, {
    glyph: '̰',
    name: 'creaky voiced',
    resembles: ['~'],
    diacritic: true
}, {
    glyph: 'ǀ',
    name: 'dental click',
    resembles: ['|'],
    diacritic: false
}, {
    glyph: 'ǁ',
    name: 'alveolar lateral click',
    resembles: ['|'],
    diacritic: false
}, {
    glyph: 'ǂ',
    name: 'alveolar click',
    resembles: ['|'],
    diacritic: false
}, {
    glyph: 'ǃ',
    name: 'retroflex click',
    resembles: ['!'],
    diacritic: false
}, {
    glyph: 'ˌ',
    name: 'secondary stress',
    resembles: [','],
    diacritic: true
}, {
    glyph: 'ː',
    name: 'length mark',
    resembles: [':'],
    diacritic: true
}, {
    glyph: '˞',
    name: 'rhotacized',
    resembles: ['-'],
    diacritic: true
}, {
    glyph: '̴',
    name: 'velarized or pharyngealized',
    resembles: ['-'],
    diacritic: true
}, {
    glyph: '͜',
    name: 'tie bar below',
    resembles: ['-'],
    diacritic: true
}, {
    glyph: '͡',
    name: 'tie bar above',
    resembles: ['-'],
    diacritic: true
}, {
    glyph: '̠',
    name: 'retracted',
    resembles: ['-'],
    diacritic: true
}, {
    glyph: '̪',
    name: 'dental',
    resembles: ['-'],
    diacritic: true
}, {
    glyph: '̺',
    name: 'apical',
    resembles: ['-'],
    diacritic: true
}, {
    glyph: 'ˌ',
    name: 'secondary stress',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̩',
    name: 'syllabic',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̥',
    name: 'voiceless',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̬',
    name: 'voiced',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̤',
    name: 'breathy voiced',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̟',
    name: 'advanced',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̠',
    name: 'retracted',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̰',
    name: 'creaky voiced',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̪',
    name: 'dental',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̺',
    name: 'apical',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̼',
    name: 'linguolabial',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̻',
    name: 'laminal',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̹',
    name: 'more rounded',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̜',
    name: 'less rounded',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̝',
    name: 'raised',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̞',
    name: 'lowered',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̯',
    name: 'non-syllabic',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̘',
    name: 'avanced tongue root',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '̙',
    name: 'retracted tongue root',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: '͜',
    name: 'tie bar below',
    resembles: ['.'],
    diacritic: true
}, {
    glyph: 'ˈ',
    name: 'primary stress',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: 'ˑ',
    name: 'half-length',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: 'ʼ',
    name: 'ejective',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̊',
    name: 'voiceless',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̚',
    name: 'not audibly released',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̈',
    name: 'centralized',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̽',
    name: 'mid-centralized',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̆',
    name: 'extra-short',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̋',
    name: 'extra high tone',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '́',
    name: 'high tone',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̄',
    name: 'mid tone',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̀',
    name: 'low tone',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '̏',
    name: 'extra low tone',
    resembles: ['\''],
    diacritic: true
}, {
    glyph: '↓',
    name: 'downstep',
    resembles: ['\''],
    diacritic: false
}, {
    glyph: '↑',
    name: 'upstep',
    resembles: ['\''],
    diacritic: false
}, {
    glyph: '↗',
    name: 'global rise',
    resembles: ['\''],
    diacritic: false
}, {
    glyph: '↘',
    name: 'global fall',
    resembles: ['\''],
    diacritic: false
}, {
    glyph: '͡',
    name: 'tie bar above',
    resembles: ['\''],
    diacritic: true
}];
module.exports = exports['default'];

},{}],"react-ipa-input":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _glyphs = require('./glyphs');

var _glyphs2 = _interopRequireDefault(_glyphs);

var _charsets = require('./charsets');

var _charsets2 = _interopRequireDefault(_charsets);

var IpaInput = (function (_Component) {
    _inherits(IpaInput, _Component);

    function IpaInput(props) {
        _classCallCheck(this, IpaInput);

        _get(Object.getPrototypeOf(IpaInput.prototype), 'constructor', this).call(this, props);

        this.state = {
            touch: false,
            value: '',
            suggestions: [],
            selectedSuggestion: -1,
            mouseOverList: false
        };
    }

    _createClass(IpaInput, [{
        key: 'onKeyDown',
        value: function onKeyDown(event) {
            /**
             * Handle suggestions list navigation and selection
             */
            var keyCode = event.keyCode;
            if (this.state.suggestions.length > 1) {
                switch (keyCode) {
                    case 37:
                        // left arrow
                        this.selectSuggestion(this.state.selectedSuggestion - 1);
                        event.preventDefault();
                        break;

                    case 39:
                        // right arrow
                        this.selectSuggestion(this.state.selectedSuggestion + 1);
                        event.preventDefault();
                        break;

                    case 13:
                        // enter
                        this.insertSuggestion(this.state.selectedSuggestion);
                        event.preventDefault();
                        break;
                }

                // number keys 1-9
                if (keyCode >= 49 && keyCode <= 57) {
                    var index = keyCode - 49;
                    if (index <= this.state.suggestions.length) {
                        this.insertSuggestion(index);
                        event.preventDefault();
                    }
                }

                // numpad keys
                if (keyCode >= 97 && keyCode <= 105) {
                    var index = keyCode - 97;
                    if (index <= this.state.suggestions.length) {
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
    }, {
        key: 'onTouchStart',
        value: function onTouchStart(event) {
            /**
             * Activate mobile-friendly 'touch' mode when tapped
             */
            this.setState({
                touch: true
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(event) {
            /**
             * Update suggestions list
             */
            var suggestions = [];
            if (event.target.value.length > 0 && event.target.selectionStart > 0) {
                var inputChar = event.target.value[event.target.selectionStart - 1].toLowerCase();
                suggestions = this.getSuggestions(inputChar);
            }

            this.setState({
                suggestions: suggestions,
                selectedSuggestion: 0,
                value: event.target.value
            });

            if (this.props.onChange !== undefined) {
                this.props.onChange.call(null, event.target.value);
            }
        }
    }, {
        key: 'onFocus',
        value: function onFocus(event) {}
    }, {
        key: 'onBlur',
        value: function onBlur(event) {
            if (!this.state.mouseOverList) {
                this.setState({
                    suggestions: []
                });
            }
        }
    }, {
        key: 'onListMouseOver',
        value: function onListMouseOver(event) {
            this.setState({
                mouseOverList: true
            });
        }
    }, {
        key: 'onListMouseOut',
        value: function onListMouseOut(event) {
            this.setState({
                mouseOverList: false
            });
        }
    }, {
        key: 'getSuggestions',
        value: function getSuggestions(query) {
            var suggestions = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _glyphs2['default'][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var glyph = _step.value;

                    if (glyph.resembles.indexOf(query) !== -1) {
                        if (!this.props.language || _charsets2['default'][this.props.language].indexOf(glyph.glyph) !== -1 || glyph.diacritic) {
                            suggestions.push(glyph);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return suggestions;
        }
    }, {
        key: 'selectSuggestion',
        value: function selectSuggestion(index, loop) {
            var _this = this;

            var newIndex = Math.max(0, Math.min(this.state.suggestions.length - 1, index));
            if (loop && index < 0) {
                newIndex = this.state.suggestions.length - 1;
            } else if (loop && index > this.state.suggestions.length - 1) {
                newIndex = 0;
            }

            var oldValue = this.state.value;
            var caretPos = this.refs.input.selectionEnd;
            var newValue = oldValue.slice(0, caretPos - 1) + this.state.suggestions[newIndex].glyph + oldValue.slice(caretPos, oldValue.length);

            this.setState({
                value: newValue,
                selectedSuggestion: newIndex
            }, function () {
                _this.refs.input.setSelectionRange(caretPos - 1, caretPos);
            });
        }
    }, {
        key: 'insertSuggestion',
        value: function insertSuggestion(index) {
            var _this2 = this;

            var caretPos = this.refs.input.selectionEnd;
            var oldValue = this.state.value;
            var newValue = oldValue.slice(0, caretPos - 1) + this.state.suggestions[index].glyph + oldValue.slice(caretPos, oldValue.length);

            this.setState({
                value: newValue,
                suggestions: [],
                selectedSuggestion: -1,
                mouseOverList: false
            }, function () {
                _this2.refs.input.focus();
                _this2.refs.input.setSelectionRange(caretPos, caretPos);
            });

            if (this.props.onChange !== undefined) {
                this.props.onChange.call(null, newValue);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var newState = {};

            if (newProps.value !== this.state.value) {
                newState.value = newProps.value;

                if (newProps.value.length < this.state.value.length) {
                    newState.suggestions = [];
                    newState.selectedSuggestion = -1;
                }
            }

            if (newProps.language !== this.props.language) {
                newState.suggestions = [];
                newState.selectedSuggestion = -1;
            }

            this.setState(newState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var styles = {
                container: {
                    position: 'relative'
                },
                input: {
                    position: 'relative',
                    width: '100%',
                    zIndex: 2
                },
                list: {
                    position: 'absolute',
                    left: 0,
                    top: '100%',
                    listStyle: 'none',
                    zIndex: 1
                },
                item: {
                    display: 'inline-block'
                },
                itemSelected: {
                    outline: '-webkit-focus-ring-color auto 5px'
                }
            };

            return _react2['default'].createElement(
                'div',
                { className: 'IpaInput', style: styles.container },
                _react2['default'].createElement('input', { type: 'text',
                    ref: 'input',
                    className: 'IpaInput__input',
                    style: styles.input,
                    value: this.state.value,
                    onKeyDown: this.onKeyDown.bind(this),
                    onTouchStart: this.onTouchStart.bind(this),
                    onChange: this.onChange.bind(this),
                    onFocus: this.onFocus.bind(this),
                    onBlur: this.onBlur.bind(this) }),
                _react2['default'].createElement(
                    'ul',
                    { className: (0, _classnames2['default'])({
                            IpaInput__list: true,
                            touch: this.state.touch
                        }),
                        style: styles.list,
                        onMouseOver: this.onListMouseOver.bind(this),
                        onMouseOut: this.onListMouseOut.bind(this) },
                    this.state.suggestions.map(function (suggestion, index) {
                        var glyph = suggestion.glyph;
                        var name = suggestion.name;
                        var diacritic = suggestion.diacritic;

                        return _react2['default'].createElement(
                            'li',
                            { key: 'IpaSuggestion' + index,
                                className: (0, _classnames2['default'])({
                                    IpaInput__item: true,
                                    selected: index === _this3.state.selectedSuggestion }),
                                style: _merge2['default'].recursive(true, styles.item, index === _this3.state.selectedSuggestion ? styles.itemSelected : {}),
                                onClick: _this3.insertSuggestion.bind(_this3, index),
                                onMouseOver: _this3.selectSuggestion.bind(_this3, index) },
                            _this3.props.showNumber && _react2['default'].createElement(
                                'span',
                                { className: 'IpaInput__item__number' },
                                index + 1
                            ),
                            _react2['default'].createElement(
                                'span',
                                { className: 'IpaInput__item__glyph' },
                                glyph
                            ),
                            _this3.props.showName && _react2['default'].createElement(
                                'span',
                                { className: 'IpaInput__item__name' },
                                name
                            )
                        );
                    })
                )
            );
        }
    }]);

    return IpaInput;
})(_react.Component);

IpaInput.propTypes = {
    language: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    showName: _react.PropTypes.bool,
    showNumber: _react.PropTypes.bool,
    value: _react.PropTypes.string
};

IpaInput.defaultProps = {
    language: '',
    showName: true,
    showNumber: true,
    value: ''
};

exports['default'] = IpaInput;
module.exports = exports['default'];

},{"./charsets":2,"./glyphs":3,"classnames":undefined,"merge":1,"react":undefined}]},{},[]);
