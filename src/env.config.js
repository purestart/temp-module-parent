const configUtil = require('./common/utils/config.util.js')
let env = {
  platform: {
    name: 'hyy',
    title: '新辰星 慧影云V1.0.0'
  },
  // getBaseUrl: configUtil.getBaseUrl
  baseUrlMapper: [
    {
      domain: '127.0.0.1',
      baseURL: '//apidev.xxx.com'
    },
    {
      domain: 'localhost',
      baseURL: '//apidev.xxx.com'
    },
    {
      domain: 'dev.xxx.com',
      baseURL: '//apidev.xxx.com'
    }
  ]
}

module.exports = {
  getEnv: moduleName => configUtil.getEnv(moduleName, env)
}
