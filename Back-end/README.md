# Backend REST API for the clicar web app

## dependencies

- Node v12.x or earlier
- MongoDB: v4.x or earlier
- Typescript
- ts-node

## configurations

The server port is found in the index.ts file but you can add a PORT in your env and it will be used as the server port.
The MongoDB URI and the JWT passphrase is configured in the config/default.json, if you want to add some config for the backend, you can add them to this file or add a file per environment.

## Run

launch the following commands for running the api:

- run: npm start
- watch: npm run dev
- test: npm run unit:testing
 