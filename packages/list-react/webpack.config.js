const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: './assets/script.min.js',
    path: path.join(__dirname, './public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@': path.join(__dirname, './src'),
      '@Components': path.join(__dirname, '../main-react/src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015'
        }
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
    new MiniCssExtractPlugin({ filename: './assets/style.min.js'}),
    new ModuleFederationPlugin({
      name: 'listApp',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.jsx',
      },
      shared: {
        ...dependencies
      }
    })
  ]
}