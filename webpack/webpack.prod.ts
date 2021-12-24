import {DefinePlugin, Configuration} from 'webpack'

const config: Configuration = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new DefinePlugin({
            'process.env.name': JSON.stringify('CodeEvolution')
        })
    ]
}

export default config