/** @type {import('next').NextConfig} */
const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const nextConfig = {
  output: "export",
  webpack(config, { isServer, dev }) {
    config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "./wasm"),
        outDir: path.resolve(__dirname, "./wasm/pkg"),
      })
    );

    // Use the client static directory in the server bundle and prod mode
    // Fixes `Error occurred prerendering page "/"`
    config.output.webassemblyModuleFilename =
      isServer && !dev
        ? "../static/wasm/[modulehash].wasm"
        : "static/wasm/[modulehash].wasm";

    // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    config.experiments = { ...config.experiments, asyncWebAssembly: true };

    return config;
  },
};

module.exports = nextConfig;
