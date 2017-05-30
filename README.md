encrypt text with one key

INSTALL
```
npm install rotten-encryption2 -S
```

 ### USAGE
 ```
 var rotten = require('rotten-encryption2')('mars')
 var code = rotten.encode('mars森') // '^R!~nExn3An3E'
 rotten.decode(code) // 'mars森'
 ```



 ### thanks for the repo give me idea

 https://github.com/zachflower/rotten-encryption