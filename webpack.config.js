const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8201,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.js|jsx?$/, loader: "babel-loader", exclude: /node_modules/, options: {
                    plugins: ['syntax-dynamic-import'],
                    // 解析js中的jsx必须配置
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },
            },
            // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.css?$/, use: ['style-loader', 'css-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React+Webpack开发模版',
            filename: './index.html',
            template: 'index.html',
        }),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};