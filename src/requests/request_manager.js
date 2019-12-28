const express = require('express');
const app = express();

let server;

exports.module.configure = (config, routes) => {
    routes.forEach(route => {
        app[route.method](route.path, route.listener);
    });
}

exports.module.startServer = (port, listener) => {
    server = app.listen(port, listener);
}

exports.module.stopServer = () => {

}