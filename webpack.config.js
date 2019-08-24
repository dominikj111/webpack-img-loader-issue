const path = require('path')

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
              limit: 100,
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
          test: /\.png$/,
          loader: require.resolve('url-loader'),
          options: {
              limit: 100,
              name: 'static/assets3/images/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
}