const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ExtractDarkLess = new ExtractTextPlugin('css/sf-dark.css');
const ExtractChalkLess = new ExtractTextPlugin('css/sf-chalk.css');
const ExtractTeaLess = new ExtractTextPlugin('css/sf-tea.css');
const ExtractFantaLess = new ExtractTextPlugin('css/sf-fanta.css');
module.exports = {
  entry: {
    sunflower: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist/sunflower"),
    filename: "[name].js",
    library: "Sunflower",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
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
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(svg|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
      new UglifyJSPlugin({
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        },
        comments: false
      }),
      ExtractDarkLess,
      ExtractChalkLess,
      ExtractTeaLess,
      ExtractFantaLess
  ],
  externals: {
    echarts: "echarts",
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: [".js", ".json", ".vue"]
  }
};