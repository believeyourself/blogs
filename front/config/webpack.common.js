const path = require("path");
const WebpackCleanPlugin = require("webpack-clean-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[contenthash].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  plugins: [
    new WebpackCleanPlugin({ verbose: true }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets"
        },
        {
          from: "favicon.ico"
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less?$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          "less-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(svg|jpg|png|gif)$/,
        use: ["file-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      common: path.resolve(__dirname, "../../common/")
    }
  }
};
