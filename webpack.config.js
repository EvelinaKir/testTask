
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: [
         {loader: 'babel-loader'}   
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: "css-loader", options: { modules: true }}
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
  }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: './',
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: false
  },
};