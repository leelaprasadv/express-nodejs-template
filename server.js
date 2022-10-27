
const http = require("http")
const logger = require("./utils/logger")
const {appInit, app} = require("./app")

const PORT = process.env.PORT || 3010;

appInit(app, __dirname)

const gracefulShutdown = function () {
  logger.info('Received kill signal. Shutting down service');
  process.exit();
};

//Listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);

//Listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);


const server = http.createServer(app)
server.listen(PORT, () => {logger.info(`Server started on https://localhost:${PORT}`)});
