var rotten = require('../index')('mars')
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*()-+=_,'

for (i= 0; i<1000; i++) {
	var random = alphabet.split('')
	random.sort(function () {
		return Math.random() - 0.5
	})
	let randomString = random.join('')

	var ec = rotten.encode(randomString)
	console.log('before:', ec)

	var dc = rotten.decode(ec)
	console.log('after:', dc)
	if (randomString === dc) {
		console.log('true')
	} else {
		console.log('==============================================================false')
	}
}

var code = rotten.encode('mars森')
console.log(code)
console.log(rotten.decode(code))