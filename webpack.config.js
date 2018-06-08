const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const outputDirectory = "dist";
module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "dist"),
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "dist"),
        use: [
          {
            loader: "file-loader?name=[name].[ext]"
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3001,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([
      {
        from: './src/assets',
        to: './src/assets'
      },
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
};
