import { merge } from 'webpack-merge';
import SpeedMeasurePlugin from "speed-measure-webpack-plugin";

import commonConfig from './webpack.common';
import devConfig from './webpack.dev';
import prodConfig from './webpack.prod';

export default ({env}: {env: string}) => {
    const smp = new SpeedMeasurePlugin();
    let modeConfig;

    if (env === 'dev') {
        modeConfig = devConfig;
    } else {
        modeConfig = prodConfig;
    }

    const config = merge(commonConfig, modeConfig)

    return smp.wrap(config)
}