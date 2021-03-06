# string-to-jsdoc-comment

> Turns a string into a JSDoc comment

[![Build Status](https://travis-ci.com/gr2m/string-to-jsdoc-comment.svg?branch=master)](https://travis-ci.com/gr2m/string-to-jsdoc-comment)
[![Greenkeeper](https://badges.greenkeeper.io/gr2m/string-to-jsdoc-comment.svg)](https://greenkeeper.io/)

```js
const { stringToJsdocComment } = require('string-to-jsdoc-comment')

const comment = stringToJsdocComment('Here is some description.')
```

`comment` is now

```js
/**
 * Here is some description.
 */
```

## Credit

This method was extracted from [`@octokit/rest`](https://github.com/octokit/rest.js/blob/6c32515532b41a5c762e31568ed148e867a81647/scripts/generate-types.js#L63-L65). The original method was implemented by [@gimenete](https://github.com/gimenete).

## License

[ICS](LICENSE)
