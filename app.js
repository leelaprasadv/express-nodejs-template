const express = require("express");
const httpContext = require('express-http-context');

const SMW = require("swagger-express-mw");
const SUI = require("swagger-tools/middleware/swagger-ui")

const requestid = require("./middlewares/requestid.middleware")
const logger = require("./utils/logger")

const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(httpContext.middleware);
app.use(requestid)

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function errorHandler (err, req, res, next) {
  res.status(500).send('Error!')
}


function appInit(app, rootDir) {
  return new Promise((resolve, reject) => {
      const swaggerConfig = {
        appRoot: rootDir
      }
      
      SMW.create(swaggerConfig, function(err, se) {
        if(err){
          throw err;
        }
        try{
          se.register(app);
          const options = {
            swaggerUi: se.runner.config.swagger.docEndpoints.ui || 'docs', //swagger ui web page,
            apiDocs: se.runner.config.swagger.docEndpoints.raw || 'swagger' //api document in json format
          };
  
          app.use(SUI(se.runner.swagger, options))
          app.set('productPath', se.runner.swagger.basePath);

          app.use(logErrors)
          app.use(errorHandler)
        } catch (error) {
            reject(error);
        }
        resolve(app)
      }, (reason) => {
        console.error(reason);
        reject('Failed to start');
      });
  });
}

module.exports = {app, appInit}