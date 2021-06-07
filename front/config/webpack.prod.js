const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const webpack = require("webpack");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env.production"),
});

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.Node_ENV": JSON.stringify("production"),
    }),
  ],
});
