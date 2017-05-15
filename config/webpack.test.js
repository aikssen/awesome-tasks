const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('/', 'tsconfig.json') }
          } ,
          { loader: 'angular2-template-loader' }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      { // handle and ignore those files
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      { // handle and ignore those files
        test: /\.scss$/, 
        exclude: helpers.root('src', 'application'),
        loader: 'null-loader'
      },
      {
        test: /\.scss$/, 
        include: helpers.root('src', 'application'),
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    // Workaround for angular/angular#11580
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src')
    )
  ]
}
