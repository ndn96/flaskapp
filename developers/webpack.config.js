// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');

// module.exports = {
//   entry: {
//     entry1: './src/js/entry1.js',
//     entry2: './src/js/entry2.js',
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: 'babel-loader', // Use Babel for transpilation if needed
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/html/index.html',
//       filename: 'index.html',
//       minify: {
//         removeComments: true,
//         collapseWhitespace: true,
//       },
//       chunks: ['entry1'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/html/other.html',
//       filename: 'other.html',
//       minify: {
//         removeComments: true,
//         collapseWhitespace: true,
//       },
//       chunks: ['entry2'],
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//     }),
//   ],
//   optimization: {
//     minimizer: [new TerserWebpackPlugin()],
//   },
// };
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    main: {
      import: ['./src/js/entry1.js', './src/js/entry2.js'],
      filename: 'bundle.js',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Use Babel for transpilation if needed
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  },
};
