var path = require('path');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
  	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  	entry: {
	    app: path.resolve(APP_PATH, 'index.js'),
	    vendors: ['jquery', 'moment', 'lodash']
	},
  	//输出的文件名 合并以后的js会命名为bundle.js
  	output: {
	  	path: BUILD_PATH,
	  	filename: '[name].[hash].js'
  	},
  	module: {
	  	loaders: [
	  		//css的引用配置
	  		/*{
		  		test: /\.css$/,
		  		loaders: ['style', 'css'],
		  		include: APP_PATH
		  	},*/
		  	{
		  		test: /\.scss$/,
		  		loaders: ['style', 'css','sass'],
		  		include: APP_PATH
		  	},
		  	{
		        test: /\.(png|jpg)$/,
		        loader: 'url?limit=40000'
		    },
		    //编辑ES6
		    {
		        test: /\.jsx?$/,
		        loader: 'babel',
		        include: APP_PATH,
		        query: {
		          presets: ['es2015']
		        }
		    }
	  	]
  	},
  	//开发服务器
  	devServer: {
	  	historyApiFallback: true,
	  	hot: true,
	  	inline: true,
	  	progress: true,
  	},
  	plugins: [
	    //使用webpack.ProvidePlugin把一个全局变量插入到所有的代码中
	    new webpack.optimize.UglifyJsPlugin({minimize: true}),
	    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
	    new webpack.ProvidePlugin({
	      $: "jquery",
	      jQuery: "jquery",
	      "window.jQuery": "jquery"
	    })
  	]

};