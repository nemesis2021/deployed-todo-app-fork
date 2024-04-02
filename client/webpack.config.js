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

const ws = new WebSocket('wss://deployed-todo-app-fork-kpn5t.kinsta.app');

ws.on('error', (error) => {
  console.error('WebSocket connection error:', error.message);
  // Handle the SSL error here
});

ws.on('open', () => {
  console.log('WebSocket connection established successfully.');
});

ws.on('close', () => {
  console.log('WebSocket connection closed.');
});
