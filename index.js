// define the alphabet
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*()-+=_,'
var sorted_alphabet = ''

// shifts the alphabet over by n, returns resulting array
function sortAlphabetWithKey(key) {
	var index = -1
	var tmp_alphabet = alphabet.split('').sort(function () {
		index++
		if (index % 2 === 0) {
			return key[index % key.length] > alphabet[index]
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

module.exports.initWithKey = function(key) {
	sorted_alphabet = sortAlphabetWithKey(key)
	return this
}

// encode a given string using a give Caesar shift.
exports.encode = function(input) {
	return remap(input, alphabet, sorted_alphabet);
};

// decode a given string using a give Caesar shift.
exports.decode = function(input) {
	return remap(input, sorted_alphabet, alphabet);
};