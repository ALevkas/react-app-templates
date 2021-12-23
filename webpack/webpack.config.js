const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

module.exports = (envVars) => {
    const {env} = envVars

    const smp = new SpeedMeasurePlugin();

    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig)

    return smp.wrap(config)
}