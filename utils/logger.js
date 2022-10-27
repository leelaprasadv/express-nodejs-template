const { createLogger, transports ,format, config} = require('winston');
const httpContext = require('express-http-context');

const options = {
  file: {
    filename: './logs/app.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};


const myformatter = format((info) => {
  let dataContext = info[Symbol.for('splat')] ? info[Symbol.for('splat')][0] : {}
  info.level = info.level.toUpperCase()
  info.activityId = httpContext.get("activityId") || ""
  return info
})();


const _logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  levels: config.npm.levels,
  defaultMeta: {
    service: 'admin-service',
  },
  format: format.combine(
    format.timestamp(),
    myformatter,
    format.json(),
  ),
  transports: [
    // new transports.File(options.file),
    new transports.Console(options.console)
  ],
  exitOnError: false
})


module.exports = _logger