const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports =  {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
    alias: {
      "@": path.resolve('src'),
      "~": path.resolve('collection'),
      "utils": path.resolve('utils')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'), // 更目录
    open: true,
    port: 9000
  }
}