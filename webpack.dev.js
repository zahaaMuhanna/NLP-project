// const webpack = require("webpack"),
//     path = require("path"),
//     htmlWebpackPlugin = require("html-webpack-plugin"),
//     { CleanWebpackPlugin } = require('clean-webpack-plugin'),
//     CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// module.exports = {
//     entry: ["./src/client/index.js"],
//     devServer: {
//         port: 8001
//     },
//     mode: "development",
//     devtool:"source-map",
//     module: {
//         rules: [
//             {
//                 test: '/\.js$/',
//                 exclude: /node_modules/,
//                 loader: "babel-loader"
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [ "style-loader", "css-loader", "sass-loader"]
//             }
//         ]
//     },

//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//         libraryTarget: 'var',
//         library: 'Client',
//         clean: true,
//     },
//     optimization: {
//         minimizer: [
//             // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
//             // `...`,
//             new CssMinimizerPlugin(),
//         ],
//         minimize: true,
//       },
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
//     ]
// }

const common = require("./webpack.common.js"),
    { merge } = require("webpack-merge"),
    CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
    path = require("path");
    
module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client',
        clean: true,
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },
})