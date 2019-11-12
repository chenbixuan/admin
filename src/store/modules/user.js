import { Toast } from 'vant'

const state = {
}

const mutations = {
    login(state = {}, payload) {
        state
        let { params, callback } = payload
        if (!params.username) {
            Toast.fail('用户名为空')
            return
        } else if (!params.password) {
            Toast.fail('密码为空')
            return
        } else if (!params.VCodeImg) {
            Toast.fail('验证码不能为空')
            return
        }
        setTimeout(() => {
            callback()
            Toast.success('登陆成功')
        }, 1000)
    },
    register(state = {}, payload) {
        state
        let { params, callback } = payload
        if (!params.username) {
            Toast.fail('用户名为空')
            return
        } else if (!params.password) {
            Toast.fail('密码为空')
            return
        } else if (!params.againPassword) {
            Toast.fail('再次填写密码为空')
            return
        } else if (!params.verification) {
            Toast.fail('验证码为空')
            return
        } else if (params.password !== params.againPassword) {
            Toast.fail('两次密码不一样')
            return
        }
        setTimeout(() => {
            callback()
            Toast.success('注册成功')
        }, 1000)
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}