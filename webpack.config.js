var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/app.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: __dirname + '/client/dist'
    },

    module: {
        rules : [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins : [new HtmlWebpackPlugin(
        {
            template: __dirname + '/client/src/index.html'
        }
    )]
}