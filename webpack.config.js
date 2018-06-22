module.exports = {

    mode: "development",

    context: __dirname + '/app',

    entry: './app.js',

    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },

    module: {
        rules: [
          /*{ test: /\.css$/, use: 'css-loader' },*/
          {test: /\.js$/, use: 'babel-loader', exclude:'/node_modules/' }
        ]
      }

}