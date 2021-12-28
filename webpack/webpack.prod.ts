import { DefinePlugin, Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const config: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('CodeEvolution'),
    }),
    new BundleAnalyzerPlugin(),
  ],
}

export default config
