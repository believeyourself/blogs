const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env.development"),
});

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.dev.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.Node_ENV": JSON.stringify("development"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
    open: true,
  },
});
