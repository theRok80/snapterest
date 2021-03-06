const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: './source/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'snapterest.js',
  },
  plugins: [
      new NodemonPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['transform-class-properties'],
            },
          },
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
      }
    ]
  }
};