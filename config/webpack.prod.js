const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_DOMAIN = process.env.API_DOMAIN = 'https://www.googleapis.com/tasks/v1';
const CLIENT_ID = process.env.CLIENT_ID = '401217802230-66d4q5cljbod3gu8f9ejkupsfia3opon.apps.googleusercontent.com';
const DISCOVER_DOCS = process.env.DISCOVER_DOCS = 'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest';
const SCOPE_1 = process.env.SCOPE_1 = 'https://www.googleapis.com/auth/tasks.readonly';
const SCOPE_2 = process.env.SCOPE_2 = 'https://www.googleapis.com/auth/tasks.readonly';

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].min.js',
    chunkFilename: 'js/[id].[hash].chunk.js'
  },
  plugins: [
    // stops the build if there is an error.
    new webpack.NoEmitOnErrorsPlugin(),
    // uglify and minification (.min)
    new webpack.optimize.UglifyJsPlugin({
      mangle: { keep_fnames: true }, // https://github.com/angular/angular/issues/10618
      compress: { warnings: false },
      comments: false
    }),
    // extracts embedded css as external file
    new ExtractTextPlugin('css/[name].[hash].css'),
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
    // override options of certain loaders
    new webpack.LoaderOptionsPlugin({
      htmlLoader: { minimize: false } // workaround for ng2
    })
  ]
});
