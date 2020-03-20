const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env === 'production'

    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css',
            }),
        ],
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread"]
                        }
                    }
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
    }
}