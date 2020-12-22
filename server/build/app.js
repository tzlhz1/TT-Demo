"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('hello');
}).listen(8888);
console.log('启动1');
