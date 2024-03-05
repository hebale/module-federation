const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './assets/script.min.js',
    path: path.join(__dirname, './public')
  },
  resolve: {
    conditionNames: ['svelte'],
    extensions: ['.js', '.svelte', '.scss'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015'
        }
      },
      {
        test: /\.svelte$/,
        loader: 'svelte-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8082
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new MiniCssExtractPlugin({ filename: './assets/style.min.css' })
  ]
}