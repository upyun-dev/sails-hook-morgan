# sails-hook-morgan

[Sails.js hook](https://next.sailsjs.com/documentation/concepts/extending-sails/hooks) for using [morgan](https://www.npmjs.com/package/morgan).

[![NPM version][npm-image]][npm-url]
## Installation

```sh
$ npm install sails-hook-morgan --save
```

## Configuration

`config/morgan.js`

```javasctipt
module.exports.morgan = {
  "format": "common"
};
```

Consult [morgan documentation](https://www.npmjs.com/package/morgan#morganformat-options) for more `format` you can set, the default `format` is `"dev"`.

[npm-url]: https://www.npmjs.com/package/sails-hook-morgan
[npm-image]: https://img.shields.io/npm/v/sails-hook-morgan.svg
