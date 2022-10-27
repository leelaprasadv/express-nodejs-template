# express-nodejs-template
express-nodejs-template


# Setup

* Run `npm install`
* Run `npm run dev:server` or `npm start`
* Server is running on http://localhost:3010
* swagger page will be http://localhost:3010/api/server/v1

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