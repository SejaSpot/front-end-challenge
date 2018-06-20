const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');

module.exports = {
  entry: './src/app/app.js',
  mode: 'development',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      }
    ]  
  },

  plugins: [

    new UglifyJsPlugin({
        sourceMap: true
    })
      
  ]

}

console.log(path.resolve(__dirname, 'src/'));