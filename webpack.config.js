const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  // Electron設定
  {
    entry: {
      main: './src/electron/index.js',
    },
    output: {
      path: path.join(__dirname, 'build/electron'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    target: 'electron-main',
  },
  // React 設定
  {
    entry: {
      react: './src/react/index.tsx',
    },
    output: {
      path: path.join(__dirname, 'build/react'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    },
    // Electron Renderの設定
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/react/index.html',
        filename: path.join(__dirname, 'build/react/index.html'),
        inject: false,
      }),
    ],
    target: 'electron-renderer',
  },
];
