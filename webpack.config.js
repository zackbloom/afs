const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'worker.js'
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

