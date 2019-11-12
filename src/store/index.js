import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const mutations = {
    /**
     * 全局更新数据方法
     * @param {*} state 全局数据
     * @param {*} payload 负载参数，拥有params(更新的数据)和module(模块名)参数
    */
    setData(state, payload) {
        if (payload instanceof Object) {
            if (payload.params && payload.module) {
                let params = payload.params
                let module = payload.module
                let paramsKey = Object.keys(params)
                paramsKey.forEach(item => {
                    if (state[module].hasOwnProperty(item)) {
                        state[module][item] = params[item]
                    }
                })
            }
        }
    }
}

const store = new Vuex.Store({
  modules,
  mutations,
  getters
})

export default store