// const webpack = require("webpack"),
//     path = require("path"),
//     htmlWebpackPlugin = require("html-webpack-plugin")
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'),
//     MiniCssExtractPlugin = require("mini-css-extract-plugin"),
//     CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
//     TerserPlugin = require("terser-webpack-plugin")


// module.exports = {
//     entry: "./src/client/index.js",
//     mode: "production",
//     devtool: "hidden-source-map",
//     module: {
//         rules: [
//             {
//                 test: '/\.js$/',
//                 exclude: /node_modules/,
//                 loader: "babel-loader"
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
//             },
//         ]
//     },
//     output: {
//         filename: 'bundle.[contenthash].js',
//         path: path.resolve(__dirname, 'dist'),
//         libraryTarget: 'var',
//         library: 'Client',
//         clean: true,
//     },
//     optimization: {
//         minimize: true,
//         minimizer: [
//             // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
//             // `...`,
//             new CssMinimizerPlugin(),
//             new TerserPlugin()
//         ],
//     },
//     plugins: [
//         new htmlWebpackPlugin({
//             template: "./src/client/views/index.html",
//             filename: "./index.html"
//         }),
//         new CleanWebpackPlugin({
//             // Simulate the removal of files
//             dry: true,
//             // Write Logs to Console
//             verbose: false,
//             // Automatically remove all unused webpack assets on rebuild
//             cleanStaleWebpackAssets: true,
//             protectWebpackAssets: false,

//         }),
//         new MiniCssExtractPlugin({
//             filename: 'style.[contenthash].css'
//         })
//     ]
// }

const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    TerserPlugin = require("terser-webpack-plugin"),
    path = require("path"),
    common = require("./webpack.common.js");
    const { merge } = require("webpack-merge")
    CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "hidden-source-map",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ]
    },
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client',
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        })
    ]
})