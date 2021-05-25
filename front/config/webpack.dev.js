const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env.development"),
});

console.log(process.env.SERVER_URL);

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
    open: true,
  },
});
