const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 443,
    open: true,
    hot: true,
  },
};


const WebSocket = require('ws');

// Create a WebSocket server instance and specify the port
const wss = new WebSocket.Server({ port: 443 });

// Event listener for WebSocket connections
wss.on('connection', function connection(ws) {
  console.log('WebSocket connection established.');

  // Event listener for messages received from clients
  ws.on('message', function incoming(message) {
    console.log('Received message:', message);
  });

  // Event listener for WebSocket connection closure
  ws.on('close', function close() {
    console.log('WebSocket connection closed.');
  });
});
