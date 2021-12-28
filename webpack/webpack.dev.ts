import { DefinePlugin, Configuration } from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const config: Configuration = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}

export default config
