
[![npm](https://img.shields.io/npm/v/rotten-encryption2.svg?style=flat-square)](https://www.npmjs.com/package/rotten-encryption2)


![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/320px-Caesar_cipher_left_shift_of_3.svg.png)


encrypt text with one key

INSTALL
```
npm install rotten-encryption2 -S
```

 ### USAGE
 ```
var rotten = require('rotten-encryption2')('mars')
var code = rotten.encode('mars森') // '_>5%1tm1Tp1Tt'
rotten.decode(code) // 'mars森'
 ```

```
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+-=,.?|":;<>
var rotten = require('rotten-encryption2')('mars')
```


if use wan't to no special code you can
```
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890
var rotten = require('rotten-encryption2')('mars', false)
var code = rotten.encode('mars森') // 'P0S8%Fq%JX%JF'
rotten.decode(code) // 'mars森'
```

if you want custom code you can pass three params, this will ignore second param
```
// 1234567890
var rotten = require('rotten-encryption2')('mars', false, 'abcdefghijklmnopqrstuvwxyzABCDEFG1234567890')
var code = rotten.encode('mars森') // 'E0nD%tq%eh%et'
rotten.decode(code) // 'mars森'
```

 ### thanks for the repo give me idea

 https://github.com/zachflower/rotten-encryption