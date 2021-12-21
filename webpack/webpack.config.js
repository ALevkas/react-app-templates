const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, '..', './src/client/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js',]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    output: {
        path: resolve(__dirname, '..', './build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '..', './src/index.html')
        })
    ]
}