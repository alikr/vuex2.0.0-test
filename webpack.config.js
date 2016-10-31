/*!
 * @author landou
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var evn=process.env.NODE_ENV;

const config = {
  entry: {
    'main':'./src/standalone/main',
    'comps':'./src/comps/main'
  },
  output: {
    path: './dist',
    filename: '[name]-bundle.js',
    publicPath: './'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title : "vuex-tutorial",
      template: path.join(__dirname,'/src/standalone/index.html'),
      filename:path.join(__dirname,'/dist/index.html'),
      excludeChunks: ['comps'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      title : "vuex-tutorial",
      template: path.join(__dirname,'/src/comps/index.html'),
      filename:path.join(__dirname,'/dist/index-comps.html'),
      excludeChunks: ['main'],
      inject: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    loaders: [
    {
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules|vue\/dist|vue-router\/|vue-loader/
    }]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  resolve: {
    root: path.resolve(__dirname, 'node_modules'),
    extensions: ['','.js','.vue']
  }
}

//开启压缩
if(evn=="publish"){
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            minimize: true,
            compress: {
                drop_debugger: true,
                warnings: false,
                drop_console: true
            },
            comments:false
        })
    );
}
module.exports = config;
