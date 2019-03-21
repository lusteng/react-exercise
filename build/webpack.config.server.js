const 
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    target: 'node', 
    entry: {
        app: path.join(__dirname, '../client/service-entry.js')
    },
    output: {
        filename: 'server.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public',
        libraryTarget: 'commonjs2'  
    },
    module: {
        rules:[
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    }  
}