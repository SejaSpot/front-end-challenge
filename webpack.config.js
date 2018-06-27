const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {

    mode: "development",
    devtool: 'eval-source-map',
    context: __dirname + '/app',

    entry: './app.js',

    output: {
        path: __dirname + '/app/assets/dist',
        filename: 'bundle.js',
        publicPath: '/assets/dist', 
    },

    module: {
        rules: [
            /*{ test: /\.css$/, use: 'css-loader' },*/
            {test: /\.js$/, use: 'babel-loader', exclude:'/node_modules/' },

            { // Loading CSS
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            { // Loading Sass
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url-loader?limit=100000' }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),

    ]

}