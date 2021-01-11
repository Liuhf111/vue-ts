const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: "bundle.js",
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
                query: { compact: false }
            },
            {
                test: /\.vue$/,
                use: [{
                        loader: "vue-loader",
                        options: {},
                    },
                    {
                        loader: "iview-loader",
                        options: {
                            prefix: false,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                },
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "style-loader","css-loader"],
                // include: [
                // "./src/",
                // "./node_modules/iview/dist/styles/iview.css"
                // ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".vue", ".json"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false,
    },
    performance: {
        hints: false,
    },
    devtool: "#eval-source-map",
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: "./index.html", //需要复制到内存的文件路径
            filename: "index.html", //复制完成后的文件名
        }),
        // new CleanWebpackPlugin()
    ],
};
if (process.env.NODE_ENV === "production") {
    module.exports.devtool = "#source-map";
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ]);
}