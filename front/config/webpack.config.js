const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanPlugin = require("webpack-clean-plugin");

module.exports = {
  mode: "production",
  entry: './src/app.ts',
  devtool: "inline-source-map",
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new WebpackCleanPlugin({ verbose: true, }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../index.html') }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.less?&/,
        use: ["less-loader", "style-loader", "css-loader?modules"],
        exclude: /node_modules/,
      }, {
        test: /\.(svg|jpg|png|gif)$/,
        use: ["file-loader"],
        exclude: /node_modules/,
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};