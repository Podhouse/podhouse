const path = require("path");
const webpack = require("webpack");
const WebpackNodeExternals = require("webpack-node-externals");

const ReloadServerPlugin = require("./webpack/ReloadServerPlugin");

const cwd = process.cwd();

module.exports = {
  mode: "development",
  entry: {
    server: ["./src/app.ts"],
  },
  output: {
    path: path.resolve("build"),
    filename: "server.js",
  },
  target: "node",
  node: {
    __dirname: true,
  },
  externals: [WebpackNodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: [/node_modules/],
        include: [path.join(cwd, "src"), path.join(cwd, "../")],
      },
    ],
  },
  plugins: [
    new ReloadServerPlugin({
      script: path.resolve("build", "server.js"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
