const 
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin');

const 
    Development = process.env.NODE_ENV === 'development',
    host = '0.0.0.0',
    port = '1212',
    publicPath = '/public';

const config = {  
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist'),
        publicPath: publicPath
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
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, '../client/templete.html')
        })
    ]
   
}

if(Development){
    config.devServer = {
        host,
        port,
        contentBase: path.join(__dirname, '../dist'),  //devserver root 目录
        hot: true,
        overlay:{
            error: true  //显示错误信息
        },
        publicPath: '/public',
        historyApiFailback: {  //映射index页面
            index: '/public/index.html'
        }

    }
}

module.exports = config