const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'styles/[name].css'}),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        favicon: './src/favicon.ico',
    }),
];

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
    mode: mode,
    target: target,

    entry: "./src/main.js",
    output: {
        publicPath: "",
        filename: 'js/[name].bundle.js',
        clean: true,
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name][ext]"
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "../" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource", // "resource", inline "will add it in js bundle as base64"
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 1 * 1024,
                //     }
                // }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    //publicPath: '../fonts/',
                    filename: 'fonts/[hash][ext][query]'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },


    plugins: plugins,

    resolve: {
        extensions: [".js", ".jsx"],
    },

    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },

    devtool: 'source-map',
    devServer: {
        static: "./dist",
        hot: true
    }
}