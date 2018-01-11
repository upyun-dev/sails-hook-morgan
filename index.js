const morgan = require('morgan');

module.exports = function (sails) {
  let logger = function(req, res, next) {
    return next();
  };
  return {
    initialize: function(cb) {
      if (sails.config[this.configKey].enabled) {
        logger = morgan(sails.config[this.configKey].format);
      }
      return cb();
    },
    defaults: {
      __configKey__: {
        enabled: false,
        format: 'dev'
      }
    },
    routes: {
      before: {
        '*': function(req, res, next) {
          logger(req, res, next);
        }
      }
    }
  };
};
