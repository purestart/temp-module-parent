const moduleConfig = require('../../module/index')
module.exports = {
  getBaseUrl: () => {
    let domain = document.domain,
      protocol = window.location.protocol
    let baseURL = ''
    switch (domain) {
      case '127.0.0.1':
        // config.baseURL = protocol + '//api.xxxx.com'
        baseURL = protocol + '//apidev.xxxx.com'
        break
      case 'dev.xxxx.com':
        baseURL = protocol + '//apidev.xxxx.com'
        break

      default:
        baseURL = protocol + '//apidev.xxxx.com'
        break
    }
    return baseURL
  },
  getEnv: (moduleName, env) => {
    if (moduleName) {
      let configs = moduleConfig.env
      let ret = null
      Object.keys(configs).forEach(key => {
        if (moduleName === key) {
          ret = configs[moduleName]
          Object.assign(env, ret)
        }
      })
      if (ret) {
        return env
      } else {
        console.log(
          '=============================================================='
        )
        console.log(
          'no this module env,please check parent config =>module:' + moduleName
        )
        console.log(
          '=============================================================='
        )
        return env
      }
    } else {
      return env
    }
  },
  getConfig: (moduleName, config) => {
    if (moduleName) {
      let configs = moduleConfig.build
      let ret = null
      Object.keys(configs).forEach(key => {
        if (moduleName === key) {
          ret = configs[moduleName]
          // console.log(ret)
          Object.assign(config, ret)
          // console.log(config)
        }
      })
      if (ret) {
        return config
      } else {
        console.log(
          '=============================================================='
        )
        console.log(
          'no this module config,please check parent config =>module:' +
            moduleName
        )
        console.log(
          '=============================================================='
        )
        return config
      }
    } else {
      return config
    }
  },
  //获取第三方配置
  getExternal: config => {
    let __external = {}
    // console.log(JSON.stringify(config))
    if (config.source) {
      if (config.source.js && config.source.js.length > 0) {
        config.source.js.forEach(item => {
          if (item.baseSrc || item.cdnSrc) {
            if (item.externalName && item.moduleName) {
              __external[item.moduleName] = item.externalName
            }
          }
        })
      }
    }
    return __external
  }
}
