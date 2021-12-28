import { Configuration } from 'webpack'
import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const config: Configuration = {
  entry: resolve(__dirname, '..', './src/client/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': resolve(__dirname, '..', './src/client/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|svg|jpg|jpeg)$/i,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    path: resolve(__dirname, '..', './build'),
    filename: '[name][hash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'source',
          to: 'dest',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
}

export default config
