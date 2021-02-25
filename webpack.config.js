const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const isProd = process.env.NODE_ENV === "production";
const port = 8083;

module.exports = {
  mode: isProd ? "production" : "development",
  devServer: {
    port,
    historyApiFallback: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: isProd ? "/market/latest" : `http://localhost:${port}/`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "unifiedLogin",
      filename: "remoteEntry.js",
      exposes: {
        "./UnifiedLoginApp": "./src/bootstrap",
      },
    }),
  ],
};
