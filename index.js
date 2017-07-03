// define the alphabet
// var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+-=,.?|":;<>'
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
// shifts the alphabet over by n, returns resulting array
function sortAlphabetWithKey(key) {
	var tmp_alphabet = alphabet.split('')
	var tmp_key = key.split('')
	for (let i = alphabet.length; i; i--) {
		if (i % 2) {
			if (tmp_key[i % key.length] > tmp_alphabet[i]) {
				[tmp_alphabet[i - 1], tmp_alphabet[i]] = [tmp_alphabet[i], tmp_alphabet[i - 1]];
			}
		} else {
			if (tmp_key[i % key.length] < tmp_alphabet[i]) {
				[tmp_alphabet[i - 1], tmp_alphabet[i]] = [tmp_alphabet[i], tmp_alphabet[i - 1]];
			}
		}
	}
	return tmp_alphabet.join('')
}

// remaps a string from one character array to another
function remap(input, from, to) {
	var input_characters = input.split('');
	var remapped_string = [];

	for ( var i = 0; i < input_characters.length; i++ ) {
		var character = input_characters[i];
		if ( to.indexOf(character) !== -1 ) {
			remapped_string.push(to[from.indexOf(character)]);
		} else {
			remapped_string.push(character);
		}
	}
	return remapped_string.join('');
}

module.exports = function initWithKey(key) {
	key = key || ' '
	var sorted_alphabet = sortAlphabetWithKey(key)
	return {
		key: key,
		encode: function (text) {
			text = encodeURI(text)
			return remap(text, alphabet, sorted_alphabet);
		},
		decode: function (text) {
			var decodeText = remap(text, sorted_alphabet, alphabet);
			return decodeURI(decodeText)
		}
	}
}