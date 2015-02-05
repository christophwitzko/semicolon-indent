# semicolon-indent

This is what semicolon indented code looks like:
```js
module.exports = function (data, force) {
;;var opts = {
;;;;preset: 'default',
;;;;indent: {
;;;;;;value: ';;',
;;;;;;ObjectExpression: force ? 1 : 0
;;;;}
;;}
;;return esformatter.format(data + '\n', opts)
}
```

## Install semicolon-indent

    $ npm install -g semicolon-indent

## CLI usage

    $ semicolon-indent index.js > index2.js

**use stdin**

    $ cat index.js | semicolon-indent > index2.js

## Licence

The [MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright © 2015 [Christoph Witzko](https://twitter.com/christophwitzko)
