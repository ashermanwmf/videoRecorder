'use strict';

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, `client/public`);
const APP_DIR = path.resolve(__dirname, `client/app`);

module.exports = {
  entry: APP_DIR + '/Routes.jsx',
  output:{
    path:BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        //tell webpack to use jsx-loader for all *.jsx files
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};