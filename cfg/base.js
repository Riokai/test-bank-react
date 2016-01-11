'use strict';
let path = require('path');
let port = 8000;
let srcPath = path.join(__dirname, '/../src');
let publicPath = '/assets/';
let additionalPaths = [];
module.exports = {
  additionalPaths: additionalPaths,
  port: port,
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    // noInfo: false,
    noInfo: true,
    stats: { colors: true }
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    alias: {
      actions: srcPath + '/actions/',
      components: srcPath + '/components/',
      sources: srcPath + '/sources/',
      stores: srcPath + '/stores/',
      styles: srcPath + '/styles/',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },
      // { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      // { test: /\.eot$/,  loader: "file-loader" },
      // { test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      {
        // test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      //bootstrap
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},

      //font-awesome
      // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=8192&minetype=application/font-woff" },
      // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer')({
        browsers: ['last 2 versions', 'ie >= 8']
      })
    ];
  }
};
