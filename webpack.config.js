const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, options) => {

  return {
    entry: {
      entry: "./src/main.js"
    },
    mode: options.mode,
    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.png$/,
          loader: require.resolve('url-loader'),
          options: {
              limit: false,
              name: 'static/assets1/images/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.png$/,
          loader: require.resolve('url-loader'),
          options: {
              limit: 100,
              name: 'static/assets2/images/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
        title: 'DEV Template',
        template: 'index-template-dev.ejs',
        hash: false,
        inject: false
      })
    ]
  }
}