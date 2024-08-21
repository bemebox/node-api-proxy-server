# node-api-proxy-server

Node API Proxy Server is a API Proxy Server, built with Node Js framework.
Aggregate multiple backend services (health check, get token, etc...) under the same endpoint.

## Version

1.0.0

## Resources

- [NodeJs](https://nodejs.org/docs/latest/api/)

## Getting Started

These instructions will guide you to copy the project from the repository and run it.

### Project Requirements

For the project run you need to have installed:

- NodeJs
- **dotenv:** to manage environment variables.
- **cors:** to enable Cross-Origin Resource Sharing (CORS).
- **express:** is the most popular Node.js frameworks for building APIs.
- **axios:** is a promise-based HTTP client for making requests to APIs
- **nodemon:** to automatically restarts your Node.js application when file changes are detected in development mode.

### Dependencies Installation

Basically configure package dependencies for the project:

- **dotenv:** to manage environment variables.
```sh
npm install dotenv
```
- **cors:** to enable Cross-Origin Resource Sharing (CORS).
```sh
npm install cors
```
- **express:** is the most popular Node.js frameworks for building APIs.
```sh
npm install express
```
- **axios:** is a promise-based HTTP client for making requests to APIs
```sh
npm install axios
```
- **nodemon:** to automatically restarts your Node.js application when file changes are detected in development mode.
```sh
npm install -D nodemon
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run in production

```sh
npm run start
```

## Server

Run the API Proxy Server application on the server

- [Node API Proxy Server](http://localhost:5000/api/v1/health)

## Authors

- **BEOM &copy; 2024**