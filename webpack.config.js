const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//在内存中根据指定的模版页面生成一份内存中的首页同时把打包好的bundle.js注入到页面底部
//要配置插件，需要在导出的对象中，挂载一个 plugins节点
var htmlWebpackPlugin = require('html-webpack-plugin')
//这个配置文件起始就是一个js文件，通过Node中的模块操作向外暴露一个配置对象
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模版文件路径
            filename:'index.html'//设置生成的内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css/,use:['style-loader','css-loader']},
            {test:/\.less/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=1024&name=[hash:32]-[name].[ext]'},
            //limit的值是图片大小，图片大小大于等于值时 不会被转base64字符串，如果小于值则转base64
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//字体处理
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}