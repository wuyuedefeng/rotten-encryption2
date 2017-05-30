encrypt text with one key

INSTALL
```
npm install rotten-encryption2 -S
```

 ### USAGE
 ```
 var rotten = require('rotten-encryption2')('mars')
 var code = rotten.encode('abc') // 'L,_'
 rotten.decode(code) // 'abc'
 ```



 ### thanks for the repo

 https://github.com/zachflower/rotten-encryption