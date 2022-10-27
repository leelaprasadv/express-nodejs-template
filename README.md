# express-nodejs-template

express-nodejs-template is a sample NodeJS (ExpressJS) based backend service implementation.

* Support Swagger API docs (swagger-express-mw + swagger-api-tools). One can also replace or implement it with `swagger-express-ui` as well.
* Logging with popular winston.
* Request tracing with request id and `x-request-id`.

Next steps:
* Support with docker & docker-compose

# Setup

* Run `npm install`
* Run `npm run dev:server` or `npm start`
* Server is running on http://localhost:3010
* Swagger page will be http://localhost:3010/api/server/v1

# Folder structure

```sh
.
├── LICENSE
├── README.md
├── api
│   ├── controllers
│   │   ├── health.controller.js
│   │   └── test.controller.js
│   └── swagger
│       └── swagger.yaml
├── app.js
├── config
│   └── default.yaml
├── middlewares
│   ├── log.request.middleware.js
│   └── requestid.middleware.js
├── package-lock.json
├── package.json
├── server.js
└── utils
    └── logger.js
```
