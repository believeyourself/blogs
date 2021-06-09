const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env.production"),
});

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.Node_ENV": JSON.stringify("production"),
    }),
  ],
});
