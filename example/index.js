var rotten = require('../index').initWithKey('ac')

var ec = rotten.encode('woaiwodejia,woaiwodeguo')
console.log('ec', ec)

var dc = rotten.decode(ec)
console.log('dc', dc)