import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";

export default {
  entry: "./src/js/index.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: 'img/[hash][ext]',
        },
      },
    ],
  },
};