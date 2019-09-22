const baseEnvConfig = require('./base/env.config')
const baseBuildConfig = require('./base/build.config')
const mainBuildConfig = require('./main/build.config')
// const ccmBuildConfig = require('./ccm/build.config')

// const commonBuildConfig = require('./common/build.config')

module.exports = {
  build: {
    base: baseBuildConfig,
    main: mainBuildConfig,
    ccm: ccmBuildConfig,

    // common: commonBuildConfig
  },
  env: {
    base: baseEnvConfig
  }
}
