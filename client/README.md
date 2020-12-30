# Getting Started with client (WebUI)

Project is based on the [Create React App](https://github.com/facebook/create-react-app).

## Requirements

If you want to build this application on the host, then [npm](https://www.npmjs.com) should be installed.\
For this purpose you can use [miniconda](https://docs.conda.io/en/latest/miniconda.html).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [https://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Container

Docker container with apache.

### SSL certificates

If you do not have certificates, you can generate them in a separate folder:

```shell script
mkdir certs && cd certs
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout apache-selfsigned.key -out apache-selfsigned.crt
openssl dhparam -out dhparam.pem 2048
```

### Build

```shell script
docker build -t webui .
```

### Run

```shell script
docker run -p ${HOST_HTTP_PORT}:80 -p ${HOST_HTTPS_PORT}:443 -v ${YOUR_CERTS_LOCATION}:/usr/local/apache2/certs -e HTTPS_SERVER_ADDR=${HTTPS_SERVER_ADDR} -e SERVER_NAME=${SERVER_NAME} webui
```

`${SERVER_NAME}` and `${HOST_HTTP_PORT}` and `${HOST_HTTPS_PORT}` - server name, where target http and https ports
should be mapped.

`${YOUR_CERTS_LOCATION}` - location of the ssl certificates on your host machine.

`${HTTPS_SERVER_ADDR}` - path of https server (it will redirect http requests to this address). For example: https://dnd4.ru or https://127.0.0.1:8081.
