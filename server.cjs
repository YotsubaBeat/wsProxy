const encodeURL = import('./respond.mjs');
const http = require('http');
const express = require('express');
const path = require('path');
const url = require('url');
const fs = require('fs');
const ws = require('ws');
const app = express();
const expressWs = require('express-ws')(app);
const router = express.Router();
const filePath = path.join(__dirname+HTTP);
import('./wss.config.mjs').then(({ HTTP, PORT }) => {
  app.listen(PORT, () => {
    console.log((new Date())+" | Server is listening on port "+PORT)
  });
  app.use('/', function(req, res) {
    res.sendFile(filePath);
  });
  app.get('/', function(req, res) {
    res.sendFile(filePath);
  });
});
router.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
        // Logs input received from client
        console.log((new Date())+" | Received input from client: ["+msg+"]");
        // Registers the service worker
        global.navigator.serviceWorker.register('./sw.cjs',{ 
          scope: __uv$config.prefix
        });
        // Converts input to a working URL
        if (!isUrl(msg)) {
          let url = 'https://www.google.com/search?q=' + msg;
        } else if (isUrl(msg)) { 
          let url = 'https://' + msg;
        };
        function isUrl(val = val.trim()) {
          if (/^http(s?):\/\//.test(val) || val.includes('.')) 
            return true || false;
        };
        // Encodes the websocket
        encode = __uv$config.prefix + __uv$config.encodeUrl(url); 
        // Sends the encoded websocket
        ws.send(encode);
    });
});
