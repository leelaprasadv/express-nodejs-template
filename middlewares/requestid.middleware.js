const uuid4 = require("uuid");
const httpContext = require('express-http-context');

const requestIdMiddleware = function(req, res, next){
  const requestIdHeader = "x-request-id"
  const requestId = req.header(requestIdHeader) || uuid4.v4();
  httpContext.set("activityId", requestId)
  res.set(requestIdHeader, requestId)
  // call next middleware in the stack
  next();
}

// module.exports = function create() {
//   return function (ctx, next) {
//       assignIdMiddleware(ctx.request, ctx.response, next);
//   };
// };

module.exports = requestIdMiddleware