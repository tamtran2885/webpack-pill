const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,

                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8000,
                        name: "./src/img/[hash]-name.[ext]",
                    },
                }, ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new FaviconsWebpackPlugin({
            logo: "./src/img/amongus.png",
            mode: "webapp",
            devMode: "webapp",
        }),
    ],
    mode: "development",

    devServer: {
        historyApiFallback: true,

        port: 4500,

        open: true,

        compress: true,

        hot: true,
    },
};