const logger = require("../utils/logger");

const logRequestMiddleware = function (req, res, next) {
    req.logger = logger
    // Don't log health checks
    if (req.originalUrl.toLowerCase() === `/api/server/v1/health`) {
        next();
        return;
    }

    const startTime = performance.now()
    const logContext = {
        'url': req.originalUrl.toLowerCase()
    };
    req.logger.info('Start Request', logContext);

    // Response.end is the last method called before putting the bytes on the wire
    const originalReqEnd = res.end;

    // const createLog = (req, res, next) => {
    //     res.on("finish", function() {
    //       console.log(req.method, decodeURI(req.url), res.statusCode, res.statusMessage);
    //     });
    //     next();
    //   };

    res.end = function (...args) {
        const endTime = performance.now()
        logContext.durationInMs = (endTime - startTime).toPrecision(3);
        logContext.statusCode = res.statusCode;
        req.logger.info('End Request', logContext);
        originalReqEnd.apply(res, args);
    };
    next();
};

module.exports = function create() {
    return function (ctx, next) {
        logRequestMiddleware(ctx.request, ctx.response, next);
    };
};