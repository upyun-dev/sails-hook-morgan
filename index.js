const morgan = require('morgan');

module.exports = function (sails) {
  return {
    defaults: {
      __configKey__: {
        format: 'dev'
      }
    },
    routes: {
      before: {
        '*': morgan(sails.config[this.configKey].format)
      }
    }
  };
};
