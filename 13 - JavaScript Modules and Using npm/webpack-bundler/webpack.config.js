const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';
module.exports = {
	devtool : 'source-map',
	entry : {
		filename : './app.js'
	},
	output : {
		filename : '_build/bundle.js'
	},
	module : {
		loaders  :[
          {
          	test : /\.js$/,
          	exclude : /node_modules/,
          	loader : 'bable',
          	query : {
          		presets : ['es2015-native-modules']
          	}
          }
		]
	},
	plugins : [
      //uglifyjs
      new webpack.optimize.UglifyJsPlugin({
      	compress : { warnings : false},
      	output : { comments : false},
      	sourceMap : true
      })
      //env plugins
      new webpack.DefinePlugin({
      	'process.env' : {
      		NODE_ENV : JSON.stringify(nodeEnv)
      	}
      })
	]
};