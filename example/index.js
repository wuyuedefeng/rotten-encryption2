// var rotten = require('../index')('mars')
// var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*()-+=_,'
//
// for (i= 0; i<1000; i++) {
// 	var random = alphabet.split('')
// 	random.sort(function () {
// 		return Math.random() - 0.5
// 	})
// 	let randomString = random.join('')
//
// 	var ec = rotten.encode(randomString)
// 	console.log('before:', ec)
//
// 	var dc = rotten.decode(ec)
// 	console.log('after:', dc)
// 	if (randomString === dc) {
// 		console.log('true')
// 	} else {
// 		console.log('==============================================================false')
// 	}
// }
//
// var code = rotten.encode('abc森')
// console.log(code)
// console.log(rotten.decode(code))

var rotten = require('../index')('mars', false, 'abcdefghijklmnopqrstuvwxyzABCDEFG1234567890')
var code = rotten.encode('mars🙂森') // 'E0nD%va%bv%bb%73%tq%eh%et'
console.log(code)
result = rotten.decode(code) // 'mars森'
console.log(result)