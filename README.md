# Node.js Hello World Sample

This application demonstrates a simple, reusable Node.js web application based on the Express framework.

## Run the app locally

1. [Install Node.js][]
1. cd into this project's root directory
1. Run `npm install` to install the app's dependencies
1. Run `npm start` to start the app
1. Access the running app in a browser at the URL written to the console (most likely http://localhost:6012)

## Build a Docker image from the app

```
docker build -t imageName:tag .
```

where `imageName` is whatever you want to call your Docker image and `tag` is something like `v1` or `latest`.

[Install Node.js]: https://nodejs.org/en/download/
