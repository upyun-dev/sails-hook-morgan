# sails-hook-morgan

[Sails.js hook](https://next.sailsjs.com/documentation/concepts/extending-sails/hooks) for using [morgan](https://www.npmjs.com/package/morgan).

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
