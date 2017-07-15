// define the alphabet
// var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+-=,.?|":;<>'
// shifts the alphabet over by n, returns resulting array


module.exports = function initWithKey(key, isUgly) {
	key = key || ' '
	isUgly = isUgly === false ? false : true

	var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
	if (isUgly) {
		alphabet += '~!@#$%^&*()_+-=,.?|":;<>'
	}

	function sortAlphabetWithKey(key) {
		var tmp_alphabet = alphabet.split('')
		var tmp_key = key.split('')
		for (var index = alphabet.length; index > 0; index--) {
			let i = index * index % alphabet.length
			if (tmp_key[i % key.length] > tmp_alphabet[i]) {
				var tmp =  tmp_alphabet[index]
				tmp_alphabet[index] = tmp_alphabet[i]
				tmp_alphabet[i] = tmp
			} else {
				var tmp =  tmp_alphabet[index]
				tmp_alphabet[index] = tmp_alphabet[i]
				tmp_alphabet[i] = tmp
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