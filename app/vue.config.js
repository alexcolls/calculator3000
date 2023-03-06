// const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  // publicPath: path.join(__dirname, "public"),
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    stats: { warnings: false },
  },
  chainWebpack: (config) => {
    config.plugins.delete("friendly-errors");
  },
});
