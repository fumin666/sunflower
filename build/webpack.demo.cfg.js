const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractDarkLess = new ExtractTextPlugin('dark.css');
const ExtractChalkLess = new ExtractTextPlugin('chalk.css');
const ExtractTeaLess = new ExtractTextPlugin('tea.css');
const ExtractFantaLess = new ExtractTextPlugin('fanta.css');

module.exports = {
  entry: {
    demo: path.resolve(__dirname, "../example/main")
  },
  output: {
    path: path.resolve(__dirname, "../dist/demo"),
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /theme-dark[\s\S]*\.(less|css)$/,
        loader: ExtractDarkLess.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      },
      {
        test: /theme-chalk[\s\S]*\.(less|css)$/,
        loader: ExtractChalkLess.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      },
      {
        test: /theme-tea[\s\S]*\.(less|css)$/,
        loader: ExtractTeaLess.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      },
      {
        test: /theme-fanta[\s\S]*\.(less|css)$/,
        loader: ExtractFantaLess.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      },
      {
        test: /\.(svg|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    ExtractDarkLess,
    ExtractChalkLess,
    ExtractTeaLess,
    ExtractFantaLess,
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ],
  resolve: {
    extensions: [".js", ".json", ".vue"]
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 8086
  }
};