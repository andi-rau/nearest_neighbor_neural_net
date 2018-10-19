module.exports = {
    entry: './client/src/app.js',
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
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}