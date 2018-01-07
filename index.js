const morgan = require('morgan');

module.exports = function (sails) {
  let logger = function(req, res, next) {
    return next();
  };
  return {
    initialize: function(cb) {
      if (sails.config[this.configKey].enabled) {
        logger = morgan('dev');
      }
      return cb();
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
