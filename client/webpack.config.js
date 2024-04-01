const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 443,
    open: true,
    hot: true,
  },
};
