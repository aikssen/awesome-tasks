const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
  entry: { // entry files to be bundled
    'polyfills': './src/application/polyfills.ts', // needed to run Angular in browsers
    'vendor': './src/application/vendor.ts', // third-party dependencies
    'app': './src/application/main.ts' // application code
  },
  resolve: { // kind of files to be handled
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { // transpile the Typescript code to ES5
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('/', 'tsconfig.json') }
          } ,
          { // loads angular components' template and styles
            loader: 'angular2-template-loader'
          }
        ]
      },
      { // for component templates
        test: /\.html$/,
        loader: 'html-loader'
      },
      { // handle images
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file-loader?name=images/[name].[hash].[ext]'
      },
      { // handle fonts
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]'
      },
      { // global styles
        test: /\.scss$/, 
        // include: helpers.root('src', 'styles'),
        exclude: helpers.root('src', 'application'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
        })
      },
      { // handles component-scoped styles (styleUrls)
        test: /\.scss$/,
        include: helpers.root('src', 'application'),
        // exclude: /node_modules/,
        // exclude: [/node_modules/, /src\/styles/], 
        loaders:[
          'to-string-loader', // hanlde images inside .sass files
          ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader', 'sass-loader'],
          })
        ]
      }
    ]
  },
  plugins: [
    // Workaround for angular/angular#11580
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src')
    ),
    // isolated shared dependencies from files
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    // inject js. css and links into index.html, generate <script> and <link>
    new HtmlWebpackPlugin({
      template: 'src/views/index.html'
    })
  ]
};
