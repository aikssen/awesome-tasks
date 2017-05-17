const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const API_DOMAIN = process.env.API_DOMAIN = 'https://www.googleapis.com/tasks/v1';
const CLIENT_ID = process.env.CLIENT_ID = '401217802230-66d4q5cljbod3gu8f9ejkupsfia3opon.apps.googleusercontent.com';
const DISCOVER_DOCS = process.env.DISCOVER_DOCS = 'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest';
const SCOPE_1 = process.env.SCOPE_1 = 'https://www.googleapis.com/auth/tasks.readonly';
const SCOPE_2 = process.env.SCOPE_2 = 'https://www.googleapis.com/auth/tasks';

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    // extracts embebed css from js files into external files
    new ExtractTextPlugin('[name].css'),
    // define environment variables that can be referenced within the application
    new webpack.DefinePlugin({
      'process.env': { 
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV),
        'API_DOMAIN': JSON.stringify(API_DOMAIN),
        'CLIENT_ID': JSON.stringify(CLIENT_ID),
        'DISCOVER_DOCS': JSON.stringify(DISCOVER_DOCS),
        'SCOPE_1': JSON.stringify(SCOPE_1),
        'SCOPE_2': JSON.stringify(SCOPE_2)
      }
    }),
  ],
  devServer: { // http dev server, keeps all bundles in memory
    historyApiFallback: true,
    stats: 'minimal',
    https: false
  }
});
