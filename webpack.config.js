const path = require('path');
const webpack = require('webpack');
const jquery = require("jquery");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProd = process.env.NODE_ENV === 'production'; //true or false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: "/public"
});
const cssConfig = isProd ? cssProd : cssDev;


module.exports = {
  entry: [
    "font-awesome/scss/font-awesome.scss",
    "./src/app.js"
  ],
  // devtool: 'source-map',
  output: {
      path: path.resolve(__dirname, 'public'),
      // publicPath: '/public/',
      filename: "js/[name].bundle.js"
  },
  devServer: {
      contentBase: path.join(__dirname, 'public'),
      // publicPath : '/',
      compress: isProd,
      port: 8081,
      hot: true,
      // starts: "errors-only",
      // open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node-modules/,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader'
        ]
      },

      {
        test: [/\.css$/, /\.scss$/],
        use: cssConfig,
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home Page',
      hash: true,
      filename: 'index.html',
      template: './src/index.html',
    }),

    new ExtractTextPlugin({
      filename: "/css/[name].css",
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
    })
  ]
};