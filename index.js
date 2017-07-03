// define the alphabet
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+-=,.?|":;<>'

// shifts the alphabet over by n, returns resulting array
function sortAlphabetWithKey(key) {
	var index = -1
	var tmp_alphabet = alphabet.split('').sort(function () {
		index++
		if (index % 2 === 0) {
			return key[index % key.length] >= alphabet[index] ? 1 : -1
		}
		return key[index % key.length] < alphabet[index]
	})
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