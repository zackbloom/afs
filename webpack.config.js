const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: 'raw-loader',
      },
    ],
  },
};

